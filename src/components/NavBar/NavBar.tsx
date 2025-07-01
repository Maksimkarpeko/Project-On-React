import type { FC } from 'react';

import Discover from 'assets/Discover.svg';
import DiscoverActive from 'assets/DiscoverActive.png';
import logo from 'assets/Logo.svg';
import contactActive from 'assets/contactActive.svg';
import contact from 'assets/contacts.svg';
import keyboard from 'assets/keyboard.svg';
import message from 'assets/massage.svg';
import messageActive from 'assets/messageActive.svg';
import notification from 'assets/notif.svg';
import notificationActive from 'assets/notificationActive.svg';
import setting from 'assets/setting.svg';
import settingActive from 'assets/settingsActive.svg';

import { Item } from './Item/Item';
import type { NavBarProps } from './type';

export const NavBar: FC<NavBarProps> = ({ setPage, page }) => {
  return (
    <>
      <nav className="w-[59px] h-[100vh] bg-gray-100 text-white fixed">
        <div className="pt-4 px-[14px] pb-8">
          <img src={logo} alt="Logo" />
        </div>
        <Item
          img={Discover}
          activeImg={DiscoverActive}
          alt="Discover"
          setPage={setPage}
          isActive={page == 'Discover'}
        />
        <Item
          img={contact}
          activeImg={contactActive}
          alt="Contact"
          setPage={setPage}
          isActive={page == 'Contact'}
        />
        <Item
          img={message}
          activeImg={messageActive}
          alt="Message"
          setPage={setPage}
          isActive={page == 'Message'}
        />
        <Item
          img={notification}
          alt="Notification"
          activeImg={notificationActive}
          setPage={setPage}
          isActive={page == 'Notification'}
        />
        <Item
          img={setting}
          activeImg={settingActive}
          alt="Setting"
          setPage={setPage}
          isActive={page == 'Setting'}
        />
        <Item img={keyboard} alt="Keyboard" classname="fixed top-[92%]" />
      </nav>
    </>
  );
};
