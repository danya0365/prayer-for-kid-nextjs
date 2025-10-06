/**
 * Mock data for Settings
 * ข้อมูลการตั้งค่าต่างๆ
 */

export interface AppSettings {
  // Display Settings
  darkMode: boolean;
  fontSize: "small" | "medium" | "large";
  language: "th" | "en";

  // Audio Settings
  soundEnabled: boolean;
  volume: number; // 0-100
  reciter?: string; // ผู้อ่านดุอาอ์

  // Notification Settings
  notificationsEnabled: boolean;
  prayerTimeReminders: boolean;
  studyReminders: boolean;

  // App Info
  version: string;
  lastUpdated: string;
}

export interface SettingsOption {
  id: string;
  category: "display" | "audio" | "notifications" | "app";
  type: "toggle" | "select" | "slider" | "info";
  label: string;
  description?: string;
  icon: string;
  value?: string | number | boolean;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
}

// Default Settings
export const defaultSettings: AppSettings = {
  darkMode: false,
  fontSize: "medium",
  language: "th",
  soundEnabled: true,
  volume: 70,
  notificationsEnabled: false,
  prayerTimeReminders: false,
  studyReminders: false,
  version: "1.0.0",
  lastUpdated: "2025-10-07",
};

// Settings Categories
export const settingsCategories = [
  {
    id: "display",
    name: "การแสดงผล",
    icon: "🎨",
    description: "ปรับแต่งหน้าตาและการแสดงผล",
  },
  {
    id: "audio",
    name: "เสียง",
    icon: "🔊",
    description: "ตั้งค่าเสียงและเสียงอ่านดุอาอ์",
  },
  {
    id: "notifications",
    name: "การแจ้งเตือน",
    icon: "🔔",
    description: "ตั้งค่าการแจ้งเตือนต่างๆ",
  },
  {
    id: "app",
    name: "ข้อมูลแอป",
    icon: "ℹ️",
    description: "ข้อมูลเกี่ยวกับแอปพลิเคชัน",
  },
];

// Settings Options
export const settingsOptions: SettingsOption[] = [
  // Display Settings
  {
    id: "darkMode",
    category: "display",
    type: "toggle",
    label: "โหมดกลางคืน",
    description: "เปลี่ยนเป็นธีมสีเข้ม เหมาะกับการใช้งานตอนกลางคืน",
    icon: "🌙",
    value: false,
  },
  {
    id: "fontSize",
    category: "display",
    type: "select",
    label: "ขนาดตัวอักษร",
    description: "เลือกขนาดตัวอักษรที่เหมาะกับคุณ",
    icon: "📏",
    value: "medium",
    options: [
      { value: "small", label: "เล็ก" },
      { value: "medium", label: "กลาง" },
      { value: "large", label: "ใหญ่" },
    ],
  },
  {
    id: "language",
    category: "display",
    type: "select",
    label: "ภาษา",
    description: "เลือกภาษาที่ใช้ในแอป",
    icon: "🌐",
    value: "th",
    options: [
      { value: "th", label: "ภาษาไทย" },
      { value: "en", label: "English" },
    ],
  },

  // Audio Settings
  {
    id: "soundEnabled",
    category: "audio",
    type: "toggle",
    label: "เปิดเสียง",
    description: "เปิด/ปิดเสียงทั้งหมดในแอป",
    icon: "🔊",
    value: true,
  },
  {
    id: "volume",
    category: "audio",
    type: "slider",
    label: "ระดับเสียง",
    description: "ปรับระดับความดังของเสียง",
    icon: "🎚️",
    value: 70,
    min: 0,
    max: 100,
  },
  {
    id: "reciter",
    category: "audio",
    type: "select",
    label: "ผู้อ่านดุอาอ์",
    description: "เลือกผู้อ่านดุอาอ์ที่ชอบ",
    icon: "🎙️",
    value: "default",
    options: [
      { value: "default", label: "เสียงมาตรฐาน" },
      { value: "reciter1", label: "ผู้อ่าน 1" },
      { value: "reciter2", label: "ผู้อ่าน 2" },
    ],
  },

  // Notification Settings
  {
    id: "notificationsEnabled",
    category: "notifications",
    type: "toggle",
    label: "เปิดการแจ้งเตือน",
    description: "เปิด/ปิดการแจ้งเตือนทั้งหมด",
    icon: "🔔",
    value: false,
  },
  {
    id: "prayerTimeReminders",
    category: "notifications",
    type: "toggle",
    label: "แจ้งเตือนเวลาละหมาด",
    description: "แจ้งเตือนเมื่อถึงเวลาละหมาด",
    icon: "🕌",
    value: false,
  },
  {
    id: "studyReminders",
    category: "notifications",
    type: "toggle",
    label: "แจ้งเตือนให้มาเรียน",
    description: "แจ้งเตือนให้กลับมาเรียนรู้",
    icon: "📚",
    value: false,
  },

  // App Info
  {
    id: "version",
    category: "app",
    type: "info",
    label: "เวอร์ชัน",
    description: "1.0.0",
    icon: "📱",
    value: "1.0.0",
  },
  {
    id: "lastUpdated",
    category: "app",
    type: "info",
    label: "อัพเดทล่าสุด",
    description: "7 ตุลาคม 2568",
    icon: "📅",
    value: "2025-10-07",
  },
  {
    id: "about",
    category: "app",
    type: "info",
    label: "เกี่ยวกับเรา",
    description: "เรียนรู้การละหมาดอย่างสนุกสนาน",
    icon: "ℹ️",
    value: "about",
  },
  {
    id: "privacy",
    category: "app",
    type: "info",
    label: "นโยบายความเป็นส่วนตัว",
    description: "อ่านนโยบายความเป็นส่วนตัว",
    icon: "🔒",
    value: "privacy",
  },
];

// Helper Functions
export function getSettingsByCategory(
  category: "display" | "audio" | "notifications" | "app"
): SettingsOption[] {
  return settingsOptions.filter((option) => option.category === category);
}

export function getSettingById(id: string): SettingsOption | undefined {
  return settingsOptions.find((option) => option.id === id);
}

export function getFontSizeClass(fontSize: "small" | "medium" | "large"): string {
  const fontSizeMap = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };
  return fontSizeMap[fontSize];
}
