/**
 * Custom hook for Audio Player
 * จัดการ state และ logic ของ Audio Player
 */

"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  isLooping: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAudioPlayer(audioUrl?: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0.7,
    playbackRate: 1,
    isLooping: false,
    isLoading: false,
    error: null,
  });

  // Initialize audio element
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
      
      // Set initial volume
      audioRef.current.volume = state.volume;
      
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, []);

  // Load audio when URL changes
  useEffect(() => {
    if (!audioRef.current || !audioUrl) return;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    audioRef.current.src = audioUrl;
    audioRef.current.load();

    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        setState((prev) => ({
          ...prev,
          duration: audioRef.current!.duration,
          isLoading: false,
        }));
      }
    };

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setState((prev) => ({
          ...prev,
          currentTime: audioRef.current!.currentTime,
        }));
      }
    };

    const handleEnded = () => {
      if (state.isLooping && audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        setState((prev) => ({ ...prev, isPlaying: false, currentTime: 0 }));
      }
    };

    const handleError = () => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: "ไม่สามารถโหลดไฟล์เสียงได้",
      }));
    };

    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("ended", handleEnded);
    audioRef.current.addEventListener("error", handleError);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.removeEventListener("error", handleError);
      }
    };
  }, [audioUrl, state.isLooping]);

  // Play/Pause
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (state.isPlaying) {
      audioRef.current.pause();
      setState((prev) => ({ ...prev, isPlaying: false }));
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
        setState((prev) => ({
          ...prev,
          error: "ไม่สามารถเล่นเสียงได้",
        }));
      });
      setState((prev) => ({ ...prev, isPlaying: true }));
    }
  }, [state.isPlaying]);

  // Seek to position
  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setState((prev) => ({ ...prev, currentTime: time }));
  }, []);

  // Set volume
  const setVolume = useCallback((volume: number) => {
    if (!audioRef.current) return;
    const clampedVolume = Math.max(0, Math.min(1, volume));
    audioRef.current.volume = clampedVolume;
    setState((prev) => ({ ...prev, volume: clampedVolume }));
  }, []);

  // Set playback rate
  const setPlaybackRate = useCallback((rate: number) => {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = rate;
    setState((prev) => ({ ...prev, playbackRate: rate }));
  }, []);

  // Toggle loop
  const toggleLoop = useCallback(() => {
    setState((prev) => ({ ...prev, isLooping: !prev.isLooping }));
  }, []);

  // Reset
  const reset = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setState((prev) => ({
      ...prev,
      isPlaying: false,
      currentTime: 0,
    }));
  }, []);

  // Format time (seconds to mm:ss)
  const formatTime = useCallback((seconds: number): string => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, []);

  return {
    ...state,
    togglePlay,
    seek,
    setVolume,
    setPlaybackRate,
    toggleLoop,
    reset,
    formatTime,
  };
}
