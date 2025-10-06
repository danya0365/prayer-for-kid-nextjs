# Mock Data - Complete ✅

## สรุปการสร้าง Mock Data

สร้าง Mock Data ทั้งหมดสำหรับเว็บสอนการละหมาดสำหรับเด็ก สมบูรณ์แล้ว!

---

## 📁 ไฟล์ที่สร้าง

### 1. Quizzes Mock Data ✅
**File:** `src/data/mock/quizzes.mock.ts`

**Content:**
- 5 Quiz สำหรับบทเรียนต่างๆ
- แต่ละ Quiz มี 3-5 คำถาม
- รวม 20+ คำถาม
- มีคำอธิบายเมื่อตอบผิด
- ระบบคำนวณคะแนน
- Feedback ตามเปอร์เซ็นต์

**Interfaces:**
```typescript
- Quiz
- QuizQuestion
- QuizOption
```

**Helper Functions:**
- `getQuizByLessonId()`
- `getQuizById()`
- `calculateScore()`
- `getQuizFeedback()`

---

### 2. Achievements Mock Data ✅
**File:** `src/data/mock/achievements.mock.ts`

**Content:**
- 16 รางวัล (Achievements)
- 4 หมวดหมู่: Lessons, Practice, Streak, Special
- User Stats (คะแนน, ระดับ, ความคืบหน้า)
- Progress tracking

**Categories:**
- **Lessons** - รางวัลจากการเรียน (4 รางวัล)
- **Practice** - รางวัลจากการฝึกฝน (4 รางวัล)
- **Streak** - รางวัลจากการเรียนติดต่อกัน (4 รางวัล)
- **Special** - รางวัลพิเศษ (4 รางวัล)

**Helper Functions:**
- `getAchievementsByCategory()`
- `getUnlockedAchievements()`
- `getLockedAchievements()`
- `calculateLevel()`
- `getPointsForNextLevel()`

---

### 3. Prayer Steps Mock Data ✅
**File:** `src/data/mock/prayerSteps.mock.ts`

**Content:**
- 9 ขั้นตอนการละหมาด
- คำอธิบายละเอียดแต่ละขั้นตอน
- ดุอาอ์ที่ต้องอ่าน (อาหรับ + คำอ่าน + แปล)
- Tips และ Common Mistakes
- ระยะเวลาแต่ละขั้นตอน

**Steps:**
1. **Niyyah** - ตั้งนิยต
2. **Takbir** - ตักบีรฮ์
3. **Qiyam** - การยืน
4. **Ruku** - การโค้ง
5. **I'tidal** - ยืนหลังโค้ง
6. **Sujud** - การซุจูด
7. **Jalsa** - นั่งระหว่างซุจูด
8. **Tashahhud** - นั่งตัชฮัด
9. **Salam** - ให้สลาม

**Helper Functions:**
- `getPrayerStepById()`
- `getPrayerStepByNumber()`
- `getNextStep()`
- `getPreviousStep()`
- `getTotalDuration()`
- `getStepProgress()`

---

### 4. Duas Mock Data ✅
**File:** `src/data/mock/duas.mock.ts`

**Content:**
- 12 ดุอาอ์ (Duas)
- 3 หมวดหมู่: Prayer, Daily, Special
- ข้อความอาหรับ + คำอ่าน + แปลไทย
- ประโยชน์และเวลาที่ควรอ่าน

**Categories:**
- **Prayer Duas** - ดุอาอ์ในการละหมาด (8 ดุอาอ์)
  - อิสติฟตาฮฺ, ฟาติฮะฮ์, อิคลาศ, ฟะลัก, นาส
  - ดุอาอ์ในรุกูอ์, ซุจูด, ตัชฮัด
  
- **Daily Duas** - ดุอาอ์ประจำวัน (4 ดุอาอ์)
  - ตื่นนอน, ก่อนนอน
  - ก่อนกินข้าว, หลังกินข้าว

**Helper Functions:**
- `getDuasByCategory()`
- `getDuaById()`
- `getDuasByOccasion()`
- `getPrayerDuas()`
- `getDailyDuas()`

---

## 📊 สถิติ Mock Data

### Quizzes
- **5 Quizzes** สำหรับบทเรียนต่างๆ
- **20+ Questions** รวมทั้งหมด
- **Passing Score:** 70%
- **Points:** 10 คะแนนต่อข้อ

### Achievements
- **16 Achievements** ทั้งหมด
- **4 Categories:** Lessons, Practice, Streak, Special
- **Points Range:** 5-1000 คะแนน
- **6 Unlocked** (ตัวอย่าง)

### Prayer Steps
- **9 Steps** ครบทุกขั้นตอน
- **Total Duration:** ~133 วินาที (~2 นาที)
- **9 Duas** ในแต่ละขั้นตอน
- **Tips & Mistakes** ในทุก step

### Duas
- **12 Duas** ทั้งหมด
- **8 Prayer Duas** - สำหรับการละหมาด
- **4 Daily Duas** - สำหรับชีวิตประจำวัน
- **Audio Files** - พร้อม path สำหรับเสียง

---

## 🎯 Use Cases

### 1. Quiz System
```typescript
import { getQuizByLessonId, calculateScore } from '@/src/data/mock/quizzes.mock';

// Get quiz for a lesson
const quiz = getQuizByLessonId("1");

// Calculate score
const result = calculateScore(quiz, userAnswers);
// { score: 40, totalPoints: 50, percentage: 80, passed: true }

// Get feedback
const feedback = getQuizFeedback(result.percentage);
// { message: "ดีมาก! ผ่านแล้ว!", emoji: "👍", color: "text-green-500" }
```

### 2. Achievements System
```typescript
import { getAchievementsByCategory, calculateLevel } from '@/src/data/mock/achievements.mock';

// Get achievements by category
const lessonAchievements = getAchievementsByCategory("lessons");

// Calculate user level
const level = calculateLevel(235); // level 3

// Get points for next level
const pointsNeeded = getPointsForNextLevel(235); // 65 points
```

### 3. Prayer Steps
```typescript
import { getPrayerStepByNumber, getNextStep } from '@/src/data/mock/prayerSteps.mock';

// Get current step
const currentStep = getPrayerStepByNumber(1); // Niyyah

// Get next step
const nextStep = getNextStep(1); // Takbir

// Get total duration
const totalTime = getTotalDuration(); // 133 seconds
```

### 4. Duas
```typescript
import { getPrayerDuas, getDuasByOccasion } from '@/src/data/mock/duas.mock';

// Get all prayer duas
const prayerDuas = getPrayerDuas(); // 8 duas

// Get duas by occasion
const rukuDuas = getDuasByOccasion("รุกูอ์"); // Duas for Ruku
```

---

## 🎨 Data Structure

### Quiz Question Example
```typescript
{
  id: "q1-1",
  question: "การละหมาดคืออะไร?",
  options: [
    { id: "a", text: "การอ่านหนังสือ" },
    { id: "b", text: "การสื่อสารกับพระเจ้า" },
    { id: "c", text: "การออกกำลังกาย" },
    { id: "d", text: "การนอนหลับ" },
  ],
  correctAnswerId: "b",
  explanation: "การละหมาดคือการสื่อสารกับพระเจ้า...",
  points: 10,
}
```

### Achievement Example
```typescript
{
  id: "1",
  title: "ก้าวแรก",
  description: "เรียนจบบทเรียนแรก",
  icon: "🎯",
  category: "lessons",
  requirement: "เรียนจบ 1 บทเรียน",
  points: 10,
  isUnlocked: true,
  progress: { current: 1, target: 1 },
}
```

### Prayer Step Example
```typescript
{
  id: "step-1",
  stepNumber: 1,
  nameEn: "Niyyah",
  nameTh: "ตั้งนิยต",
  nameArabic: "النية",
  description: "การตั้งใจในใจว่าจะละหมาด",
  detailedInstructions: [...],
  dua: {
    arabic: "...",
    transliteration: "...",
    translation: "...",
  },
  tips: [...],
  duration: 5,
}
```

### Dua Example
```typescript
{
  id: "dua-1",
  title: "ดุอาอ์อิสติฟตาฮฺ",
  titleArabic: "دعاء الاستفتاح",
  category: "prayer",
  occasion: "เปิดการละหมาด",
  arabic: "سُبْحَانَكَ اللَّهُمَّ...",
  transliteration: "Subhanaka Allahumma...",
  translation: "มหาบริสุทธิ์พระองค์...",
  audio: "/audio/duas/istiftah.mp3",
  whenToRecite: "หลังตักบีรฮ์ ก่อนอ่านฟาติฮะฮ์",
}
```

---

## 🚀 Next Steps

### Integration with Pages

1. **Quiz Page**
   - ใช้ `quizzes.mock.ts`
   - แสดงคำถาม
   - คำนวณคะแนน
   - แสดง feedback

2. **Achievements Page**
   - ใช้ `achievements.mock.ts`
   - แสดงรางวัลที่ได้
   - แสดง progress
   - แสดง stats

3. **Practice Page**
   - ใช้ `prayerSteps.mock.ts`
   - แสดงขั้นตอนละหมาด
   - Interactive step-by-step
   - แสดงดุอาอ์

4. **Lesson Detail Page**
   - ใช้ `duas.mock.ts`
   - แสดงดุอาอ์ที่เกี่ยวข้อง
   - Audio player
   - คำอ่านและแปล

---

## 📝 Future Enhancements

### Quizzes
- [ ] เพิ่ม Quiz สำหรับบทเรียนที่เหลือ (19 บท)
- [ ] เพิ่มคำถามแบบภาพ (Image-based questions)
- [ ] เพิ่ม Time limit สำหรับแต่ละข้อ
- [ ] เพิ่ม Difficulty levels

### Achievements
- [ ] เพิ่มรางวัลเพิ่มเติม (30-50 รางวัล)
- [ ] เพิ่ม Rare achievements
- [ ] เพิ่ม Seasonal achievements
- [ ] เพิ่ม Leaderboard data

### Prayer Steps
- [ ] เพิ่มวิดีโอสาธิต
- [ ] เพิ่ม 3D models
- [ ] เพิ่มท่าละหมาดสำหรับผู้หญิง
- [ ] เพิ่มท่าละหมาดนั่ง (สำหรับผู้ป่วย)

### Duas
- [ ] เพิ่มดุอาอ์เพิ่มเติม (50+ ดุอาอ์)
- [ ] เพิ่ม Audio files จริง
- [ ] เพิ่มดุอาอ์สำหรับโอกาสพิเศษ
- [ ] เพิ่มการแปลหลายภาษา

---

## ✅ Checklist

- [x] Quizzes Mock Data (5 quizzes, 20+ questions)
- [x] Achievements Mock Data (16 achievements, 4 categories)
- [x] Prayer Steps Mock Data (9 steps, complete details)
- [x] Duas Mock Data (12 duas, 3 categories)
- [x] Helper functions for all data types
- [x] TypeScript interfaces
- [x] Complete documentation
- [x] Example use cases

---

## 🎉 Status

**Created:** 2025-10-07 01:47 AM
**Status:** ✅ Complete
**Total Files:** 4 Mock Data files
**Total Data:** 50+ items
**Next:** Integrate with Pages or Audio Player Component

---

## 📚 Related Files

- `src/data/mock/quizzes.mock.ts` - Quiz data
- `src/data/mock/achievements.mock.ts` - Achievements data
- `src/data/mock/prayerSteps.mock.ts` - Prayer steps data
- `src/data/mock/duas.mock.ts` - Duas data
- `src/data/mock/lessons.mock.ts` - Lessons data (existing)
- `src/data/mock/settings.mock.ts` - Settings data (existing)
- `src/data/mock/landing.mock.ts` - Landing data (existing)

---

**All Mock Data is now complete and ready to use! 🚀**
