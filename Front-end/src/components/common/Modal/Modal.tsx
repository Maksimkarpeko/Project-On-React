import type { FC } from "react"
import type { ModalWindowProps } from "./type"

export const Modal:FC<ModalWindowProps> = ({children,...rest}) =>{
    return(
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 bg-slate-500 rounded text-white text-center " {...rest}>
            {children}
        </div>
    )
}