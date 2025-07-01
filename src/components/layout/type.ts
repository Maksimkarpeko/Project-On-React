import type { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
  setPage?: (type:string) => void;
	page:string,
  classname?:string,
}
