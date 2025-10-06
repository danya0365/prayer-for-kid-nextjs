"use client";

import { useState } from "react";
import { useSettingsPresenter } from "@/src/presentation/presenters/settings/useSettingsPresenter";
import type { SettingsViewModel } from "@/src/presentation/presenters/settings/SettingsPresenter";
import type { AppSettings } from "@/src/data/mock/settings.mock";

interface SettingsViewProps {
  initialViewModel: SettingsViewModel;
}

export function SettingsView({ initialViewModel }: SettingsViewProps) {
  const { viewModel, isLoading, updateSetting, resetSettings } =
    useSettingsPresenter(initialViewModel);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (isLoading || !viewModel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">⚙️</div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            กำลังโหลด...
          </p>
        </div>
      </div>
    );
  }

  const { settings, categories, displaySettings, audioSettings, notificationSettings, appInfo } =
    viewModel;

  const handleToggle = (key: keyof AppSettings) => {
    updateSetting(key, !settings[key]);
  };

  const handleSelect = (key: keyof AppSettings, value: string) => {
    updateSetting(key, value);
  };

  const handleSlider = (key: keyof AppSettings, value: number) => {
    updateSetting(key, value);
  };

  const handleReset = () => {
    resetSettings();
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">⚙️</div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            ตั้งค่า
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ปรับแต่งการใช้งานให้เหมาะกับคุณ
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Display Settings */}
          <SettingsSection
            title={categories[0].name}
            icon={categories[0].icon}
            description={categories[0].description}
          >
            {displaySettings.map((option) => (
              <SettingItem
                key={option.id}
                option={option}
                value={settings[option.id as keyof AppSettings] ?? ""}
                onToggle={() => handleToggle(option.id as keyof AppSettings)}
                onSelect={(value) =>
                  handleSelect(option.id as keyof AppSettings, value)
                }
              />
            ))}
          </SettingsSection>

          {/* Audio Settings */}
          <SettingsSection
            title={categories[1].name}
            icon={categories[1].icon}
            description={categories[1].description}
          >
            {audioSettings.map((option) => (
              <SettingItem
                key={option.id}
                option={option}
                value={settings[option.id as keyof AppSettings] ?? ""}
                onToggle={() => handleToggle(option.id as keyof AppSettings)}
                onSelect={(value) =>
                  handleSelect(option.id as keyof AppSettings, value)
                }
                onSlider={(value) =>
                  handleSlider(option.id as keyof AppSettings, value)
                }
              />
            ))}
          </SettingsSection>

          {/* Notification Settings */}
          <SettingsSection
            title={categories[2].name}
            icon={categories[2].icon}
            description={categories[2].description}
          >
            {notificationSettings.map((option) => (
              <SettingItem
                key={option.id}
                option={option}
                value={settings[option.id as keyof AppSettings] ?? ""}
                onToggle={() => handleToggle(option.id as keyof AppSettings)}
              />
            ))}
          </SettingsSection>

          {/* App Info */}
          <SettingsSection
            title={categories[3].name}
            icon={categories[3].icon}
            description={categories[3].description}
          >
            {appInfo.map((option) => (
              <SettingItem key={option.id} option={option} value={option.value} />
            ))}
          </SettingsSection>

          {/* Reset Button */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  รีเซ็ตการตั้งค่า
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  กลับไปใช้การตั้งค่าเริ่มต้น
                </p>
              </div>
              <button
                onClick={() => setShowResetConfirm(true)}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                รีเซ็ต
              </button>
            </div>
          </div>
        </div>

        {/* Reset Confirmation Modal */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ยืนยันการรีเซ็ต
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตการตั้งค่าทั้งหมด?
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                >
                  ยกเลิก
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  รีเซ็ต
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Settings Section Component
function SettingsSection({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  icon: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-4xl">{icon}</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

// Setting Item Component
function SettingItem({
  option,
  value,
  onToggle,
  onSelect,
  onSlider,
}: {
  option: {
    id: string;
    type: string;
    label: string;
    description?: string;
    icon: string;
    options?: { value: string; label: string }[];
    min?: number;
    max?: number;
  };
  value: string | number | boolean | undefined;
  onToggle?: () => void;
  onSelect?: (value: string) => void;
  onSlider?: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div className="flex items-center space-x-4 flex-1">
        <span className="text-3xl">{option.icon}</span>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {option.label}
          </h3>
          {option.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {option.description}
            </p>
          )}
        </div>
      </div>

      {/* Toggle */}
      {option.type === "toggle" && (
        <button
          onClick={onToggle}
          className={`relative w-16 h-8 rounded-full transition-all ${
            value
              ? "bg-gradient-to-r from-blue-500 to-purple-600"
              : "bg-gray-300 dark:bg-gray-600"
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
              value ? "transform translate-x-8" : ""
            }`}
          />
        </button>
      )}

      {/* Select */}
      {option.type === "select" && option.options && (
        <select
          value={String(value || "")}
          onChange={(e) => onSelect?.(e.target.value)}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {option.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* Slider */}
      {option.type === "slider" && (
        <div className="flex items-center space-x-4 w-64">
          <input
            type="range"
            min={option.min || 0}
            max={option.max || 100}
            value={Number(value || 0)}
            onChange={(e) => onSlider?.(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="text-lg font-bold text-gray-900 dark:text-white w-12 text-right">
            {value}
          </span>
        </div>
      )}

      {/* Info */}
      {option.type === "info" && (
        <span className="text-gray-600 dark:text-gray-300 font-medium">
          {option.description}
        </span>
      )}
    </div>
  );
}
