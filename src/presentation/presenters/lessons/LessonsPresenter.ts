import {
  lessonsMockData,
  lessonCategories,
  getLessonsByCategory,
  type Lesson,
  type LessonCategory,
} from "@/src/data/mock/lessons.mock";

/**
 * View Model for Lessons Page
 */
export interface LessonsViewModel {
  lessons: Lesson[];
  categories: typeof lessonCategories;
  stats: {
    totalLessons: number;
    completedLessons: number;
    inProgressLessons: number;
    lockedLessons: number;
  };
}

/**
 * Presenter for Lessons Page
 * Follows Clean Architecture with proper separation of concerns
 */
export class LessonsPresenter {
  /**
   * Get view model for the lessons page
   */
  async getViewModel(category: LessonCategory | "all" = "all"): Promise<LessonsViewModel> {
    try {
      // Get lessons based on category
      const lessons = getLessonsByCategory(category);

      // Calculate stats (mock data for now)
      const stats = {
        totalLessons: lessonsMockData.length,
        completedLessons: 5, // Mock: user completed 5 lessons
        inProgressLessons: 2, // Mock: user has 2 in progress
        lockedLessons: lessonsMockData.filter((l) => l.isLocked).length,
      };

      return {
        lessons,
        categories: lessonCategories,
        stats,
      };
    } catch (error) {
      console.error("Error fetching lessons data:", error);
      throw error;
    }
  }

  /**
   * Generate metadata for the lessons page
   */
  async generateMetadata() {
    try {
      return {
        title: "บทเรียนการละหมาด | Prayer for Kids",
        description:
          "เรียนรู้การละหมาดทีละขั้นตอน ตั้งแต่พื้นฐานจนถึงการละหมาดแต่ละเวลา ด้วยภาพสวยงามและคำอธิบายที่เข้าใจง่าย",
        keywords: [
          "บทเรียนละหมาด",
          "สอนละหมาด",
          "ขั้นตอนละหมาด",
          "ดุอาอ์",
          "การละหมาด 5 เวลา",
        ],
      };
    } catch (error) {
      console.error("Error generating metadata:", error);
      throw error;
    }
  }

  /**
   * Search lessons by keyword
   */
  async searchLessons(keyword: string): Promise<Lesson[]> {
    try {
      const lowerKeyword = keyword.toLowerCase();
      return lessonsMockData.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(lowerKeyword) ||
          lesson.description.toLowerCase().includes(lowerKeyword) ||
          lesson.titleArabic?.toLowerCase().includes(lowerKeyword)
      );
    } catch (error) {
      console.error("Error searching lessons:", error);
      throw error;
    }
  }
}

/**
 * Factory for creating LessonsPresenter instances
 */
export class LessonsPresenterFactory {
  static async create(): Promise<LessonsPresenter> {
    return new LessonsPresenter();
  }
}
