import { create } from "zustand";
import type { storeNavInitialState, storeNavState } from "./type";

const initialState:storeNavState = {
    open:true,
}

const useNavStore = create<storeNavInitialState>()((set) => ({
    ...initialState,
    isClose: () => set({open:false}),
    isOpen:() => set({open:true}),
}));


export const useIsNavOpen = () => useNavStore((state) => state.open);
export const useOpenNavAction = () => useNavStore((state) => state.isOpen());
export const useCloseN = () => useNavStore((state) => state.isClose());