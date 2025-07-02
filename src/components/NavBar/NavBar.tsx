import type { FC } from 'react';

import logo from 'assets/img/Logo.svg';
import keyboard from 'assets/menu/keyboard.svg';

import { Item } from './Item/Item';
import { navItem } from './constants';
import type { NavBarProps } from './type';

export const NavBar: FC<NavBarProps> = ({ setPage, page }) => {
  return (
    <nav className="w-[59px] h-[100vh] bg-gray-100 text-white fixed">
      <div className="pt-4 px-[14px] pb-8">
        <img src={logo} alt="Logo" />
      </div>
      {navItem.map(({ img, activeItem, alt }) => (
        <Item
          key={alt + 1}
          img={img}
          activeImg={activeItem}
          alt={alt}
          setPage={setPage}
          isActive={page === alt}
        />
      ))}
      <Item img={keyboard} alt="Keyboard" classname="fixed top-[92%]" />
    </nav>
  );
};
