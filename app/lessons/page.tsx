import { LessonsView } from "@/src/presentation/components/lessons/LessonsView";
import { LessonsPresenterFactory } from "@/src/presentation/presenters/lessons/LessonsPresenter";
import type { Metadata } from "next";

// Tell Next.js this is a dynamic page
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

/**
 * Generate metadata for the lessons page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await LessonsPresenterFactory.create();

  try {
    return presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Fallback metadata
    return {
      title: "บทเรียนการละหมาด | Prayer for Kids",
      description: "เรียนรู้การละหมาดทีละขั้นตอน ด้วยภาพสวยงามและคำอธิบายที่เข้าใจง่าย",
    };
  }
}

/**
 * Lessons Page - Server Component for SEO optimization
 * Uses presenter pattern following Clean Architecture
 */
export default async function LessonsPage() {
  const presenter = await LessonsPresenterFactory.create();

  try {
    // Get view model from presenter
    const viewModel = await presenter.getViewModel();

    return <LessonsView initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error fetching lessons data:", error);

    // Fallback UI
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            เกิดข้อผิดพลาด
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ไม่สามารถโหลดข้อมูลบทเรียนได้
          </p>
        </div>
      </div>
    );
  }
}
