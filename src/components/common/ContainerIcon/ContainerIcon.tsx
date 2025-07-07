import type { FC } from "react"
import type { ContainerIconProps } from "./type"
import clsx from "clsx"

export const ContainterIcon:FC<ContainerIconProps> = ({img,text,classname,...rest}) => {
    return(
        <div className={clsx("w-56 flex cursor-pointer",classname)} {...rest}>
            <img src={img} alt="icon" className="py-3" />
            <span className="block ml-4 py-3 text-sm">{text}</span>
        </div>
    )
}