import { AudioPlayer } from "@/src/presentation/components/audio/AudioPlayer";
import { CompactAudioPlayer } from "@/src/presentation/components/audio/CompactAudioPlayer";

/**
 * Audio Player Demo Page
 * หน้าทดสอบ Audio Player Component
 */
export default function AudioDemoPage() {
  // Example audio URLs (replace with real URLs)
  const exampleAudio = "/audio/duas/fatihah.mp3";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">🎵</div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Audio Player Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ทดสอบ Audio Player Component
          </p>
        </div>

        {/* Full Audio Player */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Full Audio Player
          </h2>
          <AudioPlayer
            audioUrl={exampleAudio}
            title="สูเราะฮ์ฟาติฮะฮ์"
            subtitle="Al-Fatihah - The Opening"
            showSpeed={true}
            showLoop={true}
          />
        </div>

        {/* Compact Audio Player */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Compact Audio Player
          </h2>
          <div className="space-y-4">
            <CompactAudioPlayer
              audioUrl={exampleAudio}
              title="ดุอาอ์อิสติฟตาฮฺ"
            />
            <CompactAudioPlayer
              audioUrl={exampleAudio}
              title="ดุอาอ์ในรุกูอ์"
            />
            <CompactAudioPlayer
              audioUrl={exampleAudio}
              title="ดุอาอ์ในซุจูด"
            />
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ✨ Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">▶️</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Play/Pause
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  เล่นและหยุดเสียงได้ง่าย
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⏩</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Seek Bar
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  เลื่อนไปตำแหน่งที่ต้องการ
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔊</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Volume Control
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ปรับระดับเสียงได้
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Playback Speed
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ปรับความเร็ว 0.5x - 1.5x
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔁</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Loop/Repeat
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  เล่นซ้ำอัตโนมัติ
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Kid-Friendly UI
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ออกแบบสำหรับเด็ก
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="mt-8 bg-gray-900 rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            💻 Usage Example
          </h2>
          <pre className="text-sm text-green-400 overflow-x-auto">
{`import { AudioPlayer } from "@/src/presentation/components/audio/AudioPlayer";

<AudioPlayer
  audioUrl="/audio/duas/fatihah.mp3"
  title="สูเราะฮ์ฟาติฮะฮ์"
  subtitle="Al-Fatihah"
  showSpeed={true}
  showLoop={true}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
