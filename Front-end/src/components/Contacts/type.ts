import type { ReactNode } from "react";

export interface ContactProps {
    title:string,
    selectElement:ReactNode,
    selectUser?: string | null,
    setSelectUser?: React.Dispatch<React.SetStateAction<string | null>>
}