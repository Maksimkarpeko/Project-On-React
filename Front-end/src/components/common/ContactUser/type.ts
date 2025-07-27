import type { HTMLAttributes } from "react";
import type { Size } from "../Avatars/constants";

export interface ContactUserProps extends HTMLAttributes<HTMLDivElement> {
	name:string,
	img:string,
	alt:string,
	classname?:string,
	isActive?:boolean,
	AvatarSize:Size,
	disableHover:boolean,
	nameClass?:string,
	statusClass?:string,
	disablePointer?:boolean
}