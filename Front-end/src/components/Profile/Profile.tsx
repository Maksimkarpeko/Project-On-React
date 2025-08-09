import { type FC, useRef, useState } from 'react';

import { Back, TestImg } from 'assets/index';
import { Size } from 'components/common/Avatars/constants';
import { Button } from 'components/common/Button/Button';
import { buttonSize } from 'components/common/Button/constant';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { CustomIcon } from 'components/common/CustomIcon/CustomIcon';
import { Modal } from 'components/common/Modal/Modal';
import { Color } from 'constants/color';
import { actionsBlock, contactBlock, profileBlock } from 'constants/customIconArray';
import { getSelectedUser } from 'store/user/useUserStore';

import type { ProfileProps } from './type';

export const Profile: FC<ProfileProps> = ({ setActive }) => {
  const user = getSelectedUser();
  const [activeIconIds, setActiveIconIds] = useState<number[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);
  const CopyText = async (text: string) => {
    if (!ref.current) {
      console.error('Nothing!!');
    }
    try {
      await navigator.clipboard.writeText(text);
      setIsOpenModal(true);
      setTimeout(() => {
        setIsOpenModal(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  if (!user) return null;
  const handelActive = (index: number) => {
    setActiveIconIds((prev) =>
      prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index],
    );
  };

  const ProfileBlock = profileBlock(user);
  const ContactBlock = contactBlock(user);
  return (
    <>
      <div
        className="text-2xl cursor-pointer w-2 ml-[65px]  lg:ml-[25%]"
        onClick={() => setActive(null)}
      >
        <img src={Back} alt="Back" style={{ width: '24px', height: '24px', maxWidth: '24px' }} />
      </div>
      <div className="xl:fixed flex flex-col w-[77.57%] h-screen 2xl:ml-[360px] xl:ml-[360px] sm:ml-[20%] lg:ml-[300px] sm:flex-col lg:flex-row">
        <div className="h-full w-[100%] lg:w-[40%] sm:w-[100%]">
          <ContactUser
            AvatarSize={Size.xxLarge}
            disableHover={true}
            img={TestImg}
            alt="user"
            name={user.username}
            statusClass="ml-4 pt-2 "
            nameClass="text-xl ml-4 font-bold"
            classname="h-5 mt-[60px] ml-20 flex-col flex lg:ml-0 xl:ml-28 2xl:ml-28 sm:ml-1"
            disablePointer={true}
            isOnlineUser
          />
          <Button
            color={Color.blue}
            size={buttonSize.sizeLL}
            type="button"
            classname="ml-24 mt-40 lg:ml-0 xl:ml-32 2xl:ml-32 sm:ml-1"
          >
            Send Message
          </Button>
          {actionsBlock.map((Item, index) => (
            <CustomIcon
              key={Item.text}
              text={Item.text}
              classname={Item.classname}
              img={Item.img}
              onClick={() => handelActive(index)}
              isActive={activeIconIds.includes(index)}
              activeIcon={Item.activeIcon ? Item.activeIcon : Item.img}
              activeText={Item.activeText ? Item.activeText : Item.text}
            />
          ))}
        </div>
        <div className="w-[100%] lg:w-[50%] lg:mt-8 ml-24 sm:ml-0">
          <h2 className="mt-[32px] text-lg font-bold mb-3">About</h2>
          <p className="sm:w-[85%] w-[90%] text-sm text-left tracking-[0.24px] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque
            molestias iure explicabo nemo facilis maxime reiciendis quis vitae velit saepe vero aut
            suscipit, adipisci perferendis doloribus ea dolor! Quasi quae reprehenderit iure velit
            quibusdam in officiis corporis cupiditate iste temporibus placeat id recusandae minima
            nobis illum culpa aliquid ducimus harum fugit, sint ad. Quae dolores debitis rem
            dolorum, veritatis quidem. Obcaecati quas minus aut dolorem eos esse, qui temporibus
            tenetur, sed animi dolor eum facilis sunt sint voluptatibus.
            <br />
            <br />
            Eos sequi iusto quidem at perferendis dignissimos, quae unde totam tenetur eligendi, aut
            molestias illum! Delectus nesciunt doloremque incidunt similique temporibus.
          </p>
          <div className="xl:flex xl:flex-row sm:flex sm:flex-col">
            <div>
              {ProfileBlock.map((item) => (
                <CustomIcon
                  key={item.text}
                  text={item.text}
                  classname={item.classname}
                  img={item.img}
                  ref={ref}
                  onClick={() => CopyText(item.text)}
                />
              ))}
            </div>
            <div>
              {ContactBlock.map((item) => (
                <CustomIcon
                  key={item.text}
                  text={item.text}
                  classname={item.classname}
                  img={item.img}
                  ref={ref}
                  onClick={() => CopyText(item.text)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpenModal && <Modal>The text is copied</Modal>}
    </>
  );
};
