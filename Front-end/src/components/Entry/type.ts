import type { HTMLAttributes, ReactNode } from 'react';

import type { Links } from 'constants/links';
import type { FormikProps } from 'formik';

export interface EntryProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
  subTitle: string;
  navigateLink: Links;
  errorApi?:boolean,
  formik?: FormikProps<{email:string,password:string, username:string}>,
  bioForm?: FormikProps<{ firstName: string; lastName: string; avatar: string| null }>;
}
