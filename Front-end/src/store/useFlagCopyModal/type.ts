export interface storeFlagState {
    isOpen:boolean,
}
interface storeFlagAction {
    isOpenFlag: () => void,
    isCloseFlag:() => void,
}

export interface storeFlagInitialState extends storeFlagAction, storeFlagState{}