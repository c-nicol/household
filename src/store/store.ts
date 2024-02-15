import { createJSONStorage, persist } from 'zustand/middleware';
import { ChoresSlice, createChoresSlice } from './choresSlice';
import { create } from 'zustand'

export const useStore = create<ChoresSlice>((...a) => ({
  ...persist(createChoresSlice, {
    name: "chores-storage",
    storage: createJSONStorage(() => localStorage)
  })(...a)
}))