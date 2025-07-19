import type { FC } from "react"
import type { LoaderProps } from "./type"
import clsx from "clsx"

export const Loader:FC<LoaderProps> = ({classnameConteiner,classnameLoader}) => {
    return(
        <span className={clsx("absolute mt-28 flex items-center gap-2 ml-28",classnameConteiner)}>
            <span className={clsx("w-5 h-5 border-2 border-t-transparent border-gray-300 rounded-full animate-spin",classnameLoader)}></span>
        </span>
    )
}