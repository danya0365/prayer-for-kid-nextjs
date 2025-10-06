import { useCallback, useEffect, useState } from "react";
import { LandingViewModel, LandingPresenter, LandingPresenterFactory } from "./LandingPresenter";

export interface LandingPresenterHook {
  // State
  viewModel: LandingViewModel | null;
  loading: boolean;
  error: string | null;

  // Actions
  refreshData: () => Promise<void>;
}

/**
 * Custom hook for Landing presenter
 * Provides state management and actions for Landing page
 */
export function useLandingPresenter(
  initialViewModel: LandingViewModel | null = null
): LandingPresenterHook {
  const [viewModel, setViewModel] = useState<LandingViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [presenter, setPresenter] = useState<LandingPresenter | null>(null);

  // Initialize presenter
  useEffect(() => {
    const initPresenter = async () => {
      const newPresenter = await LandingPresenterFactory.create();
      setPresenter(newPresenter);
    };
    initPresenter();
  }, []);

  /**
   * Load data from presenter
   */
  const refreshData = useCallback(async () => {
    if (!presenter) return;

    setLoading(true);
    setError(null);

    try {
      const newViewModel = await presenter.getViewModel();
      setViewModel(newViewModel);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading landing data:", err);
    } finally {
      setLoading(false);
    }
  }, [presenter]);

  return {
    viewModel,
    loading,
    error,
    refreshData,
  };
}
