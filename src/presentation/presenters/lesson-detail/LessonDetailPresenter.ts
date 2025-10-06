import { getLessonBySlug, getNextLesson, getPreviousLesson, type Lesson } from "@/src/data/mock/lessons.mock";
import { getLessonContentBySlug, type LessonContent } from "@/src/data/mock/lesson-content.mock";

/**
 * View Model for Lesson Detail Page
 */
export interface LessonDetailViewModel {
  lesson: Lesson;
  content: LessonContent;
  nextLesson?: Lesson;
  previousLesson?: Lesson;
  progress: {
    currentStep: number;
    totalSteps: number;
    isCompleted: boolean;
  };
}

/**
 * Presenter for Lesson Detail Page
 * Follows Clean Architecture with proper separation of concerns
 */
export class LessonDetailPresenter {
  /**
   * Get view model for the lesson detail page
   */
  async getViewModel(slug: string): Promise<LessonDetailViewModel> {
    try {
      // Get lesson by slug
      const lesson = getLessonBySlug(slug);
      if (!lesson) {
        throw new Error(`Lesson not found: ${slug}`);
      }

      // Get lesson content
      const content = getLessonContentBySlug(slug);
      if (!content) {
        // Return default content if not found
        const defaultContent: LessonContent = {
          lessonId: lesson.id,
          introduction: lesson.description,
          steps: [
            {
              id: "1",
              stepNumber: 1,
              title: "เนื้อหาบทเรียน",
              content: "เนื้อหาของบทเรียนนี้กำลังอยู่ในระหว่างการพัฒนา กรุณากลับมาดูใหม่ในภายหลัง",
            },
          ],
          summary: lesson.description,
          keyPoints: ["เนื้อหากำลังพัฒนา"],
        };
        
        return {
          lesson,
          content: defaultContent,
          nextLesson: getNextLesson(lesson.id),
          previousLesson: getPreviousLesson(lesson.id),
          progress: {
            currentStep: 1,
            totalSteps: 1,
            isCompleted: false,
          },
        };
      }

      // Get next and previous lessons
      const nextLesson = getNextLesson(lesson.id);
      const previousLesson = getPreviousLesson(lesson.id);

      // Mock progress (in real app, this would come from user data)
      const progress = {
        currentStep: 1,
        totalSteps: content.steps.length,
        isCompleted: false, // Mock: user hasn't completed this lesson
      };

      return {
        lesson,
        content,
        nextLesson,
        previousLesson,
        progress,
      };
    } catch (error) {
      console.error("Error fetching lesson detail data:", error);
      throw error;
    }
  }

  /**
   * Generate metadata for the lesson detail page
   */
  async generateMetadata(slug: string) {
    try {
      const lesson = getLessonBySlug(slug);
      if (!lesson) {
        return {
          title: "ไม่พบบทเรียน | Prayer for Kids",
          description: "ไม่พบบทเรียนที่คุณกำลังมองหา",
        };
      }

      return {
        title: `${lesson.title} | Prayer for Kids`,
        description: lesson.description,
        keywords: [
          lesson.title,
          "บทเรียนละหมาด",
          "สอนละหมาด",
          lesson.category,
        ],
      };
    } catch (error) {
      console.error("Error generating metadata:", error);
      throw error;
    }
  }

  /**
   * Mark lesson as completed
   */
  async markAsCompleted(lessonId: string): Promise<boolean> {
    try {
      // In real app, this would save to database
      console.log(`Marking lesson ${lessonId} as completed`);
      return true;
    } catch (error) {
      console.error("Error marking lesson as completed:", error);
      return false;
    }
  }

  /**
   * Update progress
   */
  async updateProgress(lessonId: string, stepNumber: number): Promise<boolean> {
    try {
      // In real app, this would save to database
      console.log(`Updating progress for lesson ${lessonId}, step ${stepNumber}`);
      return true;
    } catch (error) {
      console.error("Error updating progress:", error);
      return false;
    }
  }
}

/**
 * Factory for creating LessonDetailPresenter instances
 */
export class LessonDetailPresenterFactory {
  static async create(): Promise<LessonDetailPresenter> {
    return new LessonDetailPresenter();
  }
}
