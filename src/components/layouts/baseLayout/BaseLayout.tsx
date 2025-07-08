import type { FC } from 'react';

import clsx from 'clsx';
import { NavBar } from 'components/NavBar/NavBar';

import type { LayoutProps } from './type';

export const BaseLayout: FC<LayoutProps> = ({ children, setPage, page, classname }) => {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <header className='hidden sm:block fixed top-0 left-0 z-10'>
        <NavBar setPage={setPage} page={page} />
      </header>
      <main className={clsx('w-full sm:ml-[59px] min-h-screen   overflow-auto',
          classname)}>{children}</main>
    </div>
  );
};
