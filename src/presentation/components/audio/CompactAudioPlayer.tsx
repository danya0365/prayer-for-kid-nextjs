"use client";

import { useAudioPlayer } from "@/src/hooks/useAudioPlayer";

interface CompactAudioPlayerProps {
  audioUrl?: string;
  title?: string;
  className?: string;
}

export function CompactAudioPlayer({
  audioUrl,
  title,
  className = "",
}: CompactAudioPlayerProps) {
  const {
    isPlaying,
    currentTime,
    duration,
    isLoading,
    togglePlay,
    formatTime,
  } = useAudioPlayer(audioUrl);

  if (!audioUrl) {
    return null;
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 ${className}`}>
      <div className="flex items-center space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md transform hover:scale-110 transition-all disabled:opacity-50 flex items-center justify-center flex-shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            // Pause Icon
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            // Play Icon
            <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Info & Progress */}
        <div className="flex-1 min-w-0">
          {title && (
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate mb-1">
              {title}
            </p>
          )}
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-200"
                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
              />
            </div>
          </div>

          {/* Time */}
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
