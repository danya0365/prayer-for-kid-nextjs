/**
 * Mock data for Landing Page
 * สำหรับหน้าแรกของเว็บสอนการละหมาดสำหรับเด็ก
 */

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PreviewLesson {
  id: string;
  title: string;
  titleArabic?: string;
  description: string;
  image: string;
  category: string;
}

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface LandingData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  };
  features: Feature[];
  previewLessons: PreviewLesson[];
  howItWorks: HowItWorksStep[];
  testimonials: Testimonial[];
  stats: {
    totalLessons: number;
    totalStudents: number;
    completionRate: number;
    averageRating: number;
  };
}

export const landingMockData: LandingData = {
  hero: {
    title: "เรียนรู้การละหมาดอย่างสนุกสนาน",
    subtitle: "สำหรับเด็กๆ ทุกวัย",
    description: "เรียนรู้การละหมาดทีละขั้นตอน ด้วยภาพสวยงาม สีสันสดใส และเนื้อหาที่เข้าใจง่าย",
    ctaText: "เริ่มเรียนเลย!",
    ctaLink: "/lessons",
    backgroundImage: "/images/hero-mosque.jpg",
  },
  features: [
    {
      id: "1",
      icon: "🎨",
      title: "ภาพสวยงาม สีสันสดใส",
      description: "ภาพประกอบการ์ตูนน่ารัก ออกแบบมาเพื่อเด็กโดยเฉพาะ",
    },
    {
      id: "2",
      icon: "🎯",
      title: "เรียนรู้ทีละขั้นตอน",
      description: "แบ่งบทเรียนเป็นขั้นตอนย่อยๆ เรียนรู้ได้ง่าย ไม่งง",
    },
    {
      id: "3",
      icon: "🎵",
      title: "มีเสียงประกอบ",
      description: "ฟังเสียงอ่านดุอาอ์ที่ถูกต้อง เรียนรู้การออกเสียง",
    },
    {
      id: "4",
      icon: "🏆",
      title: "ระบบรางวัล",
      description: "รับรางวัลและความสำเร็จเมื่อเรียนจบแต่ละบท",
    },
    {
      id: "5",
      icon: "📱",
      title: "ใช้งานง่าย",
      description: "ออกแบบให้เด็กๆ ใช้งานได้ง่าย ปุ่มใหญ่ กดสะดวก",
    },
    {
      id: "6",
      icon: "🌙",
      title: "โหมดกลางคืน",
      description: "รองรับโหมดมืด เหมาะกับการอ่านตอนกลางคืน",
    },
  ],
  previewLessons: [
    {
      id: "1",
      title: "การยืน (Qiyam)",
      titleArabic: "القيام",
      description: "เรียนรู้ท่ายืนในการละหมาด และการอ่านสูเราะฮ์ฟาติฮะฮ์",
      image: "/images/lessons/qiyam.svg",
      category: "ขั้นตอนการละหมาด",
    },
    {
      id: "2",
      title: "การโค้ง (Ruku)",
      titleArabic: "الركوع",
      description: "เรียนรู้ท่าโค้งที่ถูกต้อง และดุอาอ์ที่ต้องอ่าน",
      image: "/images/lessons/ruku.svg",
      category: "ขั้นตอนการละหมาด",
    },
    {
      id: "3",
      title: "การซุจูด (Sujud)",
      titleArabic: "السجود",
      description: "เรียนรู้ท่าซุจูดที่ถูกต้อง และความสำคัญของท่านี้",
      image: "/images/lessons/sujud.svg",
      category: "ขั้นตอนการละหมาด",
    },
  ],
  howItWorks: [
    {
      id: "1",
      step: 1,
      title: "เลือกบทเรียน",
      description: "เลือกบทเรียนที่อยากเรียนจากหมวดหมู่ต่างๆ",
      icon: "📚",
    },
    {
      id: "2",
      step: 2,
      title: "เรียนรู้ทีละขั้นตอน",
      description: "เรียนรู้ทีละขั้นตอนด้วยภาพและเสียงประกอบ",
      icon: "👨‍🏫",
    },
    {
      id: "3",
      step: 3,
      title: "ทำแบบทดสอบ",
      description: "ทดสอบความเข้าใจด้วยแบบทดสอบสนุกๆ",
      icon: "✍️",
    },
    {
      id: "4",
      step: 4,
      title: "รับรางวัล!",
      description: "รับรางวัลและความสำเร็จเมื่อเรียนจบ",
      icon: "🎉",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "คุณแม่สมหญิง",
      role: "ผู้ปกครอง",
      avatar: "/images/avatars/parent1.jpg",
      content: "ลูกชอบมากเลยค่ะ เรียนรู้ได้ง่าย ภาพสวยงาม ตอนนี้ลูกละหมาดได้ถูกต้องแล้ว",
      rating: 5,
    },
    {
      id: "2",
      name: "น้องอามีนา",
      role: "นักเรียน อายุ 8 ขวบ",
      avatar: "/images/avatars/kid1.jpg",
      content: "สนุกมากค่ะ มีรางวัลด้วย อยากเรียนทุกวันเลย",
      rating: 5,
    },
    {
      id: "3",
      name: "คุณพ่อมูฮัมหมัด",
      role: "ผู้ปกครอง",
      avatar: "/images/avatars/parent2.jpg",
      content: "เว็บนี้ช่วยให้ลูกเข้าใจการละหมาดได้ง่ายขึ้นมาก แนะนำเลยครับ",
      rating: 5,
    },
  ],
  stats: {
    totalLessons: 25,
    totalStudents: 1250,
    completionRate: 85,
    averageRating: 4.8,
  },
};
