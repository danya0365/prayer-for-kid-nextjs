/**
 * Mock data for Achievements
 * ระบบรางวัลและความสำเร็จ
 */

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "lessons" | "practice" | "streak" | "special";
  requirement: string;
  points: number;
  isUnlocked: boolean;
  unlockedAt?: string;
  progress?: {
    current: number;
    target: number;
  };
}

export interface UserStats {
  totalPoints: number;
  level: number;
  lessonsCompleted: number;
  practiceCount: number;
  currentStreak: number;
  longestStreak: number;
  totalPrayerTime: number; // in minutes
  achievementsUnlocked: number;
  totalAchievements: number;
}

// Mock achievements data
export const achievementsMockData: Achievement[] = [
  // Lessons Category
  {
    id: "1",
    title: "ก้าวแรก",
    description: "เรียนจบบทเรียนแรก",
    icon: "🎯",
    category: "lessons",
    requirement: "เรียนจบ 1 บทเรียน",
    points: 10,
    isUnlocked: true,
    unlockedAt: "2025-01-05",
    progress: {
      current: 1,
      target: 1,
    },
  },
  {
    id: "2",
    title: "นักเรียนขยัน",
    description: "เรียนจบ 5 บทเรียน",
    icon: "📚",
    category: "lessons",
    requirement: "เรียนจบ 5 บทเรียน",
    points: 50,
    isUnlocked: true,
    unlockedAt: "2025-01-10",
    progress: {
      current: 5,
      target: 5,
    },
  },
  {
    id: "3",
    title: "ผู้เชี่ยวชาญ",
    description: "เรียนจบ 10 บทเรียน",
    icon: "🎓",
    category: "lessons",
    requirement: "เรียนจบ 10 บทเรียน",
    points: 100,
    isUnlocked: false,
    progress: {
      current: 5,
      target: 10,
    },
  },
  {
    id: "4",
    title: "ปรมาจารย์",
    description: "เรียนจบทุกบทเรียน",
    icon: "👑",
    category: "lessons",
    requirement: "เรียนจบ 24 บทเรียน",
    points: 500,
    isUnlocked: false,
    progress: {
      current: 5,
      target: 24,
    },
  },

  // Practice Category
  {
    id: "5",
    title: "ฝึกฝนครั้งแรก",
    description: "ฝึกฝนการละหมาดครั้งแรก",
    icon: "🕌",
    category: "practice",
    requirement: "ฝึกฝน 1 ครั้ง",
    points: 20,
    isUnlocked: true,
    unlockedAt: "2025-01-06",
    progress: {
      current: 1,
      target: 1,
    },
  },
  {
    id: "6",
    title: "นักฝึก",
    description: "ฝึกฝนการละหมาด 10 ครั้ง",
    icon: "💪",
    category: "practice",
    requirement: "ฝึกฝน 10 ครั้ง",
    points: 100,
    isUnlocked: false,
    progress: {
      current: 3,
      target: 10,
    },
  },
  {
    id: "7",
    title: "ผู้ทุ่มเท",
    description: "ฝึกฝนการละหมาด 50 ครั้ง",
    icon: "🔥",
    category: "practice",
    requirement: "ฝึกฝน 50 ครั้ง",
    points: 300,
    isUnlocked: false,
    progress: {
      current: 3,
      target: 50,
    },
  },
  {
    id: "8",
    title: "เซียนการละหมาด",
    description: "ฝึกฝนการละหมาด 100 ครั้ง",
    icon: "⭐",
    category: "practice",
    requirement: "ฝึกฝน 100 ครั้ง",
    points: 1000,
    isUnlocked: false,
    progress: {
      current: 3,
      target: 100,
    },
  },

  // Streak Category
  {
    id: "9",
    title: "มีความมุ่งมั่น",
    description: "เรียนติดต่อกัน 3 วัน",
    icon: "📅",
    category: "streak",
    requirement: "Streak 3 วัน",
    points: 30,
    isUnlocked: true,
    unlockedAt: "2025-01-08",
    progress: {
      current: 3,
      target: 3,
    },
  },
  {
    id: "10",
    title: "ผู้อุตสาหะ",
    description: "เรียนติดต่อกัน 7 วัน",
    icon: "🌟",
    category: "streak",
    requirement: "Streak 7 วัน",
    points: 70,
    isUnlocked: false,
    progress: {
      current: 3,
      target: 7,
    },
  },
  {
    id: "11",
    title: "ผู้ไม่ย่อท้อ",
    description: "เรียนติดต่อกัน 30 วัน",
    icon: "🏆",
    category: "streak",
    requirement: "Streak 30 วัน",
    points: 300,
    isUnlocked: false,
    progress: {
      current: 3,
      target: 30,
    },
  },
  {
    id: "12",
    title: "ตำนานแห่งความมุ่งมั่น",
    description: "เรียนติดต่อกัน 100 วัน",
    icon: "💎",
    category: "streak",
    requirement: "Streak 100 วัน",
    points: 1000,
    isUnlocked: false,
    progress: {
      current: 3,
      target: 100,
    },
  },

  // Special Category
  {
    id: "13",
    title: "ผู้เริ่มต้น",
    description: "สร้างบัญชีและเริ่มต้นการเรียนรู้",
    icon: "🎉",
    category: "special",
    requirement: "สร้างบัญชี",
    points: 5,
    isUnlocked: true,
    unlockedAt: "2025-01-05",
    progress: {
      current: 1,
      target: 1,
    },
  },
  {
    id: "14",
    title: "นักสำรวจ",
    description: "เปิดดูทุกหมวดหมู่บทเรียน",
    icon: "🗺️",
    category: "special",
    requirement: "เปิดดูทุกหมวด",
    points: 25,
    isUnlocked: true,
    unlockedAt: "2025-01-07",
    progress: {
      current: 4,
      target: 4,
    },
  },
  {
    id: "15",
    title: "ผู้แบ่งปัน",
    description: "แชร์แอปให้เพื่อน",
    icon: "🤝",
    category: "special",
    requirement: "แชร์แอป",
    points: 50,
    isUnlocked: false,
    progress: {
      current: 0,
      target: 1,
    },
  },
  {
    id: "16",
    title: "ดาวรุ่ง",
    description: "ได้คะแนนรวม 500 คะแนน",
    icon: "✨",
    category: "special",
    requirement: "รวม 500 คะแนน",
    points: 100,
    isUnlocked: false,
    progress: {
      current: 235,
      target: 500,
    },
  },
];

// Mock user stats
export const userStatsMockData: UserStats = {
  totalPoints: 235,
  level: 3,
  lessonsCompleted: 5,
  practiceCount: 3,
  currentStreak: 3,
  longestStreak: 5,
  totalPrayerTime: 45, // minutes
  achievementsUnlocked: 6,
  totalAchievements: achievementsMockData.length,
};

// Helper functions
export function getAchievementsByCategory(category: Achievement["category"]): Achievement[] {
  return achievementsMockData.filter((achievement) => achievement.category === category);
}

export function getUnlockedAchievements(): Achievement[] {
  return achievementsMockData.filter((achievement) => achievement.isUnlocked);
}

export function getLockedAchievements(): Achievement[] {
  return achievementsMockData.filter((achievement) => !achievement.isUnlocked);
}

export function getAchievementById(id: string): Achievement | undefined {
  return achievementsMockData.find((achievement) => achievement.id === id);
}

export function calculateLevel(points: number): number {
  // Simple level calculation: 100 points per level
  return Math.floor(points / 100) + 1;
}

export function getPointsForNextLevel(currentPoints: number): number {
  const currentLevel = calculateLevel(currentPoints);
  const nextLevelPoints = currentLevel * 100;
  return nextLevelPoints - currentPoints;
}
