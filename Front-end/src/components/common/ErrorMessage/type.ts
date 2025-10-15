import type { HTMLAttributes } from "react";

export interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
    errorMessage?:string | Error,
}