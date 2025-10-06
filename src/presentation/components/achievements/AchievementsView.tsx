"use client";

import { AchievementsViewModel } from "@/src/presentation/presenters/achievements/AchievementsPresenter";
import { useAchievementsPresenter } from "@/src/presentation/presenters/achievements/useAchievementsPresenter";
import type { Achievement } from "@/src/data/mock/achievements.mock";

interface AchievementsViewProps {
  initialViewModel?: AchievementsViewModel;
}

export function AchievementsView({ initialViewModel }: AchievementsViewProps) {
  const { viewModel, selectedCategory, filteredAchievements, setCategory } =
    useAchievementsPresenter(initialViewModel);

  if (!viewModel) {
    return null;
  }

  const { userStats, categories, unlockedCount, lockedCount, pointsForNextLevel } = viewModel;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            รางวัลและความสำเร็จ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ติดตามความคืบหน้าและรับรางวัลจากการเรียนรู้
          </p>
        </div>

        {/* User Stats Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl mb-12 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Level {userStats.level}</h2>
              <p className="text-blue-100">คะแนนรวม: {userStats.totalPoints} คะแนน</p>
            </div>
            <div className="text-6xl">👤</div>
          </div>

          {/* Progress to Next Level */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">ไปยังเลเวลถัดไป</span>
              <span className="text-sm font-bold">อีก {pointsForNextLevel} คะแนน</span>
            </div>
            <div className="relative h-4 bg-white/30 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-500"
                style={{
                  width: `${((userStats.totalPoints % 100) / 100) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl mb-1">📚</div>
              <div className="text-2xl font-bold">{userStats.lessonsCompleted}</div>
              <div className="text-sm text-blue-100">บทเรียนจบ</div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl mb-1">🕌</div>
              <div className="text-2xl font-bold">{userStats.practiceCount}</div>
              <div className="text-sm text-blue-100">ครั้งที่ฝึก</div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl mb-1">🔥</div>
              <div className="text-2xl font-bold">{userStats.currentStreak}</div>
              <div className="text-sm text-blue-100">วันติดต่อกัน</div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl mb-1">🏆</div>
              <div className="text-2xl font-bold">{userStats.achievementsUnlocked}</div>
              <div className="text-sm text-blue-100">รางวัลที่ได้</div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400">รางวัลทั้งหมด</span>
              <span className="text-3xl">🎯</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {userStats.totalAchievements}
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400">ปลดล็อคแล้ว</span>
              <span className="text-3xl">✅</span>
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {unlockedCount}
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400">ยังล็อคอยู่</span>
              <span className="text-3xl">🔒</span>
            </div>
            <div className="text-3xl font-bold text-gray-600 dark:text-gray-400">
              {lockedCount}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setCategory("all")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span className="text-2xl">🎯</span>
              <span>ทั้งหมด</span>
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              ไม่พบรางวัล
            </h3>
            <p className="text-gray-600 dark:text-gray-400">ลองเลือกหมวดหมู่อื่น</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Achievement Card Component
function AchievementCard({ achievement }: { achievement: Achievement }) {
  const progressPercentage = achievement.progress
    ? (achievement.progress.current / achievement.progress.target) * 100
    : 0;

  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg transition-all transform hover:-translate-y-2 ${
        achievement.isUnlocked
          ? "border-4 border-yellow-400 dark:border-yellow-600"
          : "border-4 border-gray-200 dark:border-gray-700 opacity-75"
      }`}
    >
      {/* Lock Overlay */}
      {!achievement.isUnlocked && (
        <div className="absolute top-4 right-4">
          <div className="text-3xl">🔒</div>
        </div>
      )}

      {/* Unlocked Badge */}
      {achievement.isUnlocked && (
        <div className="absolute top-4 right-4">
          <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
            ปลดล็อค
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="text-center mb-4">
        <div className="text-6xl mb-2">{achievement.icon}</div>
        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          +{achievement.points} คะแนน
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
        {achievement.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
        {achievement.description}
      </p>

      {/* Requirement */}
      <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-3 mb-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
          <span className="font-bold">เงื่อนไข:</span> {achievement.requirement}
        </p>
      </div>

      {/* Progress Bar */}
      {achievement.progress && !achievement.isUnlocked && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              ความคืบหน้า
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {achievement.progress.current} / {achievement.progress.target}
            </span>
          </div>
          <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Unlocked Date */}
      {achievement.isUnlocked && achievement.unlockedAt && (
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ปลดล็อคเมื่อ: {new Date(achievement.unlockedAt).toLocaleDateString("th-TH")}
          </p>
        </div>
      )}
    </div>
  );
}
