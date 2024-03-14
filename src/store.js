import { create } from "zustand";

export const useToggleStore = create((set) => ({
  isEnable: false,
  toggleEnable: () => {
    set((state) => ({ isEnable: !state.isEnable }));
  },
}));

export const useSearchStore = create((set) => ({
  search: "",
  setSearch: (value) => {
    set(() => ({ search: value }));
  },
}));

export const useListStore = create((set) => ({
  list: [],
  setList: (value) => {
    set((state) => ({ list: [...state.list, value] }));
  },
  deleteLastItem: (value) => {
    set((state) => ({ list: state.list.slice(0, -1) }));
  },
}));
