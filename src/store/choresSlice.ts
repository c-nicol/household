import { StateCreator } from "zustand"

type Chore = {
    id: string
    title: string
    area: string
    duration: number
}

export interface ChoresSlice {
    chores: Chore[]
    addChore: (chore: Chore) => void
    removeChore: (choreId: string) => void
}

export const createChoresSlice: StateCreator<ChoresSlice, [], [], ChoresSlice> = (set) => ({
    chores: [],
    addChore: (chore) => set((state) => ({ chores: [...state.chores, chore] })),
    removeChore: (choreId) => set((state) => ({ chores: state.chores.filter((chore) => chore.id !== choreId) })),
  })