import type { HTMLAttributes } from "react";
import type { Size } from "../Avatars/constants";

export interface ContactUserProps extends HTMLAttributes<HTMLDivElement> {
	name?:string,
	img:string,
	alt:string,
	isOnlineUser?:boolean,
	classname?:string,
	isActive?:boolean,
	AvatarSize:Size,
	disableHover:boolean,
	nameClass?:string,
	statusClass?:string,
	phoneText?:string,
	disablePointer?:boolean,
}