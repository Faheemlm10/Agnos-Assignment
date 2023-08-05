import { create } from "zustand";

interface StoreState {
  allOverClicked: boolean;
  setAllOverClicked: (allOverClicked: boolean) => void;
}

const store = create<StoreState>((set) => ({
  allOverClicked: false,
  setAllOverClicked: (allOverClicked: boolean) => set({ allOverClicked }),
}));

export const useStore = store;
