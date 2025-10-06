"use client";

import { PracticeViewModel } from "@/src/presentation/presenters/practice/PracticePresenter";
import { usePracticePresenter } from "@/src/presentation/presenters/practice/usePracticePresenter";
import Link from "next/link";

interface PracticeViewProps {
  initialViewModel?: PracticeViewModel;
}

export function PracticeView({ initialViewModel }: PracticeViewProps) {
  const {
    viewModel,
    currentStep,
    isPlaying,
    isPaused,
    isCompleted,
    startPractice,
    pausePractice,
    resumePractice,
    stopPractice,
    nextStep,
    previousStep,
  } = usePracticePresenter(initialViewModel);

  if (!viewModel) {
    return null;
  }

  const currentStepData = viewModel.steps[currentStep - 1];

  // Welcome Screen
  if (!isPlaying && !isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">🕌</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ฝึกฝนการละหมาด
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              ฝึกฝนการละหมาดทีละขั้นตอน พร้อมภาพและคำอธิบายที่เข้าใจง่าย
            </p>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-2">📋</span>
              ขั้นตอนการละหมาด ({viewModel.totalSteps} ขั้นตอน)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {viewModel.steps.map((step) => (
                <div
                  key={step.id}
                  className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-4"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold">
                    {step.stepNumber}
                  </span>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {step.nameTh}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {step.nameArabic}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={startPractice}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-6 rounded-full font-bold text-2xl shadow-2xl transition-all transform hover:scale-105"
              >
                <span>▶️</span>
                <span>เริ่มฝึกฝน</span>
              </button>
            </div>
          </div>

          <div className="bg-yellow-100 dark:bg-yellow-900/50 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="mr-2">💡</span>
              คำแนะนำ
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>หาที่สงบ ไม่มีเสียงรบกวน</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>ทำวุฎูอ์ให้เรียบร้อยก่อน</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>ตั้งใจและมีสมาธิ</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>ทำตามทีละขั้นตอน ไม่รีบร้อน</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Completion Screen
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-9xl mb-6 animate-bounce">🎉</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            เยี่ยมมาก!
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
            คุณฝึกฝนการละหมาดครบทุกขั้นตอนแล้ว
          </p>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-8">
            <div className="text-6xl mb-4">⭐⭐⭐</div>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              ฝึกฝนบ่อยๆ จะทำให้จำได้แม่นยำขึ้น
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={startPractice}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105"
            >
              🔄 ฝึกอีกครั้ง
            </button>
            <Link
              href="/lessons"
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              📚 กลับไปบทเรียน
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Practice Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              ขั้นตอนที่ {currentStep} / {viewModel.totalSteps}
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {Math.round((currentStep / viewModel.totalSteps) * 100)}%
            </span>
          </div>
          <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / viewModel.totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-6">
          {/* Step Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full font-bold text-2xl mb-4">
              {currentStepData.stepNumber}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {currentStepData.nameTh}
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-2">
              {currentStepData.nameArabic}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {currentStepData.description}
            </p>
          </div>

          {/* Step Image */}
          <div className="mb-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-3xl p-12 text-center">
            <div className="text-9xl">🕌</div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-100 dark:bg-blue-900/50 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">📝</span>
              วิธีทำ
            </h3>
            <ol className="space-y-3">
              {currentStepData.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-lg">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Dua Section */}
          {currentStepData.dua && (
            <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🤲</span>
                ดุอาอ์ที่ต้องอ่าน
              </h3>
              <p className="text-4xl text-center text-gray-900 dark:text-white mb-4 leading-relaxed">
                {currentStepData.dua.arabic}
              </p>
              <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-2 italic">
                {currentStepData.dua.transliteration}
              </p>
              <p className="text-lg text-center text-gray-600 dark:text-gray-400">
                ความหมาย: {currentStepData.dua.translation}
              </p>
            </div>
          )}

          {/* Tips */}
          <div className="bg-yellow-100 dark:bg-yellow-900/50 rounded-2xl p-6">
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
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-lg transition-all ${
              currentStep === 1
                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg"
            }`}
          >
            <span>←</span>
            <span>ก่อนหน้า</span>
          </button>

          <div className="flex space-x-3">
            {isPaused ? (
              <button
                onClick={resumePractice}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all"
              >
                ▶️ เล่นต่อ
              </button>
            ) : (
              <button
                onClick={pausePractice}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all"
              >
                ⏸️ หยุดชั่วคราว
              </button>
            )}

            <button
              onClick={stopPractice}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all"
            >
              ⏹️ หยุด
            </button>
          </div>

          <button
            onClick={nextStep}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105"
          >
            <span>ถัดไป</span>
            <span>→</span>
          </button>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center space-x-2 flex-wrap gap-y-2">
          {viewModel.steps.map((step, index) => (
            <div
              key={step.id}
              className={`w-3 h-3 rounded-full transition-all ${
                index + 1 === currentStep
                  ? "bg-blue-600 dark:bg-blue-400 w-8"
                  : index + 1 < currentStep
                  ? "bg-green-500 dark:bg-green-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
