import { StateCreator } from 'zustand';

export type Chore = {
  id: string;
  createdAt: Date;
  title: string;
  area: string;
  duration: number;
};

export interface ChoresSlice {
  chores: Chore[];
  addChore: (chore: Chore) => void;
  removeChore: (choreId: string) => void;

  /* Filters */
  durationRange: number[];
  setDurationRange: (range: number[]) => void;
  areaFilters: string[];
  toggleAreaFilter: (areaFilter: string) => void;
}

export const createChoresSlice: StateCreator<ChoresSlice, [], [], ChoresSlice> = (set) => ({
  chores: [],
  addChore: (chore) => set((state) => ({ chores: [...state.chores, chore] })),
  removeChore: (choreId) =>
    set((state) => ({ chores: state.chores.filter((chore) => chore.id !== choreId) })),
  durationRange: [0, 60],
  setDurationRange: (range) => set({ durationRange: range }),
  areaFilters: ['bathroom', 'bedroom', 'kitchen', 'laundry'],
  toggleAreaFilter: (areaFilter) =>
    set((state) => ({
      areaFilters: state.areaFilters.includes(areaFilter)
        ? state.areaFilters.filter((af) => af !== areaFilter)
        : [...state.areaFilters, areaFilter],
    })),
});
