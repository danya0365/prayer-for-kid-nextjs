import { useCallback, useEffect, useState } from "react";
import {
  LessonDetailViewModel,
  LessonDetailPresenter,
  LessonDetailPresenterFactory,
} from "./LessonDetailPresenter";

export interface LessonDetailPresenterHook {
  // State
  viewModel: LessonDetailViewModel | null;
  loading: boolean;
  error: string | null;
  currentStep: number;
  isCompleted: boolean;

  // Actions
  refreshData: () => Promise<void>;
  goToStep: (stepNumber: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  markAsCompleted: () => Promise<void>;
}

/**
 * Custom hook for Lesson Detail presenter
 * Provides state management and actions for Lesson Detail page
 */
export function useLessonDetailPresenter(
  slug: string,
  initialViewModel: LessonDetailViewModel | null = null
): LessonDetailPresenterHook {
  const [viewModel, setViewModel] = useState<LessonDetailViewModel | null>(
    initialViewModel || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [presenter, setPresenter] = useState<LessonDetailPresenter | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize presenter
  useEffect(() => {
    const initPresenter = async () => {
      const newPresenter = await LessonDetailPresenterFactory.create();
      setPresenter(newPresenter);
    };
    initPresenter();
  }, []);

  // Initialize current step from viewModel
  useEffect(() => {
    if (viewModel) {
      setCurrentStep(viewModel.progress.currentStep);
      setIsCompleted(viewModel.progress.isCompleted);
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
      const newViewModel = await presenter.getViewModel(slug);
      setViewModel(newViewModel);
      setCurrentStep(newViewModel.progress.currentStep);
      setIsCompleted(newViewModel.progress.isCompleted);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      console.error("Error loading lesson detail data:", err);
    } finally {
      setLoading(false);
    }
  }, [presenter, slug]);

  /**
   * Go to specific step
   */
  const goToStep = useCallback(
    async (stepNumber: number) => {
      if (!viewModel || !presenter) return;

      const totalSteps = viewModel.content.steps.length;
      if (stepNumber < 1 || stepNumber > totalSteps) return;

      setCurrentStep(stepNumber);

      // Update progress in backend (mock)
      await presenter.updateProgress(viewModel.lesson.id, stepNumber);
    },
    [viewModel, presenter]
  );

  /**
   * Go to next step
   */
  const nextStep = useCallback(() => {
    if (!viewModel) return;

    const totalSteps = viewModel.content.steps.length;
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1);
    }
  }, [viewModel, currentStep, goToStep]);

  /**
   * Go to previous step
   */
  const previousStep = useCallback(() => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  }, [currentStep, goToStep]);

  /**
   * Mark lesson as completed
   */
  const markAsCompleted = useCallback(async () => {
    if (!viewModel || !presenter) return;

    try {
      const success = await presenter.markAsCompleted(viewModel.lesson.id);
      if (success) {
        setIsCompleted(true);
        // In real app, this would trigger a celebration animation or redirect
        console.log("Lesson completed! 🎉");
      }
    } catch (err) {
      console.error("Error marking lesson as completed:", err);
    }
  }, [viewModel, presenter]);

  return {
    viewModel,
    loading,
    error,
    currentStep,
    isCompleted,
    refreshData,
    goToStep,
    nextStep,
    previousStep,
    markAsCompleted,
  };
}
