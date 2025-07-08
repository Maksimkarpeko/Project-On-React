import type { HTMLAttributes } from "react";

export interface ContainerIconProps extends HTMLAttributes<HTMLDivElement>{
    text:string,
    img:string,
    classname?:string
}