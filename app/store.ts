import { create } from "zustand";

interface StoreState {
  allOverClicked: boolean;
  setAllOverClicked: (allOverClicked: boolean) => void;
  isDipHovered: boolean;
  setDipHovered: (isDipHovered: boolean) => void;
  isDipClicked: boolean;
  setIsDipClicked: (isDipClicked: boolean) => void;
  isMcpHovered: boolean;
  setIsMcpHovered: (isMcpHovered: boolean) => void;
  isMcpClicked: boolean;
  setIsMcpClicked: (isMcpClicked: boolean) => void;
  isPipHovered: boolean;
  setIsPipHovered: (isPipHovered: boolean) => void;
  isPipClicked: boolean;
  setIsPipClicked: (isPipClicked: boolean) => void;
  fingerHurtsEverywhere: boolean;
  setFingerHurtsEverywhere: (fingerHurtsEverywhere: boolean) => void;
}

const store = create<StoreState>((set) => ({
  allOverClicked: false,
  setAllOverClicked: (allOverClicked: boolean) => set({ allOverClicked }),
  isDipHovered: false,
  setDipHovered: (isDipHovered: boolean) => set({ isDipHovered }),
  isDipClicked: false,
  setIsDipClicked: (isDipClicked: boolean) => set({ isDipClicked }),
  isMcpHovered: false,
  setIsMcpHovered: (isMcpHovered: boolean) => set({ isMcpHovered }),
  isMcpClicked: false,
  setIsMcpClicked: (isMcpClicked: boolean) => set({ isMcpClicked }),
  isPipHovered: false,
  setIsPipHovered: (isPipHovered: boolean) => set({ isPipHovered }),
  isPipClicked: false,
  setIsPipClicked: (isPipClicked: boolean) => set({ isPipClicked }),
  fingerHurtsEverywhere: false,
  setFingerHurtsEverywhere: (fingerHurtsEverywhere: boolean) =>
    set({ fingerHurtsEverywhere }),
}));

export const useStore = store;
