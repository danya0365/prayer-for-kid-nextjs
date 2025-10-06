"use client";

import { useAudioPlayer } from "@/src/hooks/useAudioPlayer";

interface AudioPlayerProps {
  audioUrl?: string;
  title?: string;
  subtitle?: string;
  showSpeed?: boolean;
  showLoop?: boolean;
  className?: string;
}

export function AudioPlayer({
  audioUrl,
  title,
  subtitle,
  showSpeed = true,
  showLoop = true,
  className = "",
}: AudioPlayerProps) {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackRate,
    isLooping,
    isLoading,
    error,
    togglePlay,
    seek,
    setVolume,
    setPlaybackRate,
    toggleLoop,
    formatTime,
  } = useAudioPlayer(audioUrl);

  const playbackRates = [0.5, 0.75, 1, 1.25, 1.5];

  if (!audioUrl) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">ไม่มีไฟล์เสียง</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-3xl p-6 text-center">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl p-6 ${className}`}>
      {/* Title */}
      {(title || subtitle) && (
        <div className="mb-6 text-center">
          {title && (
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
          )}
        </div>
      )}

      {/* Play/Pause Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            // Pause Icon
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            // Play Icon
            <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={(e) => seek(parseFloat(e.target.value))}
          className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-500"
          style={{
            background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(currentTime / duration) * 100}%, #E5E7EB ${(currentTime / duration) * 100}%, #E5E7EB 100%)`,
          }}
        />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Volume Control */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">🔊</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              เสียง
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-500"
          />
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
            {Math.round(volume * 100)}%
          </div>
        </div>

        {/* Speed Control */}
        {showSpeed && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                ความเร็ว
              </span>
            </div>
            <div className="flex space-x-1">
              {playbackRates.map((rate) => (
                <button
                  key={rate}
                  onClick={() => setPlaybackRate(rate)}
                  className={`flex-1 px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                    playbackRate === rate
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Loop Toggle */}
      {showLoop && (
        <button
          onClick={toggleLoop}
          className={`w-full py-3 rounded-2xl font-medium transition-all ${
            isLooping
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          <span className="mr-2">{isLooping ? "🔁" : "↻"}</span>
          {isLooping ? "เล่นซ้ำ: เปิด" : "เล่นซ้ำ: ปิด"}
        </button>
      )}
    </div>
  );
}
