import type { Links } from "constants/links";
import type { FormikProps } from 'formik';
import type { HTMLAttributes, ReactNode } from "react";

export interface EntryProps extends HTMLAttributes<HTMLDivElement> {
    title:string,
    children:ReactNode,
    text:string,
    navigateLink:Links
    formikEmail?:FormikProps<{email:string}>,
    formikPassword?: FormikProps<{password: string}>
}