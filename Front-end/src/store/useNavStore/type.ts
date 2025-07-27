export interface storeNavState {
    isOpen:boolean,
}
interface storeNavAction {
    isOpenNav: () => void,
    isCloseNav:() => void,
}

export interface storeNavInitialState extends storeNavAction, storeNavState{}