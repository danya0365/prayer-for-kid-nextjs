import { LessonDetailView } from "@/src/presentation/components/lesson-detail/LessonDetailView";
import { LessonDetailPresenterFactory } from "@/src/presentation/presenters/lesson-detail/LessonDetailPresenter";
import { lessonsMockData } from "@/src/data/mock/lessons.mock";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Tell Next.js this is a dynamic page
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

interface LessonDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static params for all lessons
 */
export async function generateStaticParams() {
  return lessonsMockData.map((lesson) => ({
    slug: lesson.slug,
  }));
}

/**
 * Generate metadata for the lesson detail page
 */
export async function generateMetadata({
  params,
}: LessonDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const presenter = await LessonDetailPresenterFactory.create();

  try {
    return presenter.generateMetadata(resolvedParams.slug);
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Fallback metadata
    return {
      title: "บทเรียน | Prayer for Kids",
      description: "เรียนรู้การละหมาดทีละขั้นตอน",
    };
  }
}

/**
 * Lesson Detail Page - Server Component for SEO optimization
 * Uses presenter pattern following Clean Architecture
 */
export default async function LessonDetailPage({ params }: LessonDetailPageProps) {
  const resolvedParams = await params;
  const presenter = await LessonDetailPresenterFactory.create();

  try {
    // Get view model from presenter
    const viewModel = await presenter.getViewModel(resolvedParams.slug);

    return <LessonDetailView slug={resolvedParams.slug} initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error fetching lesson detail data:", error);

    // If lesson not found, show 404
    notFound();
  }
}
