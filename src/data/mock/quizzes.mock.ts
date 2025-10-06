/**
 * Mock data for Quizzes
 * แบบทดสอบสำหรับแต่ละบทเรียน
 */

export interface QuizOption {
  id: string;
  text: string;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  image?: string;
  options: QuizOption[];
  correctAnswerId: string;
  explanation: string;
  points: number;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  passingScore: number; // percentage
  questions: QuizQuestion[];
  timeLimit?: number; // seconds (optional)
}

// Quizzes for each lesson
export const quizzesMockData: Quiz[] = [
  // Quiz for "การละหมาดคืออะไร"
  {
    id: "quiz-1",
    lessonId: "1",
    title: "แบบทดสอบ: การละหมาดคืออะไร",
    description: "ทดสอบความเข้าใจเกี่ยวกับการละหมาด",
    passingScore: 70,
    questions: [
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
        explanation: "การละหมาดคือการสื่อสารกับพระเจ้า เป็นการแสดงความเคารพและความเชื่อ",
        points: 10,
      },
      {
        id: "q1-2",
        question: "มุสลิมต้องละหมาดกี่ครั้งต่อวัน?",
        options: [
          { id: "a", text: "3 ครั้ง" },
          { id: "b", text: "5 ครั้ง" },
          { id: "c", text: "7 ครั้ง" },
          { id: "d", text: "10 ครั้ง" },
        ],
        correctAnswerId: "b",
        explanation: "มุสลิมต้องละหมาด 5 ครั้งต่อวัน ได้แก่ ฟัจญ์ ซุฮร์ อัศร์ มัฆริบ และอิชาอ์",
        points: 10,
      },
      {
        id: "q1-3",
        question: "ก่อนละหมาดต้องทำอะไร?",
        options: [
          { id: "a", text: "กินข้าว" },
          { id: "b", text: "ทำวุฎูอ์" },
          { id: "c", text: "นอนหลับ" },
          { id: "d", text: "วิ่งออกกำลังกาย" },
        ],
        correctAnswerId: "b",
        explanation: "ก่อนละหมาดต้องทำวุฎูอ์เพื่อชำระร่างกายให้สะอาด",
        points: 10,
      },
      {
        id: "q1-4",
        question: "การละหมาดเป็นเสาหลักข้อที่เท่าไหร่ของอิสลาม?",
        options: [
          { id: "a", text: "ข้อที่ 1" },
          { id: "b", text: "ข้อที่ 2" },
          { id: "c", text: "ข้อที่ 3" },
          { id: "d", text: "ข้อที่ 5" },
        ],
        correctAnswerId: "b",
        explanation: "การละหมาดเป็นเสาหลักข้อที่ 2 ของอิสลาม รองจากการกล่าวคำปฏิญาณ",
        points: 10,
      },
      {
        id: "q1-5",
        question: "เราละหมาดหันหน้าไปทางไหน?",
        options: [
          { id: "a", text: "ทางทิศเหนือ" },
          { id: "b", text: "ทางทิศใต้" },
          { id: "c", text: "ทางกิบลัต (เมกกะ)" },
          { id: "d", text: "ทางทิศตะวันออก" },
        ],
        correctAnswerId: "c",
        explanation: "เราละหมาดหันหน้าไปทางกิบลัต คือทิศทางของกะอฺบะฮฺที่เมกกะ",
        points: 10,
      },
    ],
  },

  // Quiz for "ความสำคัญของการละหมาด"
  {
    id: "quiz-2",
    lessonId: "2",
    title: "แบบทดสอบ: ความสำคัญของการละหมาด",
    description: "ทดสอบความเข้าใจเกี่ยวกับความสำคัญของการละหมาด",
    passingScore: 70,
    questions: [
      {
        id: "q2-1",
        question: "การละหมาดช่วยให้เราได้อะไร?",
        options: [
          { id: "a", text: "ความสงบใจ" },
          { id: "b", text: "เงินทอง" },
          { id: "c", text: "ของเล่น" },
          { id: "d", text: "อาหาร" },
        ],
        correctAnswerId: "a",
        explanation: "การละหมาดช่วยให้เราได้ความสงบใจและใกล้ชิดกับพระเจ้า",
        points: 10,
      },
      {
        id: "q2-2",
        question: "การละหมาดช่วยให้เราจำอะไรได้?",
        options: [
          { id: "a", text: "จำพระเจ้า" },
          { id: "b", text: "จำเพื่อน" },
          { id: "c", text: "จำเกม" },
          { id: "d", text: "จำการ์ตูน" },
        ],
        correctAnswerId: "a",
        explanation: "การละหมาดช่วยให้เราจำพระเจ้าและรู้สึกขอบคุณพระองค์",
        points: 10,
      },
      {
        id: "q2-3",
        question: "การละหมาดทำให้เราเป็นคนอย่างไร?",
        options: [
          { id: "a", text: "เป็นคนดี มีวินัย" },
          { id: "b", text: "เป็นคนขี้เกียจ" },
          { id: "c", text: "เป็นคนเห็นแก่ตัว" },
          { id: "d", text: "เป็นคนไม่มีความรับผิดชอบ" },
        ],
        correctAnswerId: "a",
        explanation: "การละหมาดทำให้เราเป็นคนดี มีวินัย และรับผิดชอบ",
        points: 10,
      },
    ],
  },

  // Quiz for "เวลาละหมาด 5 เวลา"
  {
    id: "quiz-3",
    lessonId: "3",
    title: "แบบทดสอบ: เวลาละหมาด 5 เวลา",
    description: "ทดสอบความรู้เกี่ยวกับเวลาละหมาดทั้ง 5 เวลา",
    passingScore: 70,
    questions: [
      {
        id: "q3-1",
        question: "ละหมาดเวลาแรกของวันคือเวลาไหน?",
        options: [
          { id: "a", text: "ฟัจญ์" },
          { id: "b", text: "ซุฮร์" },
          { id: "c", text: "อัศร์" },
          { id: "d", text: "มัฆริบ" },
        ],
        correctAnswerId: "a",
        explanation: "ฟัจญ์เป็นละหมาดเวลาแรกของวัน ละหมาดก่อนพระอาทิตย์ขึ้น",
        points: 10,
      },
      {
        id: "q3-2",
        question: "ละหมาดซุฮร์ละหมาดเวลาไหน?",
        options: [
          { id: "a", text: "เช้า" },
          { id: "b", text: "เที่ยง" },
          { id: "c", text: "บ่าย" },
          { id: "d", text: "เย็น" },
        ],
        correctAnswerId: "b",
        explanation: "ละหมาดซุฮร์ละหมาดเวลาเที่ยง หลังพระอาทิตย์ผ่านจุดสูงสุด",
        points: 10,
      },
      {
        id: "q3-3",
        question: "ละหมาดมัฆริบละหมาดเมื่อไหร่?",
        options: [
          { id: "a", text: "พระอาทิตย์ขึ้น" },
          { id: "b", text: "พระอาทิตย์ตก" },
          { id: "c", text: "เที่ยงวัน" },
          { id: "d", text: "เที่ยงคืน" },
        ],
        correctAnswerId: "b",
        explanation: "ละหมาดมัฆริบละหมาดหลังพระอาทิตย์ตก",
        points: 10,
      },
      {
        id: "q3-4",
        question: "ละหมาดเวลาสุดท้ายของวันคือเวลาไหน?",
        options: [
          { id: "a", text: "ฟัจญ์" },
          { id: "b", text: "ซุฮร์" },
          { id: "c", text: "มัฆริบ" },
          { id: "d", text: "อิชาอ์" },
        ],
        correctAnswerId: "d",
        explanation: "อิชาอ์เป็นละหมาดเวลาสุดท้ายของวัน ละหมาดตอนกลางคืน",
        points: 10,
      },
    ],
  },

  // Quiz for "การทำวุฎูอ์"
  {
    id: "quiz-4",
    lessonId: "4",
    title: "แบบทดสอบ: การทำวุฎูอ์",
    description: "ทดสอบความรู้เกี่ยวกับการทำวุฎูอ์",
    passingScore: 70,
    questions: [
      {
        id: "q4-1",
        question: "ทำวุฎูอ์เริ่มจากอวัยวะไหน?",
        options: [
          { id: "a", text: "มือ" },
          { id: "b", text: "ใบหน้า" },
          { id: "c", text: "เท้า" },
          { id: "d", text: "ศีรษะ" },
        ],
        correctAnswerId: "a",
        explanation: "เริ่มจากล้างมือทั้งสองข้าง 3 ครั้ง",
        points: 10,
      },
      {
        id: "q4-2",
        question: "ทำวุฎูอ์ต้องใช้อะไร?",
        options: [
          { id: "a", text: "น้ำสะอาด" },
          { id: "b", text: "น้ำผลไม้" },
          { id: "c", text: "น้ำอัดลม" },
          { id: "d", text: "นม" },
        ],
        correctAnswerId: "a",
        explanation: "ทำวุฎูอ์ต้องใช้น้ำสะอาด",
        points: 10,
      },
      {
        id: "q4-3",
        question: "ล้างใบหน้ากี่ครั้ง?",
        options: [
          { id: "a", text: "1 ครั้ง" },
          { id: "b", text: "2 ครั้ง" },
          { id: "c", text: "3 ครั้ง" },
          { id: "d", text: "5 ครั้ง" },
        ],
        correctAnswerId: "c",
        explanation: "ล้างใบหน้า 3 ครั้ง",
        points: 10,
      },
    ],
  },

  // Quiz for "การตั้งนิยต"
  {
    id: "quiz-5",
    lessonId: "5",
    title: "แบบทดสอบ: การตั้งนิยต",
    description: "ทดสอบความเข้าใจเกี่ยวกับการตั้งนิยต",
    passingScore: 70,
    questions: [
      {
        id: "q5-1",
        question: "นิยตคืออะไร?",
        options: [
          { id: "a", text: "การตั้งใจ" },
          { id: "b", text: "การกิน" },
          { id: "c", text: "การนอน" },
          { id: "d", text: "การเล่น" },
        ],
        correctAnswerId: "a",
        explanation: "นิยตคือการตั้งใจในใจว่าจะละหมาด",
        points: 10,
      },
      {
        id: "q5-2",
        question: "ตั้งนิยตที่ไหน?",
        options: [
          { id: "a", text: "ในใจ" },
          { id: "b", text: "บนกระดาษ" },
          { id: "c", text: "บนมือ" },
          { id: "d", text: "บนเท้า" },
        ],
        correctAnswerId: "a",
        explanation: "ตั้งนิยตในใจ ไม่จำเป็นต้องพูดออกมา",
        points: 10,
      },
    ],
  },
];

// Helper Functions
export function getQuizByLessonId(lessonId: string): Quiz | undefined {
  return quizzesMockData.find((quiz) => quiz.lessonId === lessonId);
}

export function getQuizById(quizId: string): Quiz | undefined {
  return quizzesMockData.find((quiz) => quiz.id === quizId);
}

export function calculateScore(
  quiz: Quiz,
  answers: Record<string, string>
): {
  score: number;
  totalPoints: number;
  percentage: number;
  passed: boolean;
  correctAnswers: number;
  totalQuestions: number;
} {
  let correctAnswers = 0;
  let totalPoints = 0;
  const maxPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);

  quiz.questions.forEach((question) => {
    if (answers[question.id] === question.correctAnswerId) {
      correctAnswers++;
      totalPoints += question.points;
    }
  });

  const percentage = (totalPoints / maxPoints) * 100;
  const passed = percentage >= quiz.passingScore;

  return {
    score: totalPoints,
    totalPoints: maxPoints,
    percentage: Math.round(percentage),
    passed,
    correctAnswers,
    totalQuestions: quiz.questions.length,
  };
}

export function getQuizFeedback(percentage: number): {
  message: string;
  emoji: string;
  color: string;
} {
  if (percentage >= 90) {
    return {
      message: "เยี่ยมยอด! คุณเก่งมาก!",
      emoji: "🌟",
      color: "text-yellow-500",
    };
  } else if (percentage >= 70) {
    return {
      message: "ดีมาก! ผ่านแล้ว!",
      emoji: "👍",
      color: "text-green-500",
    };
  } else if (percentage >= 50) {
    return {
      message: "พอใช้ ลองอีกครั้งนะ",
      emoji: "💪",
      color: "text-orange-500",
    };
  } else {
    return {
      message: "ลองทบทวนบทเรียนอีกครั้ง",
      emoji: "📚",
      color: "text-red-500",
    };
  }
}
