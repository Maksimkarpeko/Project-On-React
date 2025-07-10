import { create } from "zustand";
import type { storeNavInitialState, storeNavState } from "./type";

const initialState:storeNavState = {
    open:true,
}

const useOpenNav = create<storeNavInitialState>()((set) => ({
    ...initialState,
    isClose: () => set({open:false}),
    isOpen:() => set({open:true}),
}));


export const useOpen = () => useOpenNav((state) => state.open);
export const useIsOpen = () => useOpenNav((state) => state.isOpen());
export const useIsClose = () => useOpenNav((state) => state.isClose());