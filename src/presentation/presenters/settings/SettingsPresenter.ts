/**
 * Settings Presenter
 * Business logic for Settings page
 */

import type { Metadata } from "next";
import {
  defaultSettings,
  settingsCategories,
  getSettingsByCategory,
  type AppSettings,
  type SettingsOption,
} from "@/src/data/mock/settings.mock";

export interface SettingsViewModel {
  settings: AppSettings;
  categories: typeof settingsCategories;
  displaySettings: SettingsOption[];
  audioSettings: SettingsOption[];
  notificationSettings: SettingsOption[];
  appInfo: SettingsOption[];
}

export class SettingsPresenter {
  /**
   * Get view model for Settings page
   */
  async getViewModel(): Promise<SettingsViewModel> {
    // In a real app, this would fetch from API or local storage
    const settings = this.loadSettings();

    return {
      settings,
      categories: settingsCategories,
      displaySettings: getSettingsByCategory("display"),
      audioSettings: getSettingsByCategory("audio"),
      notificationSettings: getSettingsByCategory("notifications"),
      appInfo: getSettingsByCategory("app"),
    };
  }

  /**
   * Load settings from localStorage or use defaults
   */
  private loadSettings(): AppSettings {
    if (typeof window === "undefined") {
      return defaultSettings;
    }

    try {
      const saved = localStorage.getItem("app-settings");
      if (saved) {
        return { ...defaultSettings, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    }

    return defaultSettings;
  }

  /**
   * Save settings to localStorage
   */
  saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem("app-settings", JSON.stringify(settings));
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  }

  /**
   * Update a single setting
   */
  updateSetting(key: keyof AppSettings, value: string | number | boolean): AppSettings {
    const currentSettings = this.loadSettings();
    const updatedSettings = {
      ...currentSettings,
      [key]: value,
    };
    this.saveSettings(updatedSettings);
    return updatedSettings;
  }

  /**
   * Reset all settings to defaults
   */
  resetSettings(): AppSettings {
    this.saveSettings(defaultSettings);
    return defaultSettings;
  }

  /**
   * Generate metadata for SEO
   */
  generateMetadata(): Metadata {
    return {
      title: "ตั้งค่า | Prayer for Kids",
      description: "ตั้งค่าการแสดงผล เสียง และการแจ้งเตือน",
    };
  }
}

/**
 * Factory to create presenter instance
 */
export class SettingsPresenterFactory {
  static async create(): Promise<SettingsPresenter> {
    return new SettingsPresenter();
  }
}
