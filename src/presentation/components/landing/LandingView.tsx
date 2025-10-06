"use client";

import { LandingViewModel } from "@/src/presentation/presenters/landing/LandingPresenter";
import { useLandingPresenter } from "@/src/presentation/presenters/landing/useLandingPresenter";
import Link from "next/link";

interface LandingViewProps {
  initialViewModel?: LandingViewModel;
}

export function LandingView({ initialViewModel }: LandingViewProps) {
  const { viewModel, loading, error } = useLandingPresenter(initialViewModel);

  // Show loading only on initial load
  if (loading && !viewModel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            กำลังโหลด...
          </p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error && !viewModel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 dark:text-red-400 font-medium mb-4">
            เกิดข้อผิดพลาด: {error}
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
          >
            ลองใหม่อีกครั้ง
          </Link>
        </div>
      </div>
    );
  }

  if (!viewModel) {
    return null;
  }

  const { landingData } = viewModel;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">⭐</div>
          <div className="absolute top-20 right-20 text-5xl">🌙</div>
          <div className="absolute bottom-20 left-20 text-4xl">✨</div>
          <div className="absolute bottom-10 right-10 text-6xl">🕌</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            {/* Emoji Icon */}
            <div className="mb-8 animate-bounce">
              <span className="text-8xl sm:text-9xl">🕌</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {landingData.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl text-purple-600 dark:text-purple-400 font-semibold mb-6">
              {landingData.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {landingData.hero.description}
            </p>

            {/* CTA Button */}
            <Link
              href={landingData.hero.ctaLink}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xl font-bold px-10 py-5 rounded-full shadow-2xl transition-all transform hover:scale-110 hover:shadow-3xl"
            >
              {landingData.hero.ctaText} 🚀
            </Link>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {landingData.stats.totalLessons}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  บทเรียน
                </div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {landingData.stats.totalStudents}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  นักเรียน
                </div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {landingData.stats.completionRate}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  เรียนจบ
                </div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {landingData.stats.averageRating} ⭐
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  คะแนนเฉลี่ย
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              จุดเด่นของเรา ✨
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              ทำไมต้องเรียนกับเรา?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingData.features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Lessons Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ตัวอย่างบทเรียน 📚
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              มาดูกันว่าจะได้เรียนอะไรบ้าง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {landingData.previewLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center">
                  <div className="text-8xl mb-4">🕌</div>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {lesson.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {lesson.title}
                  </h3>
                  {lesson.titleArabic && (
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-3 font-arabic">
                      {lesson.titleArabic}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/lessons"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-lg font-bold px-8 py-4 rounded-full shadow-xl transition-all transform hover:scale-105"
            >
              ดูบทเรียนทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-blue-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              วิธีการใช้งาน 🎯
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              เริ่มเรียนได้ง่ายๆ ใน 4 ขั้นตอน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {landingData.howItWorks.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {index < landingData.howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 z-0"></div>
                )}

                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>

                  <div className="text-6xl mb-4 mt-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ความคิดเห็นจากผู้ใช้งาน 💬
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              ฟังเสียงจากผู้ปกครองและเด็กๆ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {landingData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            พร้อมเริ่มเรียนรู้แล้วหรือยัง? 🚀
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            เริ่มต้นการเรียนรู้การละหมาดอย่างสนุกสนานได้เลยวันนี้!
          </p>
          <Link
            href={landingData.hero.ctaLink}
            className="inline-block bg-white text-purple-600 text-xl font-bold px-10 py-5 rounded-full shadow-2xl transition-all transform hover:scale-110 hover:shadow-3xl"
          >
            เริ่มเลยตอนนี้! 🎉
          </Link>
        </div>
      </section>
    </div>
  );
}
