import type { FC } from "react"
import type { CustomIconProps } from "./type"
import clsx from "clsx"

export const CustomIcon:FC<CustomIconProps> = ({img,text,classname,classnameImg,isActive,activeText,activeIcon,activeClassName,ref,...rest}) => {
    const icon = isActive ? activeIcon : img;
    const customText = isActive ? activeText : text;
    const ActiveClass = isActive ? activeClassName :"";
    return(
        <div className={clsx("w-[80%] flex",ActiveClass,classname)} {...rest}>
            <img src={icon} alt="icon" className={clsx("py-3",classnameImg)} />
            <span className="block ml-4 py-3 text-sm" ref={ref} >{customText}</span>
        </div>
    )
}