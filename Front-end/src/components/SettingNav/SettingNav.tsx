import { type FC, useEffect } from 'react';

import { TestImg } from 'assets/index';
import { SingOut } from 'assets/index';
import clsx from 'clsx';
import { Size } from 'components/common/Avatars/constants';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { CustomIcon } from 'components/common/CustomIcon/CustomIcon';
import {
  billingBlock,
  openlangBlock,
  preferencesBlock,
  settingBlock,
} from 'constants/customIconArray';
import { useCloseFlagAction, useIsOpen, useOpenFlagAction } from 'store/useFlagStore/useFlagStore';
import { useSelectedUser } from 'store/user/useUserStore';

import type { SettingNavProps } from './type';

export const SettingNav: FC<SettingNavProps> = ({ setTab, tab }) => {
  const isOpen = useIsOpen();
  const OpenAction = useOpenFlagAction();
  const CloseAction = useCloseFlagAction();
  const AuthUser = useSelectedUser();
  useEffect(() => {
    CloseAction();
  }, []);
  const handelTab = (tab: string) => {
    setTab(tab);
  };
  const singOut = () => {};
  return (
    <div className={clsx('md:w-[25%] md:block border-r h-[98vh]', isOpen ? 'hidden' : 'w-[100%]')}>
      <h1 className="text-2xl font-bold ml-4 mt-3">Setting</h1>
      <div>
        <ContactUser
          disableHover
          AvatarSize={Size.Large}
          alt="test"
          img={TestImg}
          name={AuthUser?.username}
          phoneText="+35785456"
          nameClass="mt-3 pl-4"
          statusClass="pl-4"
          classname="ml-[10px]"
        />
      </div>
      <div className="mt-4">
        {settingBlock.map((item) => (
          <CustomIcon
            img={item.img}
            text={item.text}
            activeIcon={item.activeImg}
            classnameImg={item.classnameImg}
            classname={clsx('cursor-pointer w-full ')}
            onClick={() => {
              handelTab?.(item.alt);
              OpenAction();
            }}
            activeText={item.text}
            isActive={tab === item.alt}
            activeClassName="bg-blue-500 text-white"
            key={item.alt}
          />
        ))}
        <h2 className="text-lg font-bold ml-4 mt-4">Preferences</h2>
        {preferencesBlock.map((item) => (
          <CustomIcon
            img={item.img}
            text={item.text}
            activeIcon={item.activeImg}
            classnameImg={item.classnameImg}
            classname="cursor-pointer w-full"
            onClick={() => handelTab?.(item.alt)}
            isActive={tab === item.alt}
            activeText={item.text}
            activeClassName="bg-blue-500 text-white"
            key={item.alt}
          />
        ))}
        <h2 className="text-lg font-bold ml-4 mt-4">Billing</h2>
        {billingBlock.map((item) => (
          <CustomIcon
            img={item.img}
            text={item.text}
            activeIcon={item.activeImg}
            classnameImg={item.classnameImg}
            classname="cursor-pointer w-full"
            isActive={tab === item.alt}
            activeText={item.text}
            activeClassName="bg-blue-500 text-white"
            onClick={() => handelTab?.(item.alt)}
            key={item.alt}
          />
        ))}
        <h2 className="text-lg font-bold ml-4 mt-4">Openlande</h2>
        {openlangBlock.map((item) => (
          <CustomIcon
            img={item.img}
            text={item.text}
            activeIcon={item.activeImg}
            classnameImg={item.classnameImg}
            classname="cursor-pointer w-full"
            isActive={tab === item.alt}
            activeText={item.text}
            activeClassName="bg-blue-500 text-white"
            onClick={() => handelTab?.(item.alt)}
            key={item.alt}
          />
        ))}
        <h2 className="text-lg font-bold ml-4 mt-4">Other</h2>
        <CustomIcon
          img={SingOut}
          text={'sing out'}
          activeIcon={SingOut}
          classnameImg="pl-4"
          classname="cursor-pointer w-full"
          onClick={() => {
            console.log('#');
          }}
        />
      </div>
    </div>
  );
};
