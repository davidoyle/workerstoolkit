const KEY = 'workerstoolkit-progress-v1';

export type ProgressState = {
  completedSteps: string[];
  selectedSituation?: string;
};

export const getProgress = (): ProgressState => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { completedSteps: [] };
  } catch {
    return { completedSteps: [] };
  }
};

export const saveProgress = (next: ProgressState) => {
  localStorage.setItem(KEY, JSON.stringify(next));
};
