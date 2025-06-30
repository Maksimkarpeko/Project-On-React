import type { FC } from 'react';

import { NavBar } from 'components/NavBar/NavBar';

import type { LayoutProps } from './type';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <header>
        <NavBar />
      </header>
      <main className="h-[100vh] w-[100vw] bg-blue-700 text-white">
        main
        {children}
      </main>
    </div>
  );
};
