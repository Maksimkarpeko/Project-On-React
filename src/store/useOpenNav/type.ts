export interface storeNavState {
    open:boolean,
}
interface storeNavAction {
    isOpen: () => void,
    isClose:() => void,
}

export interface storeNavInitialState extends storeNavAction, storeNavState{}