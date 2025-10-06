"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "หน้าแรก" },
    { href: "/lessons", label: "บทเรียน" },
    { href: "/practice", label: "ฝึกฝน" },
    { href: "/achievements", label: "รางวัล" },
    { href: "/about", label: "เกี่ยวกับเรา" },
  ];

  const resources = [
    { href: "/help", label: "ช่วยเหลือ" },
    { href: "/faq", label: "คำถามที่พบบ่อย" },
    { href: "/contact", label: "ติดต่อเรา" },
    { href: "/privacy", label: "นโยบายความเป็นส่วนตัว" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-5xl">🕌</span>
              <div>
                <h3 className="text-2xl font-bold">Prayer for Kids</h3>
                <p className="text-sm text-blue-200">เรียนรู้การละหมาด</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4">
              เรียนรู้การละหมาดอย่างสนุกสนาน ด้วยภาพสวยงาม สีสันสดใส
              เหมาะกับเด็กๆ ทุกวัย
            </p>
            <div className="flex space-x-3">
              <span className="text-3xl">⭐</span>
              <span className="text-3xl">🌙</span>
              <span className="text-3xl">✨</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🔗</span>
              ลิงก์ด่วน
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white hover:underline transition-colors inline-flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">📖</span>
              ทรัพยากร
            </h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white hover:underline transition-colors inline-flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-blue-100">
              © {currentYear} Prayer for Kids. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-lg">
            <span>สร้างด้วย</span>
            <span className="text-2xl animate-pulse">❤️</span>
            <span>สำหรับเด็กๆ</span>
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-blue-200">
            เว็บไซต์นี้สร้างขึ้นเพื่อการศึกษา และส่งเสริมการเรียนรู้การละหมาดสำหรับเด็ก
          </p>
        </div>
      </div>
    </footer>
  );
}
