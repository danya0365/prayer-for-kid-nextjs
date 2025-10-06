/**
 * Mock data for Prayer Steps
 * ขั้นตอนการละหมาดทั้งหมด สำหรับหน้า Practice
 */

export interface PrayerStep {
  id: string;
  stepNumber: number;
  nameEn: string;
  nameTh: string;
  nameArabic: string;
  description: string;
  image: string;
  instructions: string[];
  dua?: {
    arabic: string;
    transliteration: string;
    translation: string;
    audioUrl?: string;
  };
  tips: string[];
  duration: number; // seconds to hold this position
}

export const prayerStepsMockData: PrayerStep[] = [
  {
    id: "1",
    stepNumber: 1,
    nameEn: "Niyyah",
    nameTh: "ตั้งนิยต",
    nameArabic: "النية",
    description: "ตั้งใจในใจว่าจะละหมาด",
    image: "/images/practice/niyyah.svg",
    instructions: [
      "ยืนหันหน้าไปทางกิบลัต",
      "ตั้งใจในใจว่าจะละหมาดเวลาไหน",
      "ไม่ต้องอ่านออกเสียง",
    ],
    tips: [
      "นิยตคือการตั้งใจในใจ",
      "ไม่จำเป็นต้องพูดออกมา",
      "ตั้งใจให้จริงใจ",
    ],
    duration: 3,
  },
  {
    id: "2",
    stepNumber: 2,
    nameEn: "Takbir",
    nameTh: "ตักบีรฮ์",
    nameArabic: "التكبير",
    description: "ยกมือขึ้นระดับหูพร้อมกล่าว 'อัลลอฮุอักบัร'",
    image: "/images/practice/takbir.svg",
    instructions: [
      "ยกมือทั้งสองขึ้นระดับหู",
      "ฝ่ามือหันออก",
      "กล่าว 'อัลลอฮุอักบัร'",
      "วางมือลงข้างตัว",
    ],
    dua: {
      arabic: "اللَّهُ أَكْبَرُ",
      transliteration: "Allahu Akbar",
      translation: "อัลลอฮฺทรงยิ่งใหญ่",
      audioUrl: "/audio/takbir.mp3",
    },
    tips: [
      "ยกมือให้ถึงระดับหู",
      "นิ้วมือแยกออกเล็กน้อย",
      "กล่าวชัดเจน",
    ],
    duration: 2,
  },
  {
    id: "3",
    stepNumber: 3,
    nameEn: "Qiyam",
    nameTh: "การยืน (กิยาม)",
    nameArabic: "القيام",
    description: "ยืนตรง วางมือขวาบนมือซ้าย อ่านสูเราะฮ์ฟาติฮะฮ์",
    image: "/images/practice/qiyam.svg",
    instructions: [
      "ยืนตรง",
      "วางมือขวาบนมือซ้าย บริเวณหน้าอก",
      "มองไปที่จุดซุจูด",
      "อ่านสูเราะฮ์ฟาติฮะฮ์",
      "อ่านสูเราะฮ์อื่นเพิ่มเติม",
    ],
    dua: {
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      transliteration: "Bismillahir Rahmanir Rahim",
      translation: "ด้วยพระนามของอัลลอฮฺ ผู้ทรงเมตตา ผู้ทรงกรุณา",
      audioUrl: "/audio/fatihah.mp3",
    },
    tips: [
      "ยืนตรง ไม่โน้มตัว",
      "มือวางแน่น ไม่หย่อน",
      "อ่านช้าๆ ชัดเจน",
    ],
    duration: 30,
  },
  {
    id: "4",
    stepNumber: 4,
    nameEn: "Ruku",
    nameTh: "การโค้ง (รุกูอ์)",
    nameArabic: "الركوع",
    description: "โค้งตัวลง หลังตรง มือวางบนเข่า",
    image: "/images/practice/ruku.svg",
    instructions: [
      "ยกมือขึ้นพร้อมกล่าว 'อัลลอฮุอักบัร'",
      "โค้งตัวลง หลังตรงขนานกับพื้น",
      "มือทั้งสองวางบนเข่า นิ้วแยก",
      "ขาตรง ไม่งอเข่า",
      "กล่าว 'สุบฮานะ รอบบิยัล อะซีม' 3 ครั้ง",
    ],
    dua: {
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "Subhana Rabbiyal Adheem",
      translation: "มหาบริสุทธิ์แด่พระเจ้าผู้ยิ่งใหญ่",
      audioUrl: "/audio/ruku.mp3",
    },
    tips: [
      "หลังต้องตรง ขนานกับพื้น",
      "มือแน่นบนเข่า",
      "หัวอยู่ในแนวเดียวกับหลัง",
    ],
    duration: 5,
  },
  {
    id: "5",
    stepNumber: 5,
    nameEn: "I'tidal",
    nameTh: "การยืนหลังโค้ง",
    nameArabic: "الاعتدال",
    description: "ยืนขึ้นจากท่ารุกูอ์",
    image: "/images/practice/itidal.svg",
    instructions: [
      "ยืนขึ้นพร้อมกล่าว 'สะมิอัลลอฮุ ลิมัน ฮะมิดะฮ์'",
      "ยืนตรง มือข้างตัว",
      "กล่าว 'รอบบะนา วะละกัล ฮัมด์'",
    ],
    dua: {
      arabic: "رَبَّنَا وَلَكَ الْحَمْدُ",
      transliteration: "Rabbana wa lakal hamd",
      translation: "ข้าแต่พระเจ้าของเรา และแด่พระองค์เท่านั้นที่มีการสรรเสริญ",
      audioUrl: "/audio/itidal.mp3",
    },
    tips: [
      "ยืนตรงสนิท",
      "อยู่ในท่านิ่งๆ",
      "กล่าวดุอาอ์ครบ",
    ],
    duration: 3,
  },
  {
    id: "6",
    stepNumber: 6,
    nameEn: "Sujud (1st)",
    nameTh: "การซุจูดครั้งที่ 1",
    nameArabic: "السجود الأول",
    description: "กราบลง 7 จุดแตะพื้น",
    image: "/images/practice/sujud.svg",
    instructions: [
      "กล่าว 'อัลลอฮุอักบัร' แล้วคุกเข่าลง",
      "วางมือทั้งสองบนพื้น",
      "วางหน้าผากและจมูกลงบนพื้น",
      "7 จุดต้องแตะพื้น: หน้าผาก, จมูก, มือ 2, เข่า 2, ปลายเท้า 2",
      "กล่าว 'สุบฮานะ รอบบิยัล อะอฺลา' 3 ครั้ง",
    ],
    dua: {
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      transliteration: "Subhana Rabbiyal A'la",
      translation: "มหาบริสุทธิ์แด่พระเจ้าผู้สูงสุด",
      audioUrl: "/audio/sujud.mp3",
    },
    tips: [
      "7 จุดต้องแตะพื้น",
      "ข้อศอกยกขึ้น ไม่แนบพื้น",
      "นิ้วเท้าชี้กิบลัต",
    ],
    duration: 5,
  },
  {
    id: "7",
    stepNumber: 7,
    nameEn: "Jalsa",
    nameTh: "การนั่งระหว่างซุจูด",
    nameArabic: "الجلسة",
    description: "นั่งระหว่างซุจูดทั้งสอง",
    image: "/images/practice/jalsa.svg",
    instructions: [
      "ยกหัวขึ้นพร้อมกล่าว 'อัลลอฮุอักบัร'",
      "นั่งบนเท้าซ้าย",
      "เท้าขวาตั้งนิ้วชี้กิบลัต",
      "มือวางบนต้นขา",
      "กล่าว 'รอบบิฆฟิรลี' (ขออัลลอฮฺทรงอภัยโทษ)",
    ],
    dua: {
      arabic: "رَبِّ اغْفِرْ لِي",
      transliteration: "Rabbighfir li",
      translation: "ข้าแต่พระเจ้า โปรดอภัยโทษแก่ข้าพระองค์",
      audioUrl: "/audio/jalsa.mp3",
    },
    tips: [
      "นั่งนิ่งๆ",
      "เท้าขวาตั้งตรง",
      "มือวางบนต้นขา",
    ],
    duration: 3,
  },
  {
    id: "8",
    stepNumber: 8,
    nameEn: "Sujud (2nd)",
    nameTh: "การซุจูดครั้งที่ 2",
    nameArabic: "السجود الثاني",
    description: "กราบลงอีกครั้ง เหมือนครั้งแรก",
    image: "/images/practice/sujud.svg",
    instructions: [
      "กล่าว 'อัลลอฮุอักบัร' แล้วซุจูดอีกครั้ง",
      "ทำเหมือนซุจูดครั้งแรก",
      "7 จุดแตะพื้น",
      "กล่าว 'สุบฮานะ รอบบิยัล อะอฺลา' 3 ครั้ง",
    ],
    dua: {
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      transliteration: "Subhana Rabbiyal A'la",
      translation: "มหาบริสุทธิ์แด่พระเจ้าผู้สูงสุด",
      audioUrl: "/audio/sujud.mp3",
    },
    tips: [
      "ทำเหมือนซุจูดครั้งแรก",
      "อย่ารีบร้อน",
      "กล่าวดุอาอ์ครบ",
    ],
    duration: 5,
  },
  {
    id: "9",
    stepNumber: 9,
    nameEn: "Tashahhud",
    nameTh: "การนั่งตัชฮัด",
    nameArabic: "التشهد",
    description: "นั่งอ่านดุอาอ์ตัชฮัด",
    image: "/images/practice/tashahhud.svg",
    instructions: [
      "ยกหัวขึ้นพร้อมกล่าว 'อัลลอฮุอักบัร'",
      "นั่งบนเท้าซ้าย",
      "เท้าขวาตั้งนิ้วชี้กิบลัต",
      "มือซ้ายวางบนต้นขาซ้าย",
      "มือขวาวางบนต้นขาขวา ชี้นิ้วชี้",
      "อ่านดุอาอ์ตัชฮัด",
    ],
    dua: {
      arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ",
      transliteration: "Attahiyyatu lillahi was salawatu wat tayyibat",
      translation: "การทักทายทั้งหลายเป็นของอัลลอฮฺ และการละหมาดและสิ่งดีงามทั้งหลาย",
      audioUrl: "/audio/tashahhud.mp3",
    },
    tips: [
      "นั่งนิ่งๆ",
      "ชี้นิ้วชี้ขณะอ่าน",
      "อ่านช้าๆ ชัดเจน",
    ],
    duration: 15,
  },
  {
    id: "10",
    stepNumber: 10,
    nameEn: "Salam",
    nameTh: "การให้สลาม",
    nameArabic: "السلام",
    description: "หันหน้าไปทางขวาและซ้ายพร้อมให้สลาม",
    image: "/images/practice/salam.svg",
    instructions: [
      "หันหน้าไปทางขวา",
      "กล่าว 'อัสสะลามุอะลัยกุม วะรอฮฺมะตุลลอฮฺ'",
      "หันหน้าไปทางซ้าย",
      "กล่าว 'อัสสะลามุอะลัยกุม วะรอฮฺมะตุลลอฮฺ' อีกครั้ง",
      "เสร็จสิ้นการละหมาด",
    ],
    dua: {
      arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
      transliteration: "Assalamu 'alaikum wa rahmatullah",
      translation: "ขอความสงบสุขและความเมตตาของอัลลอฮฺจงมีแด่ท่านทั้งหลาย",
      audioUrl: "/audio/salam.mp3",
    },
    tips: [
      "หันหน้าชัดเจน",
      "กล่าวทั้งสองข้าง",
      "ยิ้มแย้มแจ่มใส",
    ],
    duration: 3,
  },
];

// Helper functions
export function getPrayerStepById(id: string): PrayerStep | undefined {
  return prayerStepsMockData.find((step) => step.id === id);
}

export function getPrayerStepByNumber(stepNumber: number): PrayerStep | undefined {
  return prayerStepsMockData.find((step) => step.stepNumber === stepNumber);
}

export function getTotalSteps(): number {
  return prayerStepsMockData.length;
}

export function getNextStep(currentStepNumber: number): PrayerStep | undefined {
  if (currentStepNumber >= prayerStepsMockData.length) {
    return undefined;
  }
  return prayerStepsMockData[currentStepNumber];
}

export function getPreviousStep(currentStepNumber: number): PrayerStep | undefined {
  if (currentStepNumber <= 1) {
    return undefined;
  }
  return prayerStepsMockData[currentStepNumber - 2];
}
