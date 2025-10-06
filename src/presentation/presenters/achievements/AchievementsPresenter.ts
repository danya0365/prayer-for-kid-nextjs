import {
  achievementsMockData,
  userStatsMockData,
  getAchievementsByCategory,
  getUnlockedAchievements,
  getLockedAchievements,
  getPointsForNextLevel,
  type Achievement,
  type UserStats,
} from "@/src/data/mock/achievements.mock";

/**
 * View Model for Achievements Page
 */
export interface AchievementsViewModel {
  achievements: Achievement[];
  userStats: UserStats;
  categories: {
    id: Achievement["category"];
    name: string;
    icon: string;
    count: number;
  }[];
  unlockedCount: number;
  lockedCount: number;
  pointsForNextLevel: number;
}

/**
 * Presenter for Achievements Page
 */
export class AchievementsPresenter {
  async getViewModel(): Promise<AchievementsViewModel> {
    try {
      const categories = [
        {
          id: "lessons" as const,
          name: "บทเรียน",
          icon: "📚",
          count: getAchievementsByCategory("lessons").length,
        },
        {
          id: "practice" as const,
          name: "ฝึกฝน",
          icon: "🕌",
          count: getAchievementsByCategory("practice").length,
        },
        {
          id: "streak" as const,
          name: "ความมุ่งมั่น",
          icon: "🔥",
          count: getAchievementsByCategory("streak").length,
        },
        {
          id: "special" as const,
          name: "พิเศษ",
          icon: "⭐",
          count: getAchievementsByCategory("special").length,
        },
      ];

      const unlockedAchievements = getUnlockedAchievements();
      const lockedAchievements = getLockedAchievements();

      return {
        achievements: achievementsMockData,
        userStats: userStatsMockData,
        categories,
        unlockedCount: unlockedAchievements.length,
        lockedCount: lockedAchievements.length,
        pointsForNextLevel: getPointsForNextLevel(userStatsMockData.totalPoints),
      };
    } catch (error) {
      console.error("Error fetching achievements data:", error);
      throw error;
    }
  }

  async generateMetadata() {
    return {
      title: "รางวัลและความสำเร็จ | Prayer for Kids",
      description: "ติดตามความคืบหน้าและรับรางวัลจากการเรียนรู้การละหมาด",
    };
  }
}

export class AchievementsPresenterFactory {
  static async create(): Promise<AchievementsPresenter> {
    return new AchievementsPresenter();
  }
}
