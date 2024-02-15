import { ChoresSlice, createChoresSlice } from './choresSlice';
import { create } from 'zustand'

export const useStore = create<ChoresSlice>((...a) => ({
  ...createChoresSlice(...a)
}))