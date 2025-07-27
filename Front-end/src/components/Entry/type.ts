import type { Links } from "constants/links";
import type { HTMLAttributes, ReactNode } from "react";

export interface EntryProps extends HTMLAttributes<HTMLDivElement> {
    title:string,
    children:ReactNode,
}