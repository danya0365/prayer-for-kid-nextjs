import { prayerStepsMockData, type PrayerStep } from "@/src/data/mock/prayer-steps.mock";

/**
 * View Model for Practice Page
 */
export interface PracticeViewModel {
  steps: PrayerStep[];
  totalSteps: number;
  practiceMode: "full" | "single";
}

/**
 * Presenter for Practice Page
 */
export class PracticePresenter {
  async getViewModel(): Promise<PracticeViewModel> {
    try {
      return {
        steps: prayerStepsMockData,
        totalSteps: prayerStepsMockData.length,
        practiceMode: "full",
      };
    } catch (error) {
      console.error("Error fetching practice data:", error);
      throw error;
    }
  }

  async generateMetadata() {
    return {
      title: "ฝึกฝนการละหมาด | Prayer for Kids",
      description: "ฝึกฝนการละหมาดทีละขั้นตอน ด้วยภาพและคำอธิบายที่เข้าใจง่าย",
    };
  }
}

export class PracticePresenterFactory {
  static async create(): Promise<PracticePresenter> {
    return new PracticePresenter();
  }
}
