import type { FC } from 'react';

import { NavBar } from 'components/NavBar/NavBar';

import type { LayoutProps } from './type';
import clsx from 'clsx';

export const Layout: FC<LayoutProps> = ({ children, setPage, page,classname }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <header>
        <NavBar setPage={setPage} page={page} />
      </header>
      <main className={clsx('h-[100vh] w-[100vw] ml-16',classname)}>{children}</main>
    </div>
  );
};
