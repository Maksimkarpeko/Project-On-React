import { create } from 'zustand';

import type { storeFlagInitialState, storeFlagState } from './type';

const initialState: storeFlagState = {
  isOpen: true,
};

const useFlagStore = create<storeFlagInitialState>()((set) => ({
  ...initialState,
  isCloseFlag: () => set({ isOpen: false }),
  isOpenFlag: () => set({ isOpen: true }),
}));

export const useIsOpen = () => useFlagStore((state) => state.isOpen);
export const useOpenFlagAction = () => useFlagStore((state) => state.isOpenFlag);
export const useCloseFlagAction = () => useFlagStore((state) => state.isCloseFlag);
