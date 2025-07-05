import type { HTMLAttributes } from "react";

export interface ContactUserProps extends HTMLAttributes<HTMLDivElement> {
	name:string,
	img:string,
	alt:string,
	classname?:string,
	isActive?:boolean,
}