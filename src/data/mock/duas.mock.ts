/**
 * Mock data for Duas (Supplications)
 * ดุอาอ์และบทอ่านต่างๆ
 */

export interface Dua {
  id: string;
  title: string;
  titleArabic: string;
  category: "prayer" | "daily" | "special";
  occasion: string;
  arabic: string;
  transliteration: string;
  translation: string;
  audio?: string;
  reference?: string;
  benefits?: string[];
  whenToRecite: string;
}

export const duasMockData: Dua[] = [
  // Prayer Duas
  {
    id: "dua-1",
    title: "ดุอาอ์อิสติฟตาฮฺ",
    titleArabic: "دعاء الاستفتاح",
    category: "prayer",
    occasion: "เปิดการละหมาด",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
    transliteration: "Subhanaka Allahumma wa bihamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghairuk",
    translation: "มหาบริสุทธิ์พระองค์ ข้าแต่พระเจ้า และด้วยการสรรเสริญพระองค์ และพระนามของพระองค์ทรงความเป็นมงคล และความยิ่งใหญ่ของพระองค์ทรงสูงส่ง และไม่มีพระเจ้าอื่นใดนอกจากพระองค์",
    audio: "/audio/duas/istiftah.mp3",
    reference: "มุสลิม",
    benefits: [
      "เป็นการเปิดการละหมาดอย่างสวยงาม",
      "แสดงความเคารพต่อพระเจ้า",
      "ทำให้จิตใจสงบ",
    ],
    whenToRecite: "หลังตักบีรฮ์ ก่อนอ่านฟาติฮะฮ์",
  },
  {
    id: "dua-2",
    title: "สูเราะฮ์ฟาติฮะฮ์",
    titleArabic: "سورة الفاتحة",
    category: "prayer",
    occasion: "ในการละหมาดทุกรอกอะฮฺ",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾",
    transliteration: "Bismillahir Rahmanir Rahim. Alhamdu lillahi Rabbil 'alamin. Ar-Rahmanir Rahim. Maliki yawmid din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas siratal mustaqim. Siratal ladhina an'amta 'alaihim ghairil maghdubi 'alaihim wa lad dallin.",
    translation: "ด้วยพระนามของพระเจ้า ผู้ทรงเมตตา ผู้ทรงกรุณา การสรรเสริญทั้งมวลเป็นของพระเจ้า พระผู้เป็นเจ้าแห่งสากลโลก ผู้ทรงเมตตา ผู้ทรงกรุณา ผู้ทรงเป็นเจ้าของวันแห่งการพิพากษา พระองค์เท่านั้นที่เราเคารพบูชา และพระองค์เท่านั้นที่เราขอความช่วยเหลือ โปรดนำทางเราสู่ทางที่ตรง ทางของบรรดาผู้ที่พระองค์ทรงประทานพระคุณแก่พวกเขา มิใช่ทางของผู้ที่ถูกพระพิโรธ และมิใช่ทางของผู้หลงผิด",
    audio: "/audio/duas/fatihah.mp3",
    reference: "อัลกุรอาน 1:1-7",
    benefits: [
      "เป็นสูเราะฮ์ที่สำคัญที่สุด",
      "ต้องอ่านในทุกรอกอะฮฺ",
      "เป็นการขอพรจากพระเจ้า",
    ],
    whenToRecite: "ในทุกรอกอะฮฺของการละหมาด",
  },
  {
    id: "dua-3",
    title: "สูเราะฮ์อิคลาศ",
    titleArabic: "سورة الإخلاص",
    category: "prayer",
    occasion: "หลังอ่านฟาติฮะฮ์",
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    transliteration: "Qul huwa Allahu ahad. Allahus samad. Lam yalid wa lam yulad. Wa lam yakul lahu kufuwan ahad.",
    translation: "จงกล่าวเถิด พระองค์คือพระเจ้าผู้ทรงเป็นหนึ่งเดียว พระเจ้าผู้ทรงเป็นที่พึ่งพิง พระองค์มิได้ให้กำเนิด และมิได้ถูกให้กำเนิด และไม่มีสิ่งใดเสมอเหมือนพระองค์",
    audio: "/audio/duas/ikhlas.mp3",
    reference: "อัลกุรอาน 112:1-4",
    benefits: [
      "เท่ากับ 1/3 ของอัลกุรอาน",
      "สั้น จำง่าย",
      "บอกถึงความเป็นหนึ่งเดียวของพระเจ้า",
    ],
    whenToRecite: "หลังอ่านฟาติฮะฮ์ในรอกอะฮฺที่ 1 และ 2",
  },
  {
    id: "dua-4",
    title: "สูเราะฮ์ฟะลัก",
    titleArabic: "سورة الفلق",
    category: "prayer",
    occasion: "หลังอ่านฟาติฮะฮ์",
    arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
    transliteration: "Qul a'udhu bi rabbil falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin naffathati fil 'uqad. Wa min sharri hasidin idha hasad.",
    translation: "จงกล่าวเถิด ข้าพเจ้าขอความคุ้มครองจากพระผู้เป็นเจ้าแห่งรุ่งอรุณ จากความชั่วร้ายของสิ่งที่พระองค์ทรงสร้าง และจากความชั่วร้ายของความมืดเมื่อมันปกคลุม และจากความชั่วร้ายของผู้เป่าในปม และจากความชั่วร้ายของผู้อิจฉาเมื่อเขาอิจฉา",
    audio: "/audio/duas/falaq.mp3",
    reference: "อัลกุรอาน 113:1-5",
    benefits: [
      "ขอความคุ้มครองจากสิ่งชั่วร้าย",
      "ป้องกันอันตราย",
      "สั้น จำง่าย",
    ],
    whenToRecite: "หลังอ่านฟาติฮะฮ์ หรือก่อนนอน",
  },
  {
    id: "dua-5",
    title: "สูเราะฮ์นาส",
    titleArabic: "سورة الناس",
    category: "prayer",
    occasion: "หลังอ่านฟาติฮะฮ์",
    arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
    transliteration: "Qul a'udhu bi rabbin nas. Malikin nas. Ilahin nas. Min sharril waswasil khannas. Alladhi yuwaswisu fi sudurin nas. Minal jinnati wan nas.",
    translation: "จงกล่าวเถิด ข้าพเจ้าขอความคุ้มครองจากพระผู้เป็นเจ้าแห่งมนุษย์ ผู้ทรงเป็นกษัตริย์แห่งมนุษย์ ผู้ทรงเป็นพระเจ้าแห่งมนุษย์ จากความชั่วร้ายของผู้กระซิบที่หลบซ่อน ผู้ที่กระซิบในหัวใจของมนุษย์ จากหมู่ญินและมนุษย์",
    audio: "/audio/duas/nas.mp3",
    reference: "อัลกุรอาน 114:1-6",
    benefits: [
      "ขอความคุ้มครองจากชัยฏอน",
      "ป้องกันความคิดชั่ว",
      "สั้น จำง่าย",
    ],
    whenToRecite: "หลังอ่านฟาติฮะฮ์ หรือก่อนนอน",
  },
  {
    id: "dua-6",
    title: "ดุอาอ์ในรุกูอ์",
    titleArabic: "دعاء الركوع",
    category: "prayer",
    occasion: "ขณะโค้ง (รุกูอ์)",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhana Rabbiyal Adhim",
    translation: "มหาบริสุทธิ์พระเจ้าของข้าพเจ้า ผู้ยิ่งใหญ่",
    audio: "/audio/duas/ruku.mp3",
    reference: "มุสลิม",
    benefits: [
      "แสดงความเคารพต่อพระเจ้า",
      "ทำให้การละหมาดสมบูรณ์",
    ],
    whenToRecite: "ขณะโค้ง (รุกูอ์) อย่างน้อย 3 ครั้ง",
  },
  {
    id: "dua-7",
    title: "ดุอาอ์ในซุจูด",
    titleArabic: "دعاء السجود",
    category: "prayer",
    occasion: "ขณะกราบ (ซุจูด)",
    arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى",
    transliteration: "Subhana Rabbiyal A'la",
    translation: "มหาบริสุทธิ์พระเจ้าของข้าพเจ้า ผู้สูงสุด",
    audio: "/audio/duas/sujud.mp3",
    reference: "มุสลิม",
    benefits: [
      "แสดงความถ่อมตน",
      "ใกล้ชิดกับพระเจ้ามากที่สุด",
    ],
    whenToRecite: "ขณะกราบ (ซุจูด) อย่างน้อย 3 ครั้ง",
  },
  {
    id: "dua-8",
    title: "ดุอาอ์ตัชฮัด",
    titleArabic: "التشهد",
    category: "prayer",
    occasion: "ขณะนั่งตัชฮัด",
    arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "Attahiyyatu lillahi was salawatu wat tayyibat. Assalamu 'alaika ayyuhan nabiyyu wa rahmatullahi wa barakatuh. Assalamu 'alaina wa 'ala 'ibadillahis salihin. Ashhadu alla ilaha illallah wa ashhadu anna Muhammadan 'abduhu wa rasuluh.",
    translation: "คำทักทายทั้งหลายเป็นของพระเจ้า และการละหมาดทั้งหลาย และสิ่งดีงามทั้งหลาย ความสงบสุขจงมีแด่ท่าน โอ้ท่านนบี และความเมตตาของพระเจ้า และพรของพระองค์ ความสงบสุขจงมีแด่พวกเราและแด่บรรดาผู้รับใช้ที่ดีงามของพระเจ้า ข้าพเจ้าขอเป็นพยานว่าไม่มีพระเจ้าอื่นใดนอกจากพระเจ้า และข้าพเจ้าขอเป็นพยานว่ามุฮัมมัดเป็นผู้รับใช้และเป็นร่อซูลของพระองค์",
    audio: "/audio/duas/tashahhud.mp3",
    reference: "บุคอรีย์",
    benefits: [
      "เป็นส่วนสำคัญของการละหมาด",
      "ส่งสลามให้ท่านนบี",
      "ยืนยันความเชื่อ",
    ],
    whenToRecite: "ขณะนั่งตัชฮัด (รอกอะฮฺที่ 2 และรอกอะฮฺสุดท้าย)",
  },

  // Daily Duas
  {
    id: "dua-9",
    title: "ดุอาอ์ตื่นนอน",
    titleArabic: "دعاء الاستيقاظ",
    category: "daily",
    occasion: "เมื่อตื่นนอน",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil ladhi ahyana ba'da ma amatana wa ilaihin nushur",
    translation: "การสรรเสริญเป็นของพระเจ้า ผู้ทรงให้ชีวิตแก่เราหลังจากที่ทรงให้เราตาย และการฟื้นคืนชีพจะเป็นไปสู่พระองค์",
    audio: "/audio/duas/wake-up.mp3",
    reference: "บุคอรีย์",
    whenToRecite: "ทันทีที่ตื่นนอน",
  },
  {
    id: "dua-10",
    title: "ดุอาอ์ก่อนนอน",
    titleArabic: "دعاء النوم",
    category: "daily",
    occasion: "ก่อนนอน",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    translation: "ด้วยพระนามของพระองค์ ข้าแต่พระเจ้า ข้าพเจ้าตาย และข้าพเจ้ามีชีวิต",
    audio: "/audio/duas/sleep.mp3",
    reference: "บุคอรีย์",
    whenToRecite: "ก่อนนอน",
  },
  {
    id: "dua-11",
    title: "ดุอาอ์ก่อนกินข้าว",
    titleArabic: "دعاء قبل الطعام",
    category: "daily",
    occasion: "ก่อนกินข้าว",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "ด้วยพระนามของพระเจ้า",
    audio: "/audio/duas/before-eat.mp3",
    reference: "อบูดาวูด",
    whenToRecite: "ก่อนเริ่มกินอาหาร",
  },
  {
    id: "dua-12",
    title: "ดุอาอ์หลังกินข้าว",
    titleArabic: "دعاء بعد الطعام",
    category: "daily",
    occasion: "หลังกินข้าว",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    transliteration: "Alhamdu lillahil ladhi at'amana wa saqana wa ja'alana muslimin",
    translation: "การสรรเสริญเป็นของพระเจ้า ผู้ทรงให้เรากิน และให้เราดื่ม และทรงให้เราเป็นมุสลิม",
    audio: "/audio/duas/after-eat.mp3",
    reference: "อบูดาวูด",
    whenToRecite: "หลังกินอาหารเสร็จ",
  },
];

// Helper Functions
export function getDuasByCategory(category: Dua["category"]): Dua[] {
  return duasMockData.filter((dua) => dua.category === category);
}

export function getDuaById(id: string): Dua | undefined {
  return duasMockData.find((dua) => dua.id === id);
}

export function getDuasByOccasion(occasion: string): Dua[] {
  return duasMockData.filter((dua) => 
    dua.occasion.toLowerCase().includes(occasion.toLowerCase())
  );
}

export function getPrayerDuas(): Dua[] {
  return getDuasByCategory("prayer");
}

export function getDailyDuas(): Dua[] {
  return getDuasByCategory("daily");
}
