"use client";

import { LessonDetailViewModel } from "@/src/presentation/presenters/lesson-detail/LessonDetailPresenter";
import { useLessonDetailPresenter } from "@/src/presentation/presenters/lesson-detail/useLessonDetailPresenter";
import Link from "next/link";

interface LessonDetailViewProps {
  slug: string;
  initialViewModel?: LessonDetailViewModel;
}

export function LessonDetailView({ slug, initialViewModel }: LessonDetailViewProps) {
  const {
    viewModel,
    loading,
    error,
    currentStep,
    isCompleted,
    goToStep,
    nextStep,
    previousStep,
    markAsCompleted,
  } = useLessonDetailPresenter(slug, initialViewModel);

  // Show loading
  if (loading && !viewModel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            กำลังโหลดบทเรียน...
          </p>
        </div>
      </div>
    );
  }

  // Show error
  if (error && !viewModel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 font-medium mb-4">
            เกิดข้อผิดพลาด: {error}
          </p>
          <Link
            href="/lessons"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all"
          >
            กลับไปหน้าบทเรียน
          </Link>
        </div>
      </div>
    );
  }

  if (!viewModel) {
    return null;
  }

  const { lesson, content, nextLesson, previousLesson } = viewModel;
  const currentStepData = content.steps[currentStep - 1];
  const totalSteps = content.steps.length;
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/lessons"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 text-lg font-medium"
        >
          <span className="mr-2">←</span>
          กลับไปหน้าบทเรียน
        </Link>

        {/* Lesson Header */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold">
                  {lesson.order}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {lesson.category === "basics" && "พื้นฐาน"}
                  {lesson.category === "steps" && "ขั้นตอน"}
                  {lesson.category === "duas" && "ดุอาอ์"}
                  {lesson.category === "prayers" && "เวลาละหมาด"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {lesson.title}
              </h1>
              {lesson.titleArabic && (
                <p className="text-2xl text-gray-600 dark:text-gray-400 mb-3 font-arabic">
                  {lesson.titleArabic}
                </p>
              )}
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {lesson.description}
              </p>
            </div>
            <div className="text-6xl ml-4">🕌</div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                ความคืบหน้า
              </span>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {currentStep} / {totalSteps}
              </span>
            </div>
            <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Introduction (show only on first step) */}
        {currentStep === 1 && (
          <div className="bg-blue-100 dark:bg-blue-900/50 rounded-3xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="mr-2">📖</span>
              บทนำ
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {content.introduction}
            </p>
          </div>
        )}

        {/* Current Step Content */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-8">
          {/* Step Header */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full font-bold text-xl">
              {currentStepData.stepNumber}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {currentStepData.title}
            </h2>
          </div>

          {/* Step Image */}
          {currentStepData.image && (
            <div className="mb-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8 text-center">
              <div className="text-9xl">🕌</div>
            </div>
          )}

          {/* Step Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {currentStepData.content}
            </p>
          </div>

          {/* Arabic Text Section */}
          {currentStepData.arabicText && (
            <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="mr-2">📜</span>
                ข้อความภาษาอาหรับ
              </h3>
              <p className="text-3xl text-center text-gray-900 dark:text-white mb-4 font-arabic leading-relaxed">
                {currentStepData.arabicText}
              </p>
              {currentStepData.transliteration && (
                <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-2 italic">
                  {currentStepData.transliteration}
                </p>
              )}
              {currentStepData.translation && (
                <p className="text-lg text-center text-gray-600 dark:text-gray-400">
                  ความหมาย: {currentStepData.translation}
                </p>
              )}
            </div>
          )}

          {/* Audio Player */}
          {currentStepData.audioUrl && (
            <div className="bg-purple-100 dark:bg-purple-900/50 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="mr-2">🔊</span>
                ฟังการออกเสียง
              </h3>
              <div className="flex items-center justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105">
                  ▶️ เล่นเสียง
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-3">
                คลิกเพื่อฟังการออกเสียงที่ถูกต้อง
              </p>
            </div>
          )}

          {/* Tips */}
          {currentStepData.tips && currentStepData.tips.length > 0 && (
            <div className="bg-yellow-100 dark:bg-yellow-900/50 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="mr-2">💡</span>
                เคล็ดลับ
              </h3>
              <ul className="space-y-2">
                {currentStepData.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="mr-2 text-yellow-600 dark:text-yellow-400">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Mistakes */}
          {currentStepData.commonMistakes && currentStepData.commonMistakes.length > 0 && (
            <div className="bg-red-100 dark:bg-red-900/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="mr-2">⚠️</span>
                ข้อผิดพลาดที่พบบ่อย
              </h3>
              <ul className="space-y-2">
                {currentStepData.commonMistakes.map((mistake, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="mr-2 text-red-600 dark:text-red-400">✗</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={previousStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-lg transition-all ${
              currentStep === 1
                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg"
            }`}
          >
            <span>←</span>
            <span>ก่อนหน้า</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105"
            >
              <span>ถัดไป</span>
              <span>→</span>
            </button>
          ) : (
            <button
              onClick={markAsCompleted}
              disabled={isCompleted}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105 ${
                isCompleted
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
              }`}
            >
              <span>{isCompleted ? "เรียนจบแล้ว ✓" : "เรียนจบบทนี้"}</span>
              <span>🎉</span>
            </button>
          )}
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center space-x-2 mb-8 flex-wrap">
          {content.steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index + 1)}
              className={`w-3 h-3 rounded-full transition-all ${
                index + 1 === currentStep
                  ? "bg-blue-600 dark:bg-blue-400 w-8"
                  : index + 1 < currentStep
                  ? "bg-green-500 dark:bg-green-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Summary (show on last step) */}
        {currentStep === totalSteps && (
          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-3xl p-8 shadow-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">📝</span>
              สรุป
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {content.summary}
            </p>

            {/* Key Points */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              จุดสำคัญที่ต้องจำ:
            </h3>
            <ul className="space-y-2 mb-6">
              {content.keyPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="mr-2 text-green-600 dark:text-green-400">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Next Steps */}
            {content.nextSteps && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold">ขั้นต่อไป:</span> {content.nextSteps}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Next/Previous Lesson Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previousLesson && (
            <Link
              href={`/lessons/${previousLesson.slug}`}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                ← บทก่อนหน้า
              </div>
              <div className="font-bold text-gray-900 dark:text-white text-lg">
                {previousLesson.title}
              </div>
            </Link>
          )}

          {nextLesson && (
            <Link
              href={`/lessons/${nextLesson.slug}`}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-white md:col-start-2"
            >
              <div className="text-sm text-blue-100 mb-2 text-right">
                บทถัดไป →
              </div>
              <div className="font-bold text-lg text-right">{nextLesson.title}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
