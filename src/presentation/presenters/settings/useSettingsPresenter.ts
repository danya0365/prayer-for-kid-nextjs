/**
 * Custom hook for Settings Presenter
 * Manages settings state and actions
 */

"use client";

import { useState, useEffect } from "react";
import { SettingsPresenter, type SettingsViewModel } from "./SettingsPresenter";
import type { AppSettings } from "@/src/data/mock/settings.mock";

export function useSettingsPresenter(initialViewModel?: SettingsViewModel) {
  const [viewModel, setViewModel] = useState<SettingsViewModel | null>(
    initialViewModel || null
  );
  const [isLoading, setIsLoading] = useState(!initialViewModel);
  const [error, setError] = useState<Error | null>(null);
  const [presenter] = useState(() => new SettingsPresenter());

  // Load data if not provided initially
  useEffect(() => {
    if (!initialViewModel) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialViewModel]);

  const loadData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await presenter.getViewModel();
      setViewModel(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setIsLoading(false);
    }
  };

  const updateSetting = (key: keyof AppSettings, value: string | number | boolean) => {
    if (!viewModel) return;

    const updatedSettings = presenter.updateSetting(key, value);
    setViewModel({
      ...viewModel,
      settings: updatedSettings,
    });

    // Apply changes immediately
    if (key === "darkMode") {
      if (value) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    if (key === "fontSize") {
      document.documentElement.setAttribute("data-font-size", String(value));
    }
  };

  const resetSettings = () => {
    if (!viewModel) return;

    const defaultSettings = presenter.resetSettings();
    setViewModel({
      ...viewModel,
      settings: defaultSettings,
    });

    // Reset dark mode
    document.documentElement.classList.remove("dark");
    document.documentElement.removeAttribute("data-font-size");
  };

  const refreshData = () => {
    loadData();
  };

  return {
    viewModel,
    isLoading,
    error,
    updateSetting,
    resetSettings,
    refreshData,
  };
}
