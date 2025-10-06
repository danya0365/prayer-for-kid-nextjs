# Prayer for Kids - TODO List

## 📋 Project Overview
เว็บแอปพลิเคชันสอนการละหมาดสำหรับเด็ก ด้วยภาพสวยงาม สดใส เน้นความสนุกสนาน ไม่เครียด อัดแน่นไปด้วยความรู้ สร้างด้วย Next.js 15 + Tailwind CSS v4 + Zustand

---

## 🎯 Phase 1: Foundation & Core Setup ✅ COMPLETED

### 1.1 Project Architecture ✅
- [x] Setup Next.js 15 with App Router
- [x] Setup TypeScript
- [x] Setup Tailwind CSS v4
- [x] Setup Zustand for state management
- [x] Setup localforage for persistence
- [x] Setup axios for HTTP client
- [x] Setup Supabase for backend
- [x] Setup react-hook-form + zod for forms
- [x] Setup next-themes for dark mode

### 1.2 Database & Backend ✅
- [x] Initialize Supabase project
- [x] Create environment variables
- [x] Setup Supabase config

---

## 🎨 Phase 2: UI Development with Mock Data (CURRENT FOCUS)

**Strategy: Build UI first with Mock Data, then integrate real API later**

### 2.1 Design System & Components

#### **Color Palette**
- [ ] **Primary Colors** (สีหลัก - สดใส เหมาะกับเด็ก)
  - [ ] Primary: สีฟ้าสดใส (Blue) - #3B82F6
  - [ ] Secondary: สีเขียวมิ้นท์ (Mint Green) - #10B981
  - [ ] Accent: สีส้มสดใส (Orange) - #F59E0B
  - [ ] Purple: สีม่วงอ่อน (Soft Purple) - #A78BFA
- [ ] **Background Colors**
  - [ ] Light mode: สีขาวนวล, ครีมอ่อน
  - [ ] Dark mode: สีน้ำเงินเข้มนุ่มนวล
- [ ] **Status Colors**
  - [ ] Success: สีเขียว
  - [ ] Warning: สีเหลือง
  - [ ] Error: สีแดงอ่อน
  - [ ] Info: สีฟ้า

#### **Typography**
- [ ] **Setup Kanit Font** from Google Fonts (สำหรับภาษาไทย)
- [ ] **Define Text Sizes**
  - [ ] Heading 1: ใหญ่มาก สำหรับหัวข้อหลัก
  - [ ] Heading 2-3: สำหรับหัวข้อรอง
  - [ ] Body: ขนาดอ่านง่าย เหมาะกับเด็ก
  - [ ] Caption: สำหรับคำอธิบายเล็กๆ

#### **Component Library (Atomic Design)**

##### **Atoms (ส่วนประกอบพื้นฐาน)**
- [ ] **Button**
  - [ ] Primary button (สีสดใส มีเงา)
  - [ ] Secondary button
  - [ ] Icon button (กลม น่ารัก)
  - [ ] Large button (สำหรับเด็กกดง่าย)
- [ ] **Card**
  - [ ] Prayer step card (การ์ดแสดงขั้นตอนละหมาด)
  - [ ] Lesson card (การ์ดบทเรียน)
  - [ ] Achievement card (การ์ดความสำเร็จ)
- [ ] **Badge**
  - [ ] Level badge (ระดับ)
  - [ ] Achievement badge (รางวัล)
  - [ ] Status badge
- [ ] **Icon**
  - [ ] Prayer icons (ไอคอนท่าละหมาด)
  - [ ] Navigation icons
  - [ ] Achievement icons (ดาว, เหรียญ, ถ้วยรางวัล)
- [ ] **Avatar**
  - [ ] Character avatar (ตัวละครน่ารัก)
  - [ ] User avatar

##### **Molecules (ส่วนประกอบระดับกลาง)**
- [ ] **Prayer Step Card**
  - [ ] รูปภาพท่าละหมาด
  - [ ] ชื่อท่า (ภาษาไทย + อาหรับ)
  - [ ] คำอธิบายสั้นๆ
  - [ ] ปุ่มดูรายละเอียด
- [ ] **Progress Bar**
  - [ ] แสดงความคืบหน้าการเรียนรู้
  - [ ] มีสีสันสดใส
  - [ ] มีอนิเมชั่น
- [ ] **Quiz Card**
  - [ ] คำถาม
  - [ ] ตัวเลือก (ปุ่มใหญ่ กดง่าย)
  - [ ] ฟีดแบ็ก (ถูก/ผิด)
- [ ] **Audio Player**
  - [ ] เล่นเสียงอ่านดุอาอ์
  - [ ] ปุ่มเล่น/หยุด ขนาดใหญ่
  - [ ] แสดงความยาวเสียง
- [ ] **Navigation Tab**
  - [ ] ไอคอนใหญ่ชัดเจน
  - [ ] ข้อความอธิบาย
  - [ ] Active state ชัดเจน

##### **Organisms (ส่วนประกอบระดับใหญ่)**
- [ ] **Navbar**
  - [ ] Logo น่ารัก
  - [ ] Navigation links (เมนูหลัก)
  - [ ] Dark mode toggle
  - [ ] User profile/avatar
  - [ ] Mobile menu (hamburger)
- [ ] **Footer**
  - [ ] ข้อมูลเว็บไซต์
  - [ ] Quick links
  - [ ] Social media (ถ้ามี)
  - [ ] Copyright
- [ ] **Prayer Steps Carousel**
  - [ ] แสดงขั้นตอนละหมาดทั้งหมด
  - [ ] Swipe ได้
  - [ ] มี indicator
- [ ] **Achievement Board**
  - [ ] แสดงรางวัลที่ได้รับ
  - [ ] แสดงความคืบหน้า
  - [ ] Animation เมื่อได้รางวัลใหม่
- [ ] **Interactive Prayer Demo**
  - [ ] แสดงท่าละหมาดแบบ interactive
  - [ ] มีเสียงประกอบ
  - [ ] มีคำอธิบาย

#### **Responsive Design**
- [ ] **Mobile First** (< 768px) - เน้นหลัก
- [ ] **Tablet** (768px - 1024px)
- [ ] **Desktop** (> 1024px)

#### **Dark Mode**
- [ ] Implement with next-themes
- [ ] สีสันยังสดใสแม้ใน dark mode
- [ ] เหมาะกับการอ่านตอนกลางคืน

---

### 2.2 Pages & Features

#### 🏠 **Landing Page** (Priority 1)
**Path:** `/`

- [ ] **Hero Section**
  - [ ] ภาพฮีโร่สวยงาม (มัสยิด, เด็กละหมาด)
  - [ ] หัวข้อหลัก: "เรียนรู้การละหมาดอย่างสนุกสนาน"
  - [ ] คำอธิบายสั้นๆ
  - [ ] CTA Button: "เริ่มเรียนเลย!" (ขนาดใหญ่ สีสดใส)
  - [ ] ภาพประกอบการ์ตูนน่ารัก

- [ ] **Features Section** (จุดเด่นของเว็บ)
  - [ ] 🎨 ภาพสวยงาม สีสันสดใส
  - [ ] 🎯 เรียนรู้ทีละขั้นตอน
  - [ ] 🎵 มีเสียงประกอบ (อ่านดุอาอ์)
  - [ ] 🏆 ระบบรางวัลและความสำเร็จ
  - [ ] 📱 ใช้งานง่าย เหมาะกับเด็ก
  - [ ] 🌙 โหมดกลางคืน

- [ ] **Preview Section** (ตัวอย่างบทเรียน)
  - [ ] แสดงตัวอย่างท่าละหมาด 2-3 ท่า
  - [ ] มีภาพประกอบ
  - [ ] ปุ่ม "ดูทั้งหมด"

- [ ] **How It Works Section** (วิธีการใช้งาน)
  - [ ] Step 1: เลือกบทเรียน
  - [ ] Step 2: เรียนรู้ทีละขั้นตอน
  - [ ] Step 3: ทำแบบทดสอบ
  - [ ] Step 4: รับรางวัล!
  - [ ] มีภาพประกอบแต่ละ step

- [ ] **Testimonials Section** (คำรับรอง - Optional)
  - [ ] ความคิดเห็นจากผู้ปกครอง
  - [ ] ความคิดเห็นจากเด็กๆ
  - [ ] มีรูปภาพ/avatar

- [ ] **CTA Section**
  - [ ] "พร้อมเริ่มเรียนรู้แล้วหรือยัง?"
  - [ ] ปุ่ม "เริ่มเลย!"

- [ ] **Footer**
  - [ ] ข้อมูลเว็บไซต์
  - [ ] Quick links
  - [ ] Copyright

---

#### 📚 **Lessons Page** (Priority 2)
**Path:** `/lessons`

- [ ] **Page Header**
  - [ ] หัวข้อ: "บทเรียนการละหมาด"
  - [ ] คำอธิบาย
  - [ ] Progress overview (เรียนไปแล้วกี่บท)

- [ ] **Lesson Categories**
  - [ ] **พื้นฐานการละหมาด**
    - [ ] การละหมาดคืออะไร
    - [ ] ความสำคัญของการละหมาด
    - [ ] เวลาละหมาด 5 เวลา
    - [ ] การเตรียมตัวก่อนละหมาด (ทำวุฎูอ์)
  
  - [ ] **ขั้นตอนการละหมาด**
    - [ ] 1. ตั้งนิยต (Niyyah)
    - [ ] 2. ตักบีรฮ์ (Takbir) - ยกมือขึ้น
    - [ ] 3. การยืน (Qiyam) - อ่านฟาติฮะฮ์
    - [ ] 4. การโค้ง (Ruku)
    - [ ] 5. การยืนหลังโค้ง (I'tidal)
    - [ ] 6. การซุจูด (Sujud) - ครั้งที่ 1
    - [ ] 7. การนั่งระหว่างซุจูด (Jalsa)
    - [ ] 8. การซุจูด (Sujud) - ครั้งที่ 2
    - [ ] 9. การนั่งตัชฮัด (Tashahhud)
    - [ ] 10. การให้สลาม (Salam)
  
  - [ ] **ดุอาอ์และบทอ่าน**
    - [ ] ดุอาอ์ตั้งนิยต
    - [ ] สูเราะฮ์ฟาติฮะฮ์
    - [ ] สูเราะฮ์สั้นๆ (อิคลาศ, ฟะลัก, นาส)
    - [ ] ดุอาอ์ในรุกูอ์
    - [ ] ดุอาอ์ในซุจูด
    - [ ] ดุอาอ์ตัชฮัด
  
  - [ ] **การละหมาดแต่ละเวลา**
    - [ ] ละหมาดฟัจญ์ (2 รอกอะฮ์)
    - [ ] ละหมาดซุฮร์ (4 รอกอะฮ์)
    - [ ] ละหมาดอัศร์ (4 รอกอะฮ์)
    - [ ] ละหมาดมัฆริบ (3 รอกอะฮ์)
    - [ ] ละหมาดอิชาอ์ (4 รอกอะฮ์)

- [ ] **Lesson Card Design**
  - [ ] ไอคอนประกอบ
  - [ ] ชื่อบทเรียน
  - [ ] คำอธิบายสั้นๆ
  - [ ] สถานะ (ยังไม่เรียน / กำลังเรียน / เรียนจบแล้ว)
  - [ ] Progress bar (ถ้ากำลังเรียน)
  - [ ] ปุ่ม "เริ่มเรียน" หรือ "เรียนต่อ"
  - [ ] Lock icon (ถ้ายังไม่ปลดล็อค)

- [ ] **Filter & Sort** (Optional)
  - [ ] ทั้งหมด / กำลังเรียน / เรียนจบแล้ว
  - [ ] เรียงตามความยาก

---

#### 📖 **Lesson Detail Page** (Priority 2)
**Path:** `/lessons/[slug]`

- [ ] **Lesson Header**
  - [ ] ชื่อบทเรียน
  - [ ] หมวดหมู่
  - [ ] ระยะเวลาโดยประมาณ
  - [ ] ปุ่มย้อนกลับ

- [ ] **Progress Indicator**
  - [ ] แสดงว่าอยู่ขั้นตอนไหน (Step 1/10)
  - [ ] Progress bar

- [ ] **Content Section**
  - [ ] **รูปภาพ/ภาพประกอบ**
    - [ ] ภาพท่าละหมาดขนาดใหญ่
    - [ ] ภาพการ์ตูนน่ารัก
    - [ ] มีลูกศรชี้จุดสำคัญ
  
  - [ ] **คำอธิบาย**
    - [ ] ชื่อท่า (ภาษาไทย)
    - [ ] ชื่อท่า (ภาษาอาหรับ - ถ้ามี)
    - [ ] คำอธิบายละเอียด (ภาษาง่ายๆ เหมาะกับเด็ก)
    - [ ] จุดสำคัญที่ต้องจำ (Highlight)
  
  - [ ] **Audio Section** (ถ้ามีดุอาอ์)
    - [ ] Audio player
    - [ ] ข้อความอาหรับ (ใหญ่ชัดเจน)
    - [ ] คำอ่าน (ภาษาไทย)
    - [ ] ความหมาย (ภาษาไทย)
    - [ ] ปุ่มเล่นซ้ำ
  
  - [ ] **Tips Section**
    - [ ] เคล็ดลับการจำ
    - [ ] สิ่งที่ควรระวัง
    - [ ] คำแนะนำ

- [ ] **Navigation Buttons**
  - [ ] ปุ่ม "ก่อนหน้า" (ถ้ามี)
  - [ ] ปุ่ม "ถัดไป"
  - [ ] ปุ่ม "ทำแบบทดสอบ" (ถ้าจบบทเรียน)

- [ ] **Interactive Elements**
  - [ ] ปุ่ม "ฉันเข้าใจแล้ว" (เพื่อบันทึกความคืบหน้า)
  - [ ] ปุ่ม "ทำซ้ำ"
  - [ ] ปุ่ม "บุ๊คมาร์ค"

---

#### 🎯 **Practice/Interactive Page** (Priority 3)
**Path:** `/practice`

- [ ] **Practice Mode Selection**
  - [ ] ฝึกท่าละหมาดทั้งหมด (Full Prayer)
  - [ ] ฝึกท่าเดียว (Single Step)
  - [ ] ฝึกอ่านดุอาอ์

- [ ] **Interactive Prayer Simulator**
  - [ ] แสดงภาพท่าละหมาดปัจจุบัน
  - [ ] มีเสียงประกอบ (ถ้าเลือก)
  - [ ] ปุ่ม "ท่าถัดไป"
  - [ ] ปุ่ม "ท่าก่อนหน้า"
  - [ ] ปุ่ม "เริ่มใหม่"
  - [ ] Timer (ถ้าต้องการ)
  - [ ] แสดงดุอาอ์ที่ต้องอ่าน

- [ ] **Step-by-Step Guide**
  - [ ] แสดงขั้นตอนปัจจุบัน
  - [ ] Checklist ขั้นตอนทั้งหมด
  - [ ] Highlight ขั้นตอนปัจจุบัน

- [ ] **Completion Screen**
  - [ ] "เยี่ยมมาก! คุณทำได้!"
  - [ ] สรุปผลการฝึก
  - [ ] ปุ่ม "ฝึกอีกครั้ง"
  - [ ] ปุ่ม "กลับหน้าหลัก"

---

#### 🎮 **Quiz Page** (Priority 4)
**Path:** `/quiz` หรือ `/lessons/[slug]/quiz`

- [ ] **Quiz Header**
  - [ ] หัวข้อ: "แบบทดสอบ"
  - [ ] คำอธิบาย
  - [ ] จำนวนข้อ (เช่น 10 ข้อ)

- [ ] **Question Card**
  - [ ] หมายเลขข้อ (1/10)
  - [ ] คำถาม (ตัวอักษรใหญ่)
  - [ ] รูปภาพประกอบ (ถ้ามี)
  - [ ] ตัวเลือก (4 ตัวเลือก)
    - [ ] ปุ่มขนาดใหญ่
    - [ ] มีไอคอน/รูปภาพประกอบ
    - [ ] Hover effect
  - [ ] ปุ่ม "ยืนยันคำตอบ"

- [ ] **Feedback**
  - [ ] ถูก: แสดงข้อความชมเชย + อนิเมชั่น
  - [ ] ผิด: แสดงคำตอบที่ถูก + คำอธิบาย
  - [ ] ปุ่ม "ข้อถัดไป"

- [ ] **Progress Bar**
  - [ ] แสดงว่าทำไปกี่ข้อแล้ว

- [ ] **Result Screen**
  - [ ] คะแนนที่ได้ (เช่น 8/10)
  - [ ] เปอร์เซ็นต์
  - [ ] ข้อความ feedback
    - [ ] 90-100%: "เยี่ยมยอด! 🌟"
    - [ ] 70-89%: "ดีมาก! 👍"
    - [ ] 50-69%: "พอใช้ ลองอีกครั้งนะ 💪"
    - [ ] <50%: "ลองทบทวนบทเรียนอีกครั้ง 📚"
  - [ ] รางวัลที่ได้รับ (ถ้าผ่าน)
  - [ ] ปุ่ม "ทำใหม่"
  - [ ] ปุ่ม "กลับบทเรียน"
  - [ ] ปุ่ม "บทเรียนถัดไป"

---

#### 🏆 **Achievements/Rewards Page** (Priority 5)
**Path:** `/achievements`

- [ ] **Page Header**
  - [ ] หัวข้อ: "รางวัลและความสำเร็จ"
  - [ ] คำอธิบาย
  - [ ] Overall progress (เช่น 15/30 รางวัล)

- [ ] **Achievement Categories**
  - [ ] **รางวัลการเรียนรู้**
    - [ ] เรียนจบบทเรียนแรก
    - [ ] เรียนจบทุกบทเรียน
    - [ ] เรียนจบหมวดพื้นฐาน
    - [ ] เรียนจบหมวดขั้นตอน
    - [ ] เรียนจบหมวดดุอาอ์
  
  - [ ] **รางวัลแบบทดสอบ**
    - [ ] ทำแบบทดสอบผ่านครั้งแรก
    - [ ] ได้คะแนนเต็ม 100%
    - [ ] ทำแบบทดสอบผ่านทุกบท
  
  - [ ] **รางวัลการฝึกฝน**
    - [ ] ฝึกละหมาดครบ 1 ครั้ง
    - [ ] ฝึกละหมาดครบ 10 ครั้ง
    - [ ] ฝึกละหมาดครบ 50 ครั้ง
  
  - [ ] **รางวัลพิเศษ**
    - [ ] เข้าใช้งาน 7 วันติดต่อกัน
    - [ ] เข้าใช้งาน 30 วัน
    - [ ] แชร์เว็บให้เพื่อน (Optional)

- [ ] **Achievement Card**
  - [ ] ไอคอนรางวัล (ดาว, เหรียญ, ถ้วย)
  - [ ] ชื่อรางวัล
  - [ ] คำอธิบาย
  - [ ] สถานะ (ได้แล้ว / ยังไม่ได้)
  - [ ] Progress bar (ถ้ายังไม่ได้)
  - [ ] วันที่ได้รับ (ถ้าได้แล้ว)
  - [ ] Animation เมื่อปลดล็อค

- [ ] **Stats Section**
  - [ ] จำนวนบทเรียนที่เรียนจบ
  - [ ] จำนวนแบบทดสอบที่ผ่าน
  - [ ] จำนวนครั้งที่ฝึกละหมาด
  - [ ] วันที่เข้าใช้งานติดต่อกัน

---

#### ⚙️ **Settings Page** (Priority 6)
**Path:** `/settings`

- [ ] **Page Header**
  - [ ] หัวข้อ: "ตั้งค่า"

- [ ] **Settings Sections**
  
  - [ ] **การแสดงผล**
    - [ ] Dark mode toggle
    - [ ] ขนาดตัวอักษร (เล็ก / กลาง / ใหญ่)
    - [ ] ภาษา (ไทย / English) - Optional
  
  - [ ] **เสียง**
    - [ ] เปิด/ปิดเสียงประกอบ
    - [ ] ระดับเสียง
    - [ ] เสียงอ่านดุอาอ์ (เลือกผู้อ่าน) - Optional
  
  - [ ] **การแจ้งเตือน** (Optional)
    - [ ] แจ้งเตือนเวลาละหมาด
    - [ ] แจ้งเตือนให้มาเรียน
  
  - [ ] **โปรไฟล์** (Optional)
    - [ ] ชื่อผู้ใช้
    - [ ] Avatar
    - [ ] อายุ
  
  - [ ] **ข้อมูลแอป**
    - [ ] เวอร์ชัน
    - [ ] เกี่ยวกับเรา
    - [ ] ติดต่อเรา
    - [ ] นโยบายความเป็นส่วนตัว

- [ ] **Reset Progress** (Optional)
  - [ ] ปุ่มรีเซ็ตความคืบหน้า
  - [ ] Confirmation dialog

---

#### 📱 **Profile Page** (Priority 7 - Optional)
**Path:** `/profile`

- [ ] **Profile Header**
  - [ ] Avatar
  - [ ] ชื่อผู้ใช้
  - [ ] Level (ถ้ามีระบบ level)
  - [ ] ปุ่มแก้ไขโปรไฟล์

- [ ] **Stats Overview**
  - [ ] จำนวนบทเรียนที่เรียนจบ
  - [ ] จำนวนรางวัลที่ได้
  - [ ] วันที่เข้าใช้งานติดต่อกัน
  - [ ] คะแนนรวม (ถ้ามี)

- [ ] **Recent Activity**
  - [ ] บทเรียนล่าสุดที่เรียน
  - [ ] รางวัลล่าสุดที่ได้
  - [ ] คะแนนแบบทดสอบล่าสุด

- [ ] **Quick Actions**
  - [ ] ปุ่มไปยังบทเรียนที่กำลังเรียน
  - [ ] ปุ่มไปยังรางวัล
  - [ ] ปุ่มไปยังการตั้งค่า

---

#### ℹ️ **About Page** (Priority 8 - Optional)
**Path:** `/about`

- [ ] **About Section**
  - [ ] เกี่ยวกับเว็บไซต์
  - [ ] วัตถุประสงค์
  - [ ] กลุ่มเป้าหมาย

- [ ] **Features Highlight**
  - [ ] จุดเด่นของเว็บ
  - [ ] ทำไมต้องเลือกเรียนกับเรา

- [ ] **Team** (Optional)
  - [ ] ผู้พัฒนา
  - [ ] ที่ปรึกษา

- [ ] **Contact**
  - [ ] อีเมล
  - [ ] Social media

---

### 2.3 Mock Data Structure

Create `/src/data/mock/` folder

- [ ] **lessons.mock.ts**
  ```typescript
  interface Lesson {
    id: string;
    slug: string;
    title: string;
    titleArabic?: string;
    description: string;
    category: 'basics' | 'steps' | 'duas' | 'prayers';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    duration: number; // minutes
    order: number;
    thumbnail: string;
    images: string[];
    content: {
      text: string;
      image?: string;
      audio?: string;
      arabicText?: string;
      transliteration?: string;
      translation?: string;
      tips?: string[];
    }[];
    isLocked: boolean;
    prerequisite?: string; // lesson id
  }
  ```

- [ ] **prayerSteps.mock.ts**
  ```typescript
  interface PrayerStep {
    id: string;
    stepNumber: number;
    nameEn: string;
    nameTh: string;
    nameArabic: string;
    description: string;
    image: string;
    audio?: string;
    dua?: {
      arabic: string;
      transliteration: string;
      translation: string;
      audio: string;
    };
    tips: string[];
    commonMistakes?: string[];
  }
  ```

- [ ] **quizzes.mock.ts**
  ```typescript
  interface Quiz {
    id: string;
    lessonId: string;
    title: string;
    description: string;
    questions: Question[];
  }

  interface Question {
    id: string;
    question: string;
    image?: string;
    options: {
      id: string;
      text: string;
      image?: string;
    }[];
    correctAnswerId: string;
    explanation: string;
  }
  ```

- [ ] **achievements.mock.ts**
  ```typescript
  interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    category: 'learning' | 'quiz' | 'practice' | 'special';
    requirement: {
      type: string;
      count: number;
    };
    reward?: {
      points: number;
      badge?: string;
    };
  }
  ```

- [ ] **duas.mock.ts**
  ```typescript
  interface Dua {
    id: string;
    title: string;
    titleArabic: string;
    occasion: string; // เช่น "ในรุกูอ์", "ในซุจูด"
    arabic: string;
    transliteration: string;
    translation: string;
    audio: string;
    reference?: string; // อ้างอิงจากหนังสือ/ฮะดีษ
  }
  ```

- [ ] **prayerTimes.mock.ts** (Optional)
  ```typescript
  interface PrayerTime {
    id: string;
    name: string;
    nameArabic: string;
    rakaat: number;
    description: string;
    timeRange: string; // เช่น "จากฟัจญ์จนก่อนพระอาทิตย์ขึ้น"
    specialInstructions?: string[];
  }
  ```

---

### 2.4 Global Layout Components

- [ ] **Navbar Component**
  - [ ] Logo น่ารัก (มัสยิด/ดาว/พระจันทร์)
  - [ ] Navigation links
    - [ ] หน้าแรก
    - [ ] บทเรียน
    - [ ] ฝึกฝน
    - [ ] รางวัล
    - [ ] เกี่ยวกับ
  - [ ] Dark mode toggle (ดวงจันทร์/ดวงอาทิตย์)
  - [ ] User avatar (Optional)
  - [ ] Mobile menu (hamburger)
  - [ ] Sticky on scroll
  - [ ] Active link highlighting

- [ ] **Footer Component**
  - [ ] ข้อมูลเว็บไซต์
  - [ ] Quick links
  - [ ] Social media (Optional)
  - [ ] Copyright
  - [ ] "สร้างด้วย ❤️ สำหรับเด็กๆ"

- [ ] **Layout Wrapper**
  - [ ] Consistent page structure
  - [ ] Navbar + content + footer
  - [ ] Background pattern น่ารัก (ดาว, เมฆ)

- [ ] **Loading Component**
  - [ ] Loading spinner น่ารัก
  - [ ] Loading animation

- [ ] **Error Component**
  - [ ] Error message
  - [ ] ปุ่มลองใหม่
  - [ ] ปุ่มกลับหน้าหลัก

---

## 🗄️ Phase 3: State Management & Data Persistence

### 3.1 Zustand Store Setup

- [ ] **User Store** (`userStore.ts`)
  ```typescript
  - userId
  - username
  - avatar
  - level
  - totalPoints
  - settings (darkMode, fontSize, soundEnabled, etc.)
  ```

- [ ] **Progress Store** (`progressStore.ts`)
  ```typescript
  - completedLessons: string[]
  - currentLesson: string
  - lessonProgress: { [lessonId: string]: number }
  - quizScores: { [quizId: string]: number }
  - practiceCount: number
  - lastActiveDate: Date
  - streakDays: number
  ```

- [ ] **Achievement Store** (`achievementStore.ts`)
  ```typescript
  - unlockedAchievements: string[]
  - achievementProgress: { [achievementId: string]: number }
  ```

- [ ] **Settings Store** (`settingsStore.ts`)
  ```typescript
  - darkMode: boolean
  - fontSize: 'small' | 'medium' | 'large'
  - soundEnabled: boolean
  - volume: number
  - language: 'th' | 'en'
  - notifications: boolean
  ```

### 3.2 LocalForage Persistence

- [ ] Setup localforage
- [ ] Persist user data
- [ ] Persist progress data
- [ ] Persist achievements
- [ ] Persist settings
- [ ] Hydrate stores on app load

---

## 🗄️ Phase 4: Database Schema & Backend Integration (LATER)

### 4.1 Database Tables Design

#### **Users Table** (`users`)
```sql
- id (uuid)
- username (text)
- email (text, unique)
- avatar_url (text)
- level (integer)
- total_points (integer)
- created_at, updated_at
```

#### **User Progress Table** (`user_progress`)
```sql
- id (uuid)
- user_id (uuid, references users)
- lesson_id (text)
- progress (integer) -- 0-100
- completed (boolean)
- completed_at (timestamp)
- created_at, updated_at
```

#### **Quiz Results Table** (`quiz_results`)
```sql
- id (uuid)
- user_id (uuid, references users)
- quiz_id (text)
- score (integer)
- total_questions (integer)
- completed_at (timestamp)
```

#### **User Achievements Table** (`user_achievements`)
```sql
- id (uuid)
- user_id (uuid, references users)
- achievement_id (text)
- unlocked_at (timestamp)
```

#### **Practice Sessions Table** (`practice_sessions`)
```sql
- id (uuid)
- user_id (uuid, references users)
- prayer_type (text)
- duration (integer) -- seconds
- completed (boolean)
- created_at (timestamp)
```

### 4.2 Row Level Security (RLS) Policies

- [ ] Users can only read/update their own data
- [ ] Public read access to lessons, quizzes, achievements (mock data)

### 4.3 API Endpoints / Server Actions

- [ ] **User**
  - [ ] `getUserProfile(userId)`
  - [ ] `updateUserProfile(userId, data)`
  
- [ ] **Progress**
  - [ ] `getUserProgress(userId)`
  - [ ] `updateLessonProgress(userId, lessonId, progress)`
  - [ ] `markLessonComplete(userId, lessonId)`
  
- [ ] **Quiz**
  - [ ] `submitQuizResult(userId, quizId, score)`
  - [ ] `getQuizHistory(userId)`
  
- [ ] **Achievements**
  - [ ] `getUserAchievements(userId)`
  - [ ] `unlockAchievement(userId, achievementId)`
  - [ ] `checkAchievements(userId)` -- Auto-check and unlock

---

## 🚀 Phase 5: Advanced Features

### 5.1 Animations & Interactions

- [ ] **Scroll Animations**
  - [ ] Fade in on scroll
  - [ ] Slide in from sides
  - [ ] Bounce effects for rewards

- [ ] **Page Transitions**
  - [ ] Smooth page transitions
  - [ ] Loading states

- [ ] **Micro-interactions**
  - [ ] Button hover effects (scale, glow)
  - [ ] Card hover effects (lift, shadow)
  - [ ] Confetti animation when unlocking achievement
  - [ ] Star animation when completing lesson
  - [ ] Progress bar animation

- [ ] **Interactive Elements**
  - [ ] Draggable prayer steps (Optional)
  - [ ] Swipeable cards
  - [ ] Animated characters (Optional)

### 5.2 Audio Features

- [ ] **Audio Player**
  - [ ] Play/Pause
  - [ ] Seek bar
  - [ ] Volume control
  - [ ] Playback speed (0.5x, 1x, 1.5x)
  - [ ] Loop/Repeat

- [ ] **Audio Management**
  - [ ] Preload audio files
  - [ ] Cache audio for offline use (Optional)
  - [ ] Multiple reciters (Optional)

### 5.3 Accessibility (A11y)

- [ ] **Keyboard Navigation**
  - [ ] Tab order
  - [ ] Focus indicators
  - [ ] Keyboard shortcuts

- [ ] **Screen Reader Support**
  - [ ] ARIA labels
  - [ ] Alt text for images
  - [ ] Semantic HTML

- [ ] **Color Contrast**
  - [ ] WCAG AA compliance
  - [ ] High contrast mode (Optional)

- [ ] **Font Scaling**
  - [ ] Support browser font scaling
  - [ ] Custom font size settings

---

## 🧪 Phase 6: Testing & Quality Assurance

### 6.1 Testing

- [ ] **Unit Tests** (Jest)
  - [ ] Component tests
  - [ ] Store tests
  - [ ] Utility functions

- [ ] **Integration Tests**
  - [ ] User flows
  - [ ] Forms
  - [ ] Navigation

- [ ] **E2E Tests** (Playwright) - Optional
  - [ ] Complete lesson flow
  - [ ] Quiz flow
  - [ ] Achievement unlock

### 6.2 Cross-browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### 6.3 Performance Testing

- [ ] **Lighthouse Audit**
  - [ ] Performance score > 90
  - [ ] Accessibility score > 90
  - [ ] SEO score > 90

- [ ] **Core Web Vitals**
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

---

## 🚀 Phase 7: Deployment & DevOps

### 7.1 Deployment Setup

- [ ] **Vercel Deployment**
  - [ ] Connect GitHub repo
  - [ ] Configure environment variables
  - [ ] Setup custom domain (Optional)
  - [ ] Configure SSL

- [ ] **Supabase Production** (if using backend)
  - [ ] Create production project
  - [ ] Run migrations
  - [ ] Configure RLS policies

### 7.2 CI/CD Pipeline (Optional)

- [ ] **GitHub Actions**
  - [ ] Run tests on PR
  - [ ] Type checking
  - [ ] Linting
  - [ ] Build verification

### 7.3 Monitoring (Optional)

- [ ] Error tracking (Sentry)
- [ ] Analytics (Google Analytics / Vercel Analytics)

---

## 📋 Phase 8: Content Creation & Launch

### 8.1 Content Creation

- [ ] **Gather Assets**
  - [ ] ภาพประกอบท่าละหมาดทั้งหมด (10+ ภาพ)
  - [ ] ภาพการ์ตูนน่ารักประกอบ
  - [ ] ไอคอนต่างๆ (รางวัล, เมนู, ฯลฯ)
  - [ ] ไฟล์เสียงอ่านดุอาอ์
  - [ ] Background images/patterns

- [ ] **Write Content**
  - [ ] เขียนเนื้อหาบทเรียนทั้งหมด
  - [ ] เขียนคำอธิบายท่าละหมาด
  - [ ] เขียนคำถามแบบทดสอบ (10+ ข้อต่อบท)
  - [ ] เขียน Tips และคำแนะนำ
  - [ ] แปลและถอดเสียงดุอาอ์

- [ ] **Create Mock Data**
  - [ ] สร้าง mock data สำหรับบทเรียน (อย่างน้อย 10 บท)
  - [ ] สร้าง mock data สำหรับแบบทดสอบ
  - [ ] สร้าง mock data สำหรับรางวัล (20-30 รางวัล)
  - [ ] สร้าง mock data สำหรับดุอาอ์

### 8.2 Pre-launch Checklist

- [ ] **Content Review**
  - [ ] ตรวจสอบความถูกต้องของเนื้อหาทางศาสนา
  - [ ] Proofread ข้อความทั้งหมด
  - [ ] ตรวจสอบภาพและเสียง

- [ ] **Technical Review**
  - [ ] ทดสอบทุกหน้า
  - [ ] ทดสอบบนมือถือ
  - [ ] ทดสอบ dark mode
  - [ ] ตรวจสอบ responsive design

- [ ] **Legal** (Optional)
  - [ ] Privacy Policy
  - [ ] Terms of Service

### 8.3 Launch

- [ ] **Soft Launch**
  - [ ] แชร์ให้เพื่อนและครอบครัวทดสอบ
  - [ ] รวบรวม feedback
  - [ ] แก้ไขปัญหาที่พบ

- [ ] **Official Launch**
  - [ ] ประกาศบน social media
  - [ ] แชร์ในกลุ่มผู้ปกครอง
  - [ ] แชร์ในชุมชนมุสลิม

- [ ] **Post-launch**
  - [ ] ติดตามการใช้งาน
  - [ ] รวบรวม feedback จากผู้ใช้
  - [ ] วางแผนปรับปรุง

---

## 🔄 Phase 9: Maintenance & Growth

### 9.1 Regular Maintenance

- [ ] **Content Updates**
  - [ ] เพิ่มบทเรียนใหม่
  - [ ] เพิ่มแบบทดสอบใหม่
  - [ ] เพิ่มรางวัลใหม่
  - [ ] อัพเดทเนื้อหาที่มีอยู่

- [ ] **Technical Maintenance**
  - [ ] Update dependencies
  - [ ] Security patches
  - [ ] Performance optimization
  - [ ] Bug fixes

### 9.2 Feature Enhancements

- [ ] **Additional Features**
  - [ ] เพิ่มระบบ level และ XP
  - [ ] เพิ่ม leaderboard (Optional)
  - [ ] เพิ่มโหมดเล่นกับเพื่อน (Optional)
  - [ ] เพิ่มการแจ้งเตือนเวลาละหมาด
  - [ ] เพิ่ม AR mode (ดูท่าละหมาดแบบ AR) - Future
  - [ ] เพิ่มวิดีโอสอน - Future
  - [ ] เพิ่มเกมมินิ - Future

- [ ] **Internationalization** (Future)
  - [ ] รองรับภาษาอังกฤษ
  - [ ] รองรับภาษาอื่นๆ

- [ ] **Mobile App** (Future)
  - [ ] สร้าง React Native app
  - [ ] เพิ่มฟีเจอร์ offline mode

---

## 📊 Priority Summary

### **NOW - Phase 2 (UI Development with Mock Data)**

**Timeline:** 3-4 weeks

**High Priority Pages:**
1. ✅ Landing Page (/) - Week 1
2. ✅ Lessons Page (/lessons) - Week 1-2
3. ✅ Lesson Detail Page (/lessons/[slug]) - Week 2
4. ✅ Practice Page (/practice) - Week 2-3
5. ✅ Quiz Page (/quiz) - Week 3
6. ✅ Achievements Page (/achievements) - Week 3-4
7. ✅ Settings Page (/settings) - Week 4

**Focus:**
- สร้าง UI ที่สวยงาม สดใส น่ารัก
- ใช้ Mock Data ทั้งหมด
- Responsive design
- Dark mode support
- Animations and interactions

### **NEXT - Phase 3 (State Management)**

**Timeline:** 1 week

- Setup Zustand stores
- Implement localforage persistence
- Connect UI to stores

### **LATER - Phases 4-9**

- Backend integration (ถ้าต้องการ)
- Advanced features
- Testing
- Deployment
- Content creation
- Launch

---

## 🎯 Current Sprint Goals

### **Sprint 1: Foundation + Landing + Lessons List (Week 1)**
- [x] Project setup complete
- [ ] Design system defined (colors, typography, components)
- [ ] Landing page UI complete
- [ ] Lessons list page UI complete
- [ ] Navbar and Footer complete
- [ ] Mock data structure defined
- [ ] Basic mock data created (5-10 lessons)

### **Sprint 2: Lesson Detail + Practice (Week 2)**
- [ ] Lesson detail page UI complete
- [ ] Interactive elements working
- [ ] Audio player component
- [ ] Practice page UI complete
- [ ] Step-by-step guide working
- [ ] More mock data (all lessons)

### **Sprint 3: Quiz + Achievements (Week 3)**
- [ ] Quiz page UI complete
- [ ] Quiz logic working
- [ ] Result screen with animations
- [ ] Achievements page UI complete
- [ ] Achievement unlock animations
- [ ] Mock quiz data complete

### **Sprint 4: Settings + Polish (Week 4)**
- [ ] Settings page UI complete
- [ ] Dark mode working perfectly
- [ ] All animations polished
- [ ] Responsive design verified
- [ ] Performance optimization
- [ ] Bug fixes

### **Sprint 5: State Management (Week 5)**
- [ ] Zustand stores setup
- [ ] LocalForage persistence
- [ ] Progress tracking working
- [ ] Achievement system working
- [ ] Settings persistence working

### **Sprint 6: Content + Launch Prep (Week 6+)**
- [ ] All content written
- [ ] All images prepared
- [ ] All audio files ready
- [ ] Testing complete
- [ ] Ready for soft launch

---

## 📝 Design Guidelines

### **Color Palette**
```css
/* Light Mode */
--primary: #3B82F6 (Blue)
--secondary: #10B981 (Green)
--accent: #F59E0B (Orange)
--purple: #A78BFA (Purple)
--background: #FFFFFF
--surface: #F9FAFB
--text: #1F2937

/* Dark Mode */
--primary: #60A5FA
--secondary: #34D399
--accent: #FBBF24
--purple: #C4B5FD
--background: #1F2937
--surface: #374151
--text: #F9FAFB
```

### **Typography**
- **Font Family:** Kanit (Google Fonts)
- **Headings:** Kanit Bold
- **Body:** Kanit Regular
- **Arabic Text:** Traditional Arabic or Amiri

### **Spacing**
- Use Tailwind's spacing scale
- Generous padding for kid-friendly touch targets
- Minimum button size: 44x44px

### **Imagery**
- Bright, colorful illustrations
- Cartoon style (friendly, not scary)
- Clear, simple diagrams
- Consistent art style throughout

### **Animations**
- Smooth and playful
- Not too fast (kids need time to see)
- Celebrate achievements with confetti/stars
- Use spring animations for natural feel

---

## 📚 Resources & References

### **Content Resources**
- [ ] Islamic prayer guides
- [ ] Dua collections
- [ ] Arabic transliteration guides

### **Design Inspiration**
- [ ] Kids educational apps (Duolingo, Khan Academy Kids)
- [ ] Islamic apps (Muslim Pro, Quran for Kids)
- [ ] Gamification examples

### **Technical Resources**
- [ ] Next.js 15 documentation
- [ ] Tailwind CSS v4 documentation
- [ ] Zustand documentation
- [ ] Framer Motion (for animations)

---

## 📝 Notes

- **เน้นความสนุก:** ทุกอย่างต้องสนุก ไม่เครียด เด็กๆ ต้องรู้สึกอยากเรียนรู้
- **ภาพสวยงาม:** ใช้สีสันสดใส ภาพการ์ตูนน่ารัก
- **ง่ายต่อการใช้งาน:** UI ต้องเรียบง่าย ปุ่มใหญ่ กดง่าย
- **ความถูกต้อง:** เนื้อหาทางศาสนาต้องถูกต้อง ตรวจสอบโดยผู้รู้
- **Responsive:** ต้องใช้งานได้ดีบนมือถือ (เด็กๆ มักใช้มือถือ)
- **Performance:** โหลดเร็ว ไม่ค้าง
- **Accessibility:** รองรับผู้ใช้ทุกคน

---

**Last Updated:** 2025-10-07
**Current Phase:** Phase 2 - UI Development with Mock Data
**Status:** 🚀 Ready to Start!
**Next Action:** Start with Design System & Landing Page
