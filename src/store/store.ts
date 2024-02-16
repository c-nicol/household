import { createJSONStorage, persist } from 'zustand/middleware';
import { ChoresSlice, createChoresSlice } from './chores-slice';
import { create } from 'zustand'
import { FilterSlice, createFilterSlice } from './filter-slice';

export const useStore = create<ChoresSlice & FilterSlice>((...a) => ({
  ...persist(createChoresSlice, {
    name: "chores-storage",
    storage: createJSONStorage(() => localStorage)
  })(...a),

  ...createFilterSlice(...a)
}))