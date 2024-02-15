import { StateCreator } from "zustand"

type Chore = {
    title: string
    area: string
    duration: number
}

export interface ChoresSlice {
    chores: Chore[]
    addChore: (chore: Chore) => void
}

export const createChoresSlice: StateCreator<ChoresSlice, [], [], ChoresSlice> = (set) => ({
    chores: [],
    addChore: (chore) => set((state) => ({ chores: [...state.chores, chore] })),
  })