import { StateCreator } from 'zustand';

export interface FilterSlice {
  durationRange: number[];
  setDurationRange: (range: number[]) => void;
  areaFilters: string[];
  toggleAreaFilter: (areaFilter: string) => void;
}

export const createFilterSlice: StateCreator<FilterSlice, [], [], FilterSlice> = (set) => ({
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
