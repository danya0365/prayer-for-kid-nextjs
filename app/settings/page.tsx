import { SettingsView } from "@/src/presentation/components/settings/SettingsView";
import { SettingsPresenterFactory } from "@/src/presentation/presenters/settings/SettingsPresenter";
import type { Metadata } from "next";

// Tell Next.js this is a dynamic page
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

/**
 * Generate metadata for the settings page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await SettingsPresenterFactory.create();

  try {
    return presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Fallback metadata
    return {
      title: "ตั้งค่า | Prayer for Kids",
      description: "ตั้งค่าการแสดงผล เสียง และการแจ้งเตือน",
    };
  }
}

/**
 * Settings Page - Server Component for SEO optimization
 * Uses presenter pattern following Clean Architecture
 */
export default async function SettingsPage() {
  const presenter = await SettingsPresenterFactory.create();

  try {
    // Get view model from presenter
    const viewModel = await presenter.getViewModel();

    return <SettingsView initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error fetching settings data:", error);

    // Fallback UI
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
