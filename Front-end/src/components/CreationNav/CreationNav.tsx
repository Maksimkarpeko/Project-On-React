import type { FC } from 'react';

import clsx from 'clsx';
import { CustomIcon } from 'components/common/CustomIcon/CustomIcon';
import { creationIcons } from 'constants/customIconArray';
import { useIsOpen, useOpenFlagAction } from 'store/useFlagCopyModal/useFlagCopyModal';

import type { creationProps } from './type';

export const CreationNav: FC<creationProps> = ({ setTab, tab }) => {
  const isOpen = useIsOpen();
  const OpenAction = useOpenFlagAction();
  const handelTab = (tab: string) => {
    setTab(tab);
  };
  return (
    <div className="md:w-[25%]  md:block border-r h-[100vh] sm:m-0 ml-[15%] ">
      <h1 className="font-bold text-3xl mt-5 ml-3">Creation</h1>
      <div className="mt-7">
        {creationIcons.map((item) => (
          <CustomIcon
            img={item.img}
            text={item.text}
            activeIcon={item.activeImg}
            classnameImg={item.classnameImg}
            classname={clsx('cursor-pointer w-full ')}
            onClick={() => {
              handelTab(item.alt);
              OpenAction();
            }}
            activeText={item.text}
            isActive={tab === item.alt && isOpen}
            activeClassName="bg-blue-500 text-white"
            key={item.alt}
          />
        ))}
      </div>
    </div>
  );
};
