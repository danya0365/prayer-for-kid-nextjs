import { AchievementsView } from "@/src/presentation/components/achievements/AchievementsView";
import { AchievementsPresenterFactory } from "@/src/presentation/presenters/achievements/AchievementsPresenter";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  const presenter = await AchievementsPresenterFactory.create();

  try {
    return presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);

    return {
      title: "รางวัลและความสำเร็จ | Prayer for Kids",
      description: "ติดตามความคืบหน้าและรับรางวัล",
    };
  }
}

export default async function AchievementsPage() {
  const presenter = await AchievementsPresenterFactory.create();

  try {
    const viewModel = await presenter.getViewModel();

    return <AchievementsView initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error fetching achievements data:", error);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            เกิดข้อผิดพลาด
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ไม่สามารถโหลดข้อมูลได้
          </p>
        </div>
      </div>
    );
  }
}
