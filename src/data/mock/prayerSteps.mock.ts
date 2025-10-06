/**
 * Mock data for Prayer Steps
 * ขั้นตอนการละหมาดแบบละเอียด
 */

export interface PrayerStep {
  id: string;
  stepNumber: number;
  nameEn: string;
  nameTh: string;
  nameArabic: string;
  description: string;
  detailedInstructions: string[];
  image: string;
  audio?: string;
  dua?: {
    arabic: string;
    transliteration: string;
    translation: string;
    audio?: string;
  };
  tips: string[];
  commonMistakes?: string[];
  duration: number; // seconds
}

export const prayerStepsMockData: PrayerStep[] = [
  {
    id: "step-1",
    stepNumber: 1,
    nameEn: "Niyyah",
    nameTh: "ตั้งนิยต",
    nameArabic: "النية",
    description: "การตั้งใจในใจว่าจะละหมาด",
    detailedInstructions: [
      "ยืนหันหน้าไปทางกิบลัต (ทิศทางกะอฺบะฮฺ)",
      "ตั้งใจในใจว่าจะละหมาดเวลาไหน (เช่น ฟัจญ์, ซุฮร์)",
      "ไม่จำเป็นต้องพูดออกมา ตั้งใจในใจก็พอ",
    ],
    image: "/images/prayer-steps/niyyah.svg",
    tips: [
      "ตั้งใจให้มั่นคง ไม่ลังเล",
      "คิดถึงพระเจ้าด้วยความเคารพ",
      "เตรียมจิตใจให้พร้อม",
    ],
    commonMistakes: [
      "ลืมตั้งนิยต",
      "ตั้งนิยตไม่ชัดเจน",
    ],
    duration: 5,
  },
  {
    id: "step-2",
    stepNumber: 2,
    nameEn: "Takbir",
    nameTh: "ตักบีรฮ์",
    nameArabic: "التكبير",
    description: "ยกมือขึ้นและกล่าว 'อัลลอฮุอักบัร'",
    detailedInstructions: [
      "ยกมือทั้งสองข้างขึ้นจนถึงระดับหู",
      "ฝ่ามือหันออก นิ้วชี้ขึ้น",
      "กล่าว 'อัลลอฮุอักบัร' (พระเจ้ายิ่งใหญ่)",
      "วางมือลงที่หน้าอก (มือขวาทับมือซ้าย)",
    ],
    image: "/images/prayer-steps/takbir.svg",
    dua: {
      arabic: "اللهُ أَكْبَر",
      transliteration: "Allahu Akbar",
      translation: "พระเจ้ายิ่งใหญ่",
      audio: "/audio/duas/allahu-akbar.mp3",
    },
    tips: [
      "ยกมือให้ตรงกับหู",
      "กล่าวด้วยเสียงชัดเจน",
      "วางมือที่หน้าอกอย่างสุภาพ",
    ],
    commonMistakes: [
      "ยกมือไม่ถึงหู",
      "วางมือผิดตำแหน่ง",
    ],
    duration: 3,
  },
  {
    id: "step-3",
    stepNumber: 3,
    nameEn: "Qiyam",
    nameTh: "การยืน (กิยาม)",
    nameArabic: "القيام",
    description: "ยืนอ่านสูเราะฮ์ฟาติฮะฮ์และสูเราะฮ์อื่น",
    detailedInstructions: [
      "ยืนตรง มองที่จุดที่จะซุจูด",
      "อ่านดุอาอ์อิสติฟตาฮฺ (ดุอาอ์เปิด)",
      "อ่านสูเราะฮ์ฟาติฮะฮ์",
      "อ่านสูเราะฮ์สั้นๆ (เช่น อิคลาศ, ฟะลัก, นาส)",
    ],
    image: "/images/prayer-steps/qiyam.svg",
    dua: {
      arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
      transliteration: "Bismillahir Rahmanir Rahim",
      translation: "ด้วยพระนามของพระเจ้า ผู้ทรงเมตตา ผู้ทรงกรุณา",
      audio: "/audio/duas/bismillah.mp3",
    },
    tips: [
      "ยืนตรง ไม่โน้มตัว",
      "อ่านด้วยความสงบ",
      "ไม่รีบร้อน",
    ],
    commonMistakes: [
      "อ่านเร็วเกินไป",
      "ลืมอ่านฟาติฮะฮ์",
    ],
    duration: 60,
  },
  {
    id: "step-4",
    stepNumber: 4,
    nameEn: "Ruku",
    nameTh: "การโค้ง (รุกูอ์)",
    nameArabic: "الركوع",
    description: "โค้งตัวลงจนหลังตรง",
    detailedInstructions: [
      "กล่าว 'อัลลอฮุอักบัร' ขณะโค้งตัว",
      "โค้งตัวจนหลังตรงขนาน",
      "วางมือที่เข่า นิ้วแยก",
      "กล่าวดุอาอ์ในรุกูอ์ 3 ครั้ง",
    ],
    image: "/images/prayer-steps/ruku.svg",
    dua: {
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيْمِ",
      transliteration: "Subhana Rabbiyal Adhim",
      translation: "มหาบริสุทธิ์พระเจ้าของข้าพเจ้า ผู้ยิ่งใหญ่",
      audio: "/audio/duas/ruku.mp3",
    },
    tips: [
      "หลังต้องตรง ขนานกับพื้น",
      "มือวางที่เข่า แน่น",
      "กล่าวดุอาอ์อย่างน้อย 3 ครั้ง",
    ],
    commonMistakes: [
      "โค้งไม่ลึกพอ",
      "หลังไม่ตรง",
      "กล่าวดุอาอ์น้อยเกินไป",
    ],
    duration: 10,
  },
  {
    id: "step-5",
    stepNumber: 5,
    nameEn: "I'tidal",
    nameTh: "การยืนหลังโค้ง (อิอฺติดาล)",
    nameArabic: "الاعتدال",
    description: "ยืนตรงหลังจากโค้ง",
    detailedInstructions: [
      "ยืนขึ้นจากท่ารุกูอ์",
      "กล่าว 'สะมิอัลลอฮุลิมัน ฮะมิดะฮฺ'",
      "เมื่อยืนตรงแล้ว กล่าว 'รอบบะนาละกัลฮัมด์'",
      "ยืนสักครู่ก่อนซุจูด",
    ],
    image: "/images/prayer-steps/itidal.svg",
    dua: {
      arabic: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ ، رَبَّنَا لَكَ الْحَمْدُ",
      transliteration: "Sami'Allahu liman hamidah, Rabbana lakal hamd",
      translation: "พระเจ้าทรงสดับผู้ที่สรรเสริญพระองค์, ข้าแต่พระเจ้าของเรา การสรรเสริญเป็นของพระองค์",
      audio: "/audio/duas/itidal.mp3",
    },
    tips: [
      "ยืนตรง ไม่โน้มตัว",
      "กล่าวดุอาอ์ชัดเจน",
      "หยุดสักครู่",
    ],
    duration: 5,
  },
  {
    id: "step-6",
    stepNumber: 6,
    nameEn: "Sujud",
    nameTh: "การซุจูด (การกราบ)",
    nameArabic: "السجود",
    description: "กราบลงให้หน้าผากและจมูกแตะพื้น",
    detailedInstructions: [
      "กล่าว 'อัลลอฮุอักบัร' ขณะกราบลง",
      "กราบลงให้ 7 จุดแตะพื้น: หน้าผาก, จมูก, มือทั้งสอง, เข่าทั้งสอง, ปลายเท้าทั้งสอง",
      "กล่าวดุอาอ์ในซุจูด 3 ครั้ง",
      "ซุจูดต้องทำ 2 ครั้งต่อ 1 รอกอะฮฺ",
    ],
    image: "/images/prayer-steps/sujud.svg",
    dua: {
      arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى",
      transliteration: "Subhana Rabbiyal A'la",
      translation: "มหาบริสุทธิ์พระเจ้าของข้าพเจ้า ผู้สูงสุด",
      audio: "/audio/duas/sujud.mp3",
    },
    tips: [
      "ให้ 7 จุดแตะพื้น",
      "หน้าผากและจมูกต้องแตะพื้น",
      "กล่าวดุอาอ์อย่างน้อย 3 ครั้ง",
    ],
    commonMistakes: [
      "จมูกไม่แตะพื้น",
      "ไม่ครบ 7 จุด",
      "กราบเร็วเกินไป",
    ],
    duration: 10,
  },
  {
    id: "step-7",
    stepNumber: 7,
    nameEn: "Jalsa",
    nameTh: "การนั่งระหว่างซุจูด (ญัลซะฮ์)",
    nameArabic: "الجلسة",
    description: "นั่งระหว่างการซุจูดทั้งสองครั้ง",
    detailedInstructions: [
      "ยกตัวขึ้นจากซุจูดครั้งที่ 1",
      "กล่าว 'อัลลอฮุอักบัร'",
      "นั่งพับเข่า เท้าซ้ายอยู่ใต้ตัว",
      "กล่าวดุอาอ์ 'รอบบิฆฟิรลี'",
      "นั่งสักครู่ก่อนซุจูดครั้งที่ 2",
    ],
    image: "/images/prayer-steps/jalsa.svg",
    dua: {
      arabic: "رَبِّ اغْفِرْ لِي",
      transliteration: "Rabbighfir li",
      translation: "ข้าแต่พระเจ้า โปรดอภัยให้แก่ข้าพระองค์",
      audio: "/audio/duas/jalsa.mp3",
    },
    tips: [
      "นั่งสงบ",
      "เท้าซ้ายอยู่ใต้ตัว",
      "หยุดสักครู่",
    ],
    duration: 5,
  },
  {
    id: "step-8",
    stepNumber: 8,
    nameEn: "Tashahhud",
    nameTh: "การนั่งตัชฮัด",
    nameArabic: "التشهد",
    description: "นั่งอ่านดุอาอ์ตัชฮัด",
    detailedInstructions: [
      "นั่งพับเข่า หลังจากซุจูดครั้งที่ 2 ของรอกอะฮฺที่ 2",
      "เท้าซ้ายอยู่ใต้ตัว เท้าขวาตั้งขึ้น",
      "มือซ้ายวางบนเข่าซ้าย",
      "มือขวาวางบนเข่าขวา นิ้วชี้ชี้ขึ้น",
      "อ่านดุอาอ์ตัชฮัด",
      "อ่านดุอาอ์ศ็อลาวาต (ส่งสลามให้ท่านนบี)",
    ],
    image: "/images/prayer-steps/tashahhud.svg",
    dua: {
      arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ",
      transliteration: "Attahiyyatu lillahi was salawatu wat tayyibat",
      translation: "คำทักทายทั้งหลายเป็นของพระเจ้า และการละหมาดทั้งหลาย และสิ่งดีงามทั้งหลาย",
      audio: "/audio/duas/tashahhud.mp3",
    },
    tips: [
      "นิ้วชี้ชี้ขึ้นเมื่ออ่านถึงคำว่า 'อัลลอฮฺ'",
      "นั่งสงบ อ่านช้าๆ",
      "อ่านให้ครบทุกคำ",
    ],
    commonMistakes: [
      "นั่งไม่ถูกท่า",
      "อ่านไม่ครบ",
      "ลืมชี้นิ้ว",
    ],
    duration: 30,
  },
  {
    id: "step-9",
    stepNumber: 9,
    nameEn: "Salam",
    nameTh: "การให้สลาม",
    nameArabic: "السلام",
    description: "หันหน้าไปทางขวาและซ้ายเพื่อให้สลาม",
    detailedInstructions: [
      "หันหน้าไปทางขวา",
      "กล่าว 'อัสสะลามุอะลัยกุม วะรอฮฺมะตุลลอฮฺ'",
      "หันหน้าไปทางซ้าย",
      "กล่าว 'อัสสะลามุอะลัยกุม วะรอฮฺมะตุลลอฮฺ' อีกครั้ง",
      "การละหมาดเสร็จสิ้น",
    ],
    image: "/images/prayer-steps/salam.svg",
    dua: {
      arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
      transliteration: "Assalamu 'alaikum wa rahmatullah",
      translation: "ความสงบสุขและความเมตตาของพระเจ้าจงมีแด่ท่านทั้งหลาย",
      audio: "/audio/duas/salam.mp3",
    },
    tips: [
      "หันหน้าชัดเจน",
      "กล่าวด้วยเสียงที่ได้ยิน",
      "ทำทั้งสองข้าง",
    ],
    duration: 5,
  },
];

// Helper Functions
export function getPrayerStepById(id: string): PrayerStep | undefined {
  return prayerStepsMockData.find((step) => step.id === id);
}

export function getPrayerStepByNumber(stepNumber: number): PrayerStep | undefined {
  return prayerStepsMockData.find((step) => step.stepNumber === stepNumber);
}

export function getNextStep(currentStepNumber: number): PrayerStep | undefined {
  return prayerStepsMockData.find((step) => step.stepNumber === currentStepNumber + 1);
}

export function getPreviousStep(currentStepNumber: number): PrayerStep | undefined {
  return prayerStepsMockData.find((step) => step.stepNumber === currentStepNumber - 1);
}

export function getTotalDuration(): number {
  return prayerStepsMockData.reduce((total, step) => total + step.duration, 0);
}

export function getStepProgress(currentStep: number): number {
  const totalSteps = prayerStepsMockData.length;
  return Math.round((currentStep / totalSteps) * 100);
}
