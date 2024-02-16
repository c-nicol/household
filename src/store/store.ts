import { createJSONStorage, persist } from 'zustand/middleware';
import { ChoresSlice, createChoresSlice } from './choresSlice';
import { create } from 'zustand'
import { FilterSlice, createFilterSlice } from './filterSlice';

export const useStore = create<ChoresSlice & FilterSlice>((...a) => ({
  ...persist(createChoresSlice, {
    name: "chores-storage",
    storage: createJSONStorage(() => localStorage)
  })(...a),

  ...createFilterSlice(...a)
}))