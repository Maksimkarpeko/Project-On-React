import type { HTMLAttributes, Ref } from "react";

export interface CustomIconProps extends HTMLAttributes<HTMLDivElement>{
    text:string,
    img:string,
    classname?:string,
    isActive?:boolean,
    activeIcon?:string,
    activeText?:string,
    ref?:Ref<HTMLSpanElement>,
    classnameImg?:string,
    activeClassName?:string,
}