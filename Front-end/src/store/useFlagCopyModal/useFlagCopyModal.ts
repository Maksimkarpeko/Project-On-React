import { create } from 'zustand';

import type { storeFlagInitialState, storeFlagState } from './type';

const initialState: storeFlagState = {
  isOpen: true,
};

const useFlagCopyModal = create<storeFlagInitialState>()((set) => ({
  ...initialState,
  isCloseFlag: () => set({ isOpen: false }),
  isOpenFlag: () => set({ isOpen: true }),
}));

export const useIsOpen = () => useFlagCopyModal((state) => state.isOpen);
export const useOpenFlagAction = () => useFlagCopyModal((state) => state.isOpenFlag);
export const useCloseFlagAction = () => useFlagCopyModal((state) => state.isCloseFlag);
