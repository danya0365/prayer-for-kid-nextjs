import { useCallback, useState } from "react";
import { AchievementsViewModel } from "./AchievementsPresenter";
import type { Achievement } from "@/src/data/mock/achievements.mock";

export interface AchievementsPresenterHook {
  viewModel: AchievementsViewModel | null;
  loading: boolean;
  error: string | null;
  selectedCategory: Achievement["category"] | "all";
  filteredAchievements: Achievement[];
  
  setCategory: (category: Achievement["category"] | "all") => void;
}

export function useAchievementsPresenter(
  initialViewModel: AchievementsViewModel | null = null
): AchievementsPresenterHook {
  const [viewModel] = useState<AchievementsViewModel | null>(initialViewModel);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Achievement["category"] | "all">("all");

  const filteredAchievements = viewModel
    ? selectedCategory === "all"
      ? viewModel.achievements
      : viewModel.achievements.filter((a) => a.category === selectedCategory)
    : [];

  const setCategory = useCallback((category: Achievement["category"] | "all") => {
    setSelectedCategory(category);
  }, []);

  return {
    viewModel,
    loading,
    error,
    selectedCategory,
    filteredAchievements,
    setCategory,
  };
}
