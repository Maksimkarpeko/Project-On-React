import type { FC } from "react"
import type { CustomIconProps } from "./type"
import clsx from "clsx"

export const CustomIcon:FC<CustomIconProps> = ({img,text,classname,isActive,activeText,activeIcon,ref,...rest}) => {
    const icon = isActive ? activeIcon : img;
    const customText = isActive ? activeText : text;
    return(
        <div className={clsx("w-[80%] flex cursor-pointer",classname)} {...rest}>
            <img src={icon} alt="icon" className="py-3" />
            <span className="block ml-4 py-3 text-sm" ref={ref} >{customText}</span>
        </div>
    )
}