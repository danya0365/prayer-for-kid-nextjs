"use client";

import { LessonsViewModel } from "@/src/presentation/presenters/lessons/LessonsPresenter";
import { useLessonsPresenter } from "@/src/presentation/presenters/lessons/useLessonsPresenter";
import { LessonCard } from "./LessonCard";
import type { LessonCategory } from "@/src/data/mock/lessons.mock";

interface LessonsViewProps {
  initialViewModel?: LessonsViewModel;
}

export function LessonsView({ initialViewModel }: LessonsViewProps) {
  const {
    viewModel,
    loading,
    error,
    selectedCategory,
    searchKeyword,
    filteredLessons,
    setCategory,
    searchLessons,
  } = useLessonsPresenter(initialViewModel);

  // Show loading only on initial load
  if (loading && !viewModel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            กำลังโหลดบทเรียน...
          </p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error && !viewModel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 font-medium mb-4">
            เกิดข้อผิดพลาด: {error}
          </p>
        </div>
      </div>
    );
  }

  if (!viewModel) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            บทเรียนการละหมาด
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            เรียนรู้การละหมาดทีละขั้นตอน ตั้งแต่พื้นฐานจนถึงการละหมาดแต่ละเวลา
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {viewModel.stats.totalLessons}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">บทเรียนทั้งหมด</div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
              {viewModel.stats.completedLessons}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">เรียนจบแล้ว</div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-2">📖</div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              {viewModel.stats.inProgressLessons}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">กำลังเรียน</div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-2">🔒</div>
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-1">
              {viewModel.stats.lockedLessons}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">ล็อคอยู่</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาบทเรียน..."
                value={searchKeyword}
                onChange={(e) => searchLessons(e.target.value)}
                className="w-full px-6 py-4 pl-14 text-lg rounded-full border-4 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-600 shadow-lg"
              />
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl">
                🔍
              </span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {viewModel.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategory(category.id as LessonCategory | "all")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Lessons Grid */}
        {filteredLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              ไม่พบบทเรียน
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ลองค้นหาด้วยคำอื่นหรือเลือกหมวดหมู่อื่น
            </p>
          </div>
        )}

        {/* Progress Indicator */}
        {viewModel.stats.completedLessons > 0 && (
          <div className="mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ความคืบหน้าของคุณ
              </h3>
              <span className="text-3xl">🎯</span>
            </div>
            <div className="relative h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-500"
                style={{
                  width: `${(viewModel.stats.completedLessons / viewModel.stats.totalLessons) * 100}%`,
                }}
              ></div>
            </div>
            <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
              เรียนไปแล้ว {viewModel.stats.completedLessons} จาก{" "}
              {viewModel.stats.totalLessons} บท (
              {Math.round((viewModel.stats.completedLessons / viewModel.stats.totalLessons) * 100)}
              %)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
