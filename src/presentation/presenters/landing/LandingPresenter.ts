import { landingMockData, type LandingData } from "@/src/data/mock/landing.mock";

/**
 * View Model for Landing Page
 */
export interface LandingViewModel {
  landingData: LandingData;
}

/**
 * Presenter for Landing Page
 * Follows Clean Architecture with proper separation of concerns
 */
export class LandingPresenter {
  /**
   * Get view model for the landing page
   */
  async getViewModel(): Promise<LandingViewModel> {
    try {
      // For now, we're using mock data
      // Later, this can be replaced with API calls
      const landingData = landingMockData;

      return {
        landingData,
      };
    } catch (error) {
      console.error("Error fetching landing data:", error);
      throw error;
    }
  }

  /**
   * Generate metadata for the landing page
   */
  async generateMetadata() {
    try {
      return {
        title: "เรียนรู้การละหมาดสำหรับเด็ก | Prayer for Kids",
        description:
          "เรียนรู้การละหมาดอย่างสนุกสนาน ด้วยภาพสวยงาม สีสันสดใส เหมาะกับเด็กๆ ทุกวัย เรียนรู้ทีละขั้นตอน มีเสียงประกอบ และระบบรางวัล",
        keywords: [
          "การละหมาด",
          "สอนละหมาด",
          "ละหมาดสำหรับเด็ก",
          "เรียนอิสลาม",
          "ดุอาอ์",
          "prayer",
          "salah",
          "islamic education",
        ],
        openGraph: {
          title: "เรียนรู้การละหมาดสำหรับเด็ก",
          description: "เรียนรู้การละหมาดอย่างสนุกสนาน ด้วยภาพสวยงาม สีสันสดใส",
          type: "website",
        },
      };
    } catch (error) {
      console.error("Error generating metadata:", error);
      throw error;
    }
  }
}

/**
 * Factory for creating LandingPresenter instances
 */
export class LandingPresenterFactory {
  static async create(): Promise<LandingPresenter> {
    return new LandingPresenter();
  }
}
