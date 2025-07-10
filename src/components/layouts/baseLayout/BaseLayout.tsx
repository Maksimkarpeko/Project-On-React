import { useState, type FC } from 'react';

import clsx from 'clsx';
import { NavBar } from 'components/NavBar/NavBar';

import type { LayoutProps } from './type';
import { useOpen } from 'store/navBarmenu/useOpenNav';

export const BaseLayout: FC<LayoutProps> = ({ children, setPage, page, classname }) => {
  const isOpen = useOpen();
  return (
    <div className="flex min-h-screen w-full bg-white">
      <header className={clsx('sm:block fixed top-0 left-0 z-10', isOpen ? "" :"hidden")}>
        <NavBar setPage={setPage} page={page}  />
      </header>
      <main className={clsx('w-full sm:ml-[59px] min-h-screen   overflow-auto',
          classname)}>{children}</main>
    </div>
  );
};
