import type { HTMLAttributes } from "react";

export interface CustomIconProps extends HTMLAttributes<HTMLDivElement>{
    text:string,
    img:string,
    classname?:string
}