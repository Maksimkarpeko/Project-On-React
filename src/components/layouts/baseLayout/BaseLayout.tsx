import type { FC } from 'react';

import clsx from 'clsx';
import { NavBar } from 'components/NavBar/NavBar';

import type { LayoutProps } from './type';

export const BaseLayout: FC<LayoutProps> = ({ children, setPage, page, classname }) => {
  return (
    <div className="w-[99vw] h-[100vh] flex">
      <header>
        <NavBar setPage={setPage} page={page} />
      </header>
      <main className={clsx('h-[100vh] w-[100vw] ml-16', classname)}>{children}</main>
    </div>
  );
};
