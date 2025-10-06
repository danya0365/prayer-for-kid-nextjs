"use client";

import Link from "next/link";
import type { Lesson } from "@/src/data/mock/lessons.mock";

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  const difficultyLabels = {
    beginner: "เริ่มต้น",
    intermediate: "กลาง",
    advanced: "สูง",
  };

  const categoryColors = {
    basics: "from-green-500 to-emerald-600",
    steps: "from-purple-500 to-indigo-600",
    duas: "from-orange-500 to-amber-600",
    prayers: "from-pink-500 to-rose-600",
  };

  return (
    <Link
      href={lesson.isLocked ? "#" : `/lessons/${lesson.slug}`}
      className={`group block ${lesson.isLocked ? "cursor-not-allowed" : ""}`}
    >
      <div
        className={`relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform ${
          lesson.isLocked ? "opacity-60" : "hover:-translate-y-2"
        } border-4 border-transparent hover:border-blue-200 dark:hover:border-blue-800`}
      >
        {/* Lock Overlay */}
        {lesson.isLocked && (
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">🔒</div>
              <p className="text-white font-bold text-lg">ล็อค</p>
              <p className="text-white/80 text-sm">เรียนบทก่อนหน้าก่อน</p>
            </div>
          </div>
        )}

        {/* Thumbnail */}
        <div
          className={`bg-gradient-to-br ${categoryColors[lesson.category]} p-8 text-center relative`}
        >
          <div className="text-8xl mb-2">🕌</div>
          {/* Difficulty Badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColors[lesson.difficulty]}`}
            >
              {difficultyLabels[lesson.difficulty]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Order Number */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-sm">
              {lesson.order}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <span className="mr-1">⏱️</span>
              {lesson.duration} นาที
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {lesson.title}
          </h3>

          {/* Arabic Title */}
          {lesson.titleArabic && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3 font-arabic">
              {lesson.titleArabic}
            </p>
          )}

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {lesson.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="mr-1">👥</span>
              <span>{lesson.completedBy?.toLocaleString()} คน</span>
            </div>

            {!lesson.isLocked && (
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                เริ่มเรียน →
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
