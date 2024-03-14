import { create } from "zustand";

export const useToggleStore = create((set) => ({
  isEnable: false,
  toggleEnable: () => {
    set((state) => ({ isEnable: !state.isEnable }));
  },
}));
