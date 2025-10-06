import { useCallback, useEffect, useState } from "react";
import { PracticeViewModel, PracticePresenter, PracticePresenterFactory } from "./PracticePresenter";

export interface PracticePresenterHook {
  viewModel: PracticeViewModel | null;
  loading: boolean;
  error: string | null;
  currentStep: number;
  isPlaying: boolean;
  isPaused: boolean;
  isCompleted: boolean;
  
  startPractice: () => void;
  pausePractice: () => void;
  resumePractice: () => void;
  stopPractice: () => void;
  goToStep: (stepNumber: number) => void;
  nextStep: () => void;
  previousStep: () => void;
}

export function usePracticePresenter(
  initialViewModel: PracticeViewModel | null = null
): PracticePresenterHook {
  const [viewModel, setViewModel] = useState<PracticeViewModel | null>(initialViewModel);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const startPractice = useCallback(() => {
    setCurrentStep(1);
    setIsPlaying(true);
    setIsPaused(false);
    setIsCompleted(false);
  }, []);

  const pausePractice = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumePractice = useCallback(() => {
    setIsPaused(false);
  }, []);

  const stopPractice = useCallback(() => {
    setCurrentStep(0);
    setIsPlaying(false);
    setIsPaused(false);
    setIsCompleted(false);
  }, []);

  const goToStep = useCallback((stepNumber: number) => {
    if (!viewModel) return;
    if (stepNumber < 1 || stepNumber > viewModel.totalSteps) return;
    setCurrentStep(stepNumber);
  }, [viewModel]);

  const nextStep = useCallback(() => {
    if (!viewModel) return;
    if (currentStep < viewModel.totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      setIsPlaying(false);
    }
  }, [viewModel, currentStep]);

  const previousStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  return {
    viewModel,
    loading,
    error,
    currentStep,
    isPlaying,
    isPaused,
    isCompleted,
    startPractice,
    pausePractice,
    resumePractice,
    stopPractice,
    goToStep,
    nextStep,
    previousStep,
  };
}
