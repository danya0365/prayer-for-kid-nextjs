import { useCallback, useEffect, useState } from "react";
import {
  LessonsViewModel,
  LessonsPresenter,
  LessonsPresenterFactory,
} from "./LessonsPresenter";
import type { Lesson, LessonCategory } from "@/src/data/mock/lessons.mock";

export interface LessonsPresenterHook {
  // State
  viewModel: LessonsViewModel | null;
  loading: boolean;
  error: string | null;
  selectedCategory: LessonCategory | "all";
  searchKeyword: string;
  filteredLessons: Lesson[];

  // Actions
  refreshData: () => Promise<void>;
  setCategory: (category: LessonCategory | "all") => void;
  setSearchKeyword: (keyword: string) => void;
  searchLessons: (keyword: string) => Promise<void>;
}

/**
 * Custom hook for Lessons presenter
 * Provides state management and actions for Lessons page
 */
export function useLessonsPresenter(
  initialViewModel: LessonsViewModel | null = null
): LessonsPresenterHook {
  const [viewModel, setViewModel] = useState<LessonsViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [presenter, setPresenter] = useState<LessonsPresenter | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<LessonCategory | "all">("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredLessons, setFilteredLessons] = useState<Lesson[]>(
    initialViewModel?.lessons || []
  );

  // Initialize presenter
  useEffect(() => {
    const initPresenter = async () => {
      const newPresenter = await LessonsPresenterFactory.create();
      setPresenter(newPresenter);
    };
    initPresenter();
  }, []);

  // Update filtered lessons when viewModel or category changes
  useEffect(() => {
    if (viewModel) {
      setFilteredLessons(viewModel.lessons);
    }
  }, [viewModel]);

  /**
   * Load data from presenter
   */
  const refreshData = useCallback(async () => {
    if (!presenter) return;

    setLoading(true);
    setError(null);

    try {
      const newViewModel = await presenter.getViewModel(selectedCategory);
      setViewModel(newViewModel);
      setFilteredLessons(newViewModel.lessons);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading lessons data:", err);
    } finally {
      setLoading(false);
    }
  }, [presenter, selectedCategory]);

  /**
   * Set category and reload data
   */
  const setCategory = useCallback(
    async (category: LessonCategory | "all") => {
      if (!presenter) return;

      setSelectedCategory(category);
      setSearchKeyword(""); // Clear search when changing category
      setLoading(true);
      setError(null);

      try {
        const newViewModel = await presenter.getViewModel(category);
        setViewModel(newViewModel);
        setFilteredLessons(newViewModel.lessons);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        console.error("Error loading lessons by category:", err);
      } finally {
        setLoading(false);
      }
    },
    [presenter]
  );

  /**
   * Search lessons by keyword
   */
  const searchLessons = useCallback(
    async (keyword: string) => {
      if (!presenter || !viewModel) return;

      setSearchKeyword(keyword);

      if (!keyword.trim()) {
        // If search is empty, show all lessons in current category
        setFilteredLessons(viewModel.lessons);
        return;
      }

      try {
        const results = await presenter.searchLessons(keyword);
        // Filter results by current category if not "all"
        if (selectedCategory !== "all") {
          setFilteredLessons(results.filter((l) => l.category === selectedCategory));
        } else {
          setFilteredLessons(results);
        }
      } catch (err) {
        console.error("Error searching lessons:", err);
      }
    },
    [presenter, viewModel, selectedCategory]
  );

  return {
    viewModel,
    loading,
    error,
    selectedCategory,
    searchKeyword,
    filteredLessons,
    refreshData,
    setCategory,
    setSearchKeyword,
    searchLessons,
  };
}
