import type { FC } from 'react';

import { Logo } from 'assets/index';
import keyboard from 'assets/menu/keyboard.svg';

import { Item } from '../common/Item/Item';
import { navItem } from './constants';
import type { NavBarProps } from './type';

export const NavBar: FC<NavBarProps> = ({ setPage, page }) => {
  return (
    <nav className="sm:w-[59px] sm:block min-h-[100vh] bg-gray-100 text-white fixed hidden">
      <div className="pt-4 px-[14px] pb-8">
        <img src={Logo} alt="Logo" />
      </div>
      {navItem.map(({ img, activeItem, alt }) => (
        <Item
          key={alt}
          img={img}
          activeImg={activeItem}
          alt={alt}
          callback={() => setPage?.(alt)}
          isActive={page === alt}
        />
      ))}
      <Item img={keyboard} alt="Keyboard"  classname="fixed top-[90%]" />
    </nav>
  );
};
