import { type FC } from 'react';

import clsx from 'clsx';
import { NavBar } from 'components/NavBar/NavBar';
import { useIsOpen } from 'store/useNavStore/useNavStore';

import type { LayoutProps } from './type';

export const BaseLayout: FC<LayoutProps> = ({ children, setPage, page, classname }) => {
  const isOpen = useIsOpen();
  return (
    <div className="flex min-h-screen w-full bg-white">
      <header className={clsx('sm:block fixed top-0 left-0 z-10', isOpen ? '' : 'hidden')}>
        <NavBar setPage={setPage} page={page} />
      </header>
      <main className={clsx('w-full  sm:ml-[59px] h-[100vh] overflow-x-hidden', classname)}>
        {children}
      </main>
    </div>
  );
};
