import { create } from "zustand";
import type { storeNavInitialState, storeNavState } from "./type";

const initialState:storeNavState = {
    isOpen:true,
}

const useNavStore = create<storeNavInitialState>()((set) => ({
    ...initialState,
    isCloseNav: () => set({isOpen:false}),
    isOpenNav:() => set({isOpen:true}),
}));


export const useIsOpen = () => useNavStore((state) => state.isOpen);
export const useOpenNavAction = () => useNavStore((state) => state.isOpenNav());
export const useCloseNavAction = () => useNavStore((state) => state.isCloseNav());