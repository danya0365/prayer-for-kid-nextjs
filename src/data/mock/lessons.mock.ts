/**
 * Mock data for Lessons
 * บทเรียนการละหมาดสำหรับเด็ก
 */

export type LessonCategory = "basics" | "steps" | "duas" | "prayers";
export type LessonDifficulty = "beginner" | "intermediate" | "advanced";

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  titleArabic?: string;
  description: string;
  category: LessonCategory;
  difficulty: LessonDifficulty;
  duration: number; // minutes
  order: number;
  thumbnail: string;
  isLocked: boolean;
  prerequisite?: string; // lesson id
  completedBy?: number; // number of students
}

export const lessonCategories = [
  { id: "all", name: "ทั้งหมด", icon: "📚", color: "blue" },
  { id: "basics", name: "พื้นฐาน", icon: "🎯", color: "green" },
  { id: "steps", name: "ขั้นตอน", icon: "👣", color: "purple" },
  { id: "duas", name: "ดุอาอ์", icon: "🤲", color: "orange" },
  { id: "prayers", name: "เวลาละหมาด", icon: "🕌", color: "pink" },
];

export const lessonsMockData: Lesson[] = [
  // ========== พื้นฐานการละหมาด ==========
  {
    id: "1",
    slug: "what-is-salah",
    title: "การละหมาดคืออะไร",
    titleArabic: "ما هي الصلاة",
    description: "เรียนรู้ความหมายและความสำคัญของการละหมาดในอิสลาม",
    category: "basics",
    difficulty: "beginner",
    duration: 5,
    order: 1,
    thumbnail: "/images/lessons/what-is-salah.svg",
    isLocked: false,
    completedBy: 1200,
  },
  {
    id: "2",
    slug: "importance-of-salah",
    title: "ความสำคัญของการละหมาด",
    titleArabic: "أهمية الصلاة",
    description: "ทำไมเราต้องละหมาด และประโยชน์ของการละหมาด",
    category: "basics",
    difficulty: "beginner",
    duration: 5,
    order: 2,
    thumbnail: "/images/lessons/importance.svg",
    isLocked: false,
    completedBy: 1150,
  },
  {
    id: "3",
    slug: "five-daily-prayers",
    title: "เวลาละหมาด 5 เวลา",
    titleArabic: "الصلوات الخمس",
    description: "เรียนรู้เวลาละหมาดทั้ง 5 เวลาในแต่ละวัน",
    category: "basics",
    difficulty: "beginner",
    duration: 8,
    order: 3,
    thumbnail: "/images/lessons/five-prayers.svg",
    isLocked: false,
    completedBy: 1100,
  },
  {
    id: "4",
    slug: "wudu-ablution",
    title: "การทำวุฎูอ์",
    titleArabic: "الوضوء",
    description: "เรียนรู้วิธีการทำวุฎูอ์ที่ถูกต้องก่อนละหมาด",
    category: "basics",
    difficulty: "beginner",
    duration: 10,
    order: 4,
    thumbnail: "/images/lessons/wudu.svg",
    isLocked: false,
    completedBy: 1050,
  },

  // ========== ขั้นตอนการละหมาด ==========
  {
    id: "5",
    slug: "niyyah-intention",
    title: "การตั้งนิยต",
    titleArabic: "النية",
    description: "เรียนรู้การตั้งใจก่อนเริ่มละหมาด",
    category: "steps",
    difficulty: "beginner",
    duration: 5,
    order: 5,
    thumbnail: "/images/lessons/niyyah.svg",
    isLocked: false,
    prerequisite: "4",
    completedBy: 980,
  },
  {
    id: "6",
    slug: "takbir",
    title: "ตักบีรฮ์ - การยกมือขึ้น",
    titleArabic: "التكبير",
    description: "เรียนรู้ท่าตักบีรฮ์และการกล่าว 'อัลลอฮุอักบัร'",
    category: "steps",
    difficulty: "beginner",
    duration: 5,
    order: 6,
    thumbnail: "/images/lessons/takbir.svg",
    isLocked: false,
    prerequisite: "5",
    completedBy: 950,
  },
  {
    id: "7",
    slug: "qiyam-standing",
    title: "การยืน (กิยาม)",
    titleArabic: "القيام",
    description: "เรียนรู้ท่าการยืนและการอ่านสูเราะฮ์ฟาติฮะฮ์",
    category: "steps",
    difficulty: "intermediate",
    duration: 10,
    order: 7,
    thumbnail: "/images/lessons/qiyam.svg",
    isLocked: false,
    prerequisite: "6",
    completedBy: 920,
  },
  {
    id: "8",
    slug: "ruku-bowing",
    title: "การโค้ง (รุกูอ์)",
    titleArabic: "الركوع",
    description: "เรียนรู้ท่าการโค้งที่ถูกต้องและดุอาอ์ที่ต้องอ่าน",
    category: "steps",
    difficulty: "intermediate",
    duration: 8,
    order: 8,
    thumbnail: "/images/lessons/ruku.svg",
    isLocked: false,
    prerequisite: "7",
    completedBy: 890,
  },
  {
    id: "9",
    slug: "itidal-standing-after-ruku",
    title: "การยืนหลังโค้ง (อิอฺติดาล)",
    titleArabic: "الاعتدال",
    description: "เรียนรู้ท่ายืนหลังจากโค้งและดุอาอ์ที่ต้องอ่าน",
    category: "steps",
    difficulty: "intermediate",
    duration: 5,
    order: 9,
    thumbnail: "/images/lessons/itidal.svg",
    isLocked: false,
    prerequisite: "8",
    completedBy: 860,
  },
  {
    id: "10",
    slug: "sujud-prostration",
    title: "การซุจูด (การกราบ)",
    titleArabic: "السجود",
    description: "เรียนรู้ท่าการซุจูดที่ถูกต้องและความสำคัญของท่านี้",
    category: "steps",
    difficulty: "intermediate",
    duration: 10,
    order: 10,
    thumbnail: "/images/lessons/sujud.svg",
    isLocked: false,
    prerequisite: "9",
    completedBy: 830,
  },
  {
    id: "11",
    slug: "jalsa-sitting-between-sujud",
    title: "การนั่งระหว่างซุจูด (ญัลซะฮ์)",
    titleArabic: "الجلسة",
    description: "เรียนรู้ท่านั่งระหว่างการซุจูดทั้งสองครั้ง",
    category: "steps",
    difficulty: "intermediate",
    duration: 5,
    order: 11,
    thumbnail: "/images/lessons/jalsa.svg",
    isLocked: false,
    prerequisite: "10",
    completedBy: 800,
  },
  {
    id: "12",
    slug: "tashahhud-sitting",
    title: "การนั่งตัชฮัด",
    titleArabic: "التشهد",
    description: "เรียนรู้ท่านั่งตัชฮัดและการอ่านดุอาอ์ตัชฮัด",
    category: "steps",
    difficulty: "advanced",
    duration: 12,
    order: 12,
    thumbnail: "/images/lessons/tashahhud.svg",
    isLocked: false,
    prerequisite: "11",
    completedBy: 770,
  },
  {
    id: "13",
    slug: "salam-greeting",
    title: "การให้สลาม",
    titleArabic: "السلام",
    description: "เรียนรู้การให้สลามเพื่อจบการละหมาด",
    category: "steps",
    difficulty: "beginner",
    duration: 5,
    order: 13,
    thumbnail: "/images/lessons/salam.svg",
    isLocked: false,
    prerequisite: "12",
    completedBy: 750,
  },

  // ========== ดุอาอ์และบทอ่าน ==========
  {
    id: "14",
    slug: "surah-al-fatihah",
    title: "สูเราะฮ์ฟาติฮะฮ์",
    titleArabic: "سورة الفاتحة",
    description: "เรียนรู้การอ่านสูเราะฮ์ฟาติฮะฮ์ที่ต้องอ่านในทุกรอกอะฮ์",
    category: "duas",
    difficulty: "intermediate",
    duration: 15,
    order: 14,
    thumbnail: "/images/lessons/fatihah.svg",
    isLocked: false,
    prerequisite: "7",
    completedBy: 900,
  },
  {
    id: "15",
    slug: "surah-al-ikhlas",
    title: "สูเราะฮ์อิคลาศ",
    titleArabic: "سورة الإخلاص",
    description: "เรียนรู้สูเราะฮ์สั้นที่สำคัญ - อิคลาศ",
    category: "duas",
    difficulty: "beginner",
    duration: 8,
    order: 15,
    thumbnail: "/images/lessons/ikhlas.svg",
    isLocked: false,
    completedBy: 850,
  },
  {
    id: "16",
    slug: "surah-al-falaq",
    title: "สูเราะฮ์ฟะลัก",
    titleArabic: "سورة الفلق",
    description: "เรียนรู้สูเราะฮ์สั้นที่สำคัญ - ฟะลัก",
    category: "duas",
    difficulty: "beginner",
    duration: 8,
    order: 16,
    thumbnail: "/images/lessons/falaq.svg",
    isLocked: false,
    completedBy: 820,
  },
  {
    id: "17",
    slug: "surah-an-nas",
    title: "สูเราะฮ์นาส",
    titleArabic: "سورة الناس",
    description: "เรียนรู้สูเราะฮ์สั้นที่สำคัญ - นาส",
    category: "duas",
    difficulty: "beginner",
    duration: 8,
    order: 17,
    thumbnail: "/images/lessons/nas.svg",
    isLocked: false,
    completedBy: 800,
  },
  {
    id: "18",
    slug: "dua-in-ruku",
    title: "ดุอาอ์ในรุกูอ์",
    titleArabic: "دعاء الركوع",
    description: "เรียนรู้ดุอาอ์ที่ต้องอ่านขณะโค้ง",
    category: "duas",
    difficulty: "beginner",
    duration: 5,
    order: 18,
    thumbnail: "/images/lessons/dua-ruku.svg",
    isLocked: false,
    prerequisite: "8",
    completedBy: 780,
  },
  {
    id: "19",
    slug: "dua-in-sujud",
    title: "ดุอาอ์ในซุจูด",
    titleArabic: "دعاء السجود",
    description: "เรียนรู้ดุอาอ์ที่ต้องอ่านขณะซุจูด",
    category: "duas",
    difficulty: "beginner",
    duration: 5,
    order: 19,
    thumbnail: "/images/lessons/dua-sujud.svg",
    isLocked: false,
    prerequisite: "10",
    completedBy: 760,
  },

  // ========== การละหมาดแต่ละเวลา ==========
  {
    id: "20",
    slug: "fajr-prayer",
    title: "ละหมาดฟัจญ์",
    titleArabic: "صلاة الفجر",
    description: "เรียนรู้การละหมาดฟัจญ์ 2 รอกอะฮ์",
    category: "prayers",
    difficulty: "intermediate",
    duration: 12,
    order: 20,
    thumbnail: "/images/lessons/fajr.svg",
    isLocked: false,
    prerequisite: "13",
    completedBy: 700,
  },
  {
    id: "21",
    slug: "dhuhr-prayer",
    title: "ละหมาดซุฮร์",
    titleArabic: "صلاة الظهر",
    description: "เรียนรู้การละหมาดซุฮร์ 4 รอกอะฮ์",
    category: "prayers",
    difficulty: "advanced",
    duration: 15,
    order: 21,
    thumbnail: "/images/lessons/dhuhr.svg",
    isLocked: false,
    prerequisite: "20",
    completedBy: 680,
  },
  {
    id: "22",
    slug: "asr-prayer",
    title: "ละหมาดอัศร์",
    titleArabic: "صلاة العصر",
    description: "เรียนรู้การละหมาดอัศร์ 4 รอกอะฮ์",
    category: "prayers",
    difficulty: "advanced",
    duration: 15,
    order: 22,
    thumbnail: "/images/lessons/asr.svg",
    isLocked: false,
    prerequisite: "21",
    completedBy: 660,
  },
  {
    id: "23",
    slug: "maghrib-prayer",
    title: "ละหมาดมัฆริบ",
    titleArabic: "صلاة المغرب",
    description: "เรียนรู้การละหมาดมัฆริบ 3 รอกอะฮ์",
    category: "prayers",
    difficulty: "intermediate",
    duration: 12,
    order: 23,
    thumbnail: "/images/lessons/maghrib.svg",
    isLocked: false,
    prerequisite: "22",
    completedBy: 640,
  },
  {
    id: "24",
    slug: "isha-prayer",
    title: "ละหมาดอิชาอ์",
    titleArabic: "صلاة العشاء",
    description: "เรียนรู้การละหมาดอิชาอ์ 4 รอกอะฮ์",
    category: "prayers",
    difficulty: "advanced",
    duration: 15,
    order: 24,
    thumbnail: "/images/lessons/isha.svg",
    isLocked: false,
    prerequisite: "23",
    completedBy: 620,
  },
];

// Helper functions
export function getLessonsByCategory(category: LessonCategory | "all"): Lesson[] {
  if (category === "all") {
    return lessonsMockData;
  }
  return lessonsMockData.filter((lesson) => lesson.category === category);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessonsMockData.find((lesson) => lesson.slug === slug);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessonsMockData.find((lesson) => lesson.id === id);
}

export function getNextLesson(currentLessonId: string): Lesson | undefined {
  const currentIndex = lessonsMockData.findIndex((l) => l.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === lessonsMockData.length - 1) {
    return undefined;
  }
  return lessonsMockData[currentIndex + 1];
}

export function getPreviousLesson(currentLessonId: string): Lesson | undefined {
  const currentIndex = lessonsMockData.findIndex((l) => l.id === currentLessonId);
  if (currentIndex <= 0) {
    return undefined;
  }
  return lessonsMockData[currentIndex - 1];
}
