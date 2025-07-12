import {Bell,Link,Report,Old,TestImg,Teg,Email,Country,X,Birth} from 'assets/index'
import { Size } from 'components/common/Avatars/constants';
import { Button } from 'components/common/Button/Button';
import {  buttonSize } from 'components/common/Button/constant';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { ContainterIcon } from 'components/common/ContainerIcon/ContainerIcon';
import { useUserId } from 'store/user/useAllUsersStore';
import { getInitials } from 'utils/getInitials';
import type { FC } from 'react';
import type { ProfileProps } from './type';
import { Color } from 'constants/color';

export const Profile:FC<ProfileProps> = ({setActiveId}) => {
  const user = useUserId();
  if (!user) return null;
  return (
    <>
      <div className='text-2xl cursor-pointer w-2 ml-[65px] sm:ml-[24%]' onClick={()=> setActiveId(null)}>
        ←
      </div>
      <div className="  flex flex-col w-[77.57%] h-screen 2xl:ml-[360px] xl:ml-[360px] sm:ml-[40%] lg:ml-[300px] sm:flex-col lg:flex-row">
        <div className="h-full w-[110%] lg:w-[40%] sm:w-[100%]">
          <ContactUser
            AvatarSize={Size.xxLarge}
            disableHover={true}
            img={TestImg}
            alt="user"
            name={user.username}
            statusClass="ml-4 pt-2 "
            nameClass="text-xl ml-4 font-bold"
            classname="h-5 mt-[72px] ml-28 flex-col flex lg:ml-0 xl:ml-32 2xl:ml-28 md:ml-[-1.00rem] sm:ml-1"
            disablePointer={true}
          />
          <Button
            color={Color.blue}
            size={buttonSize.sizeLL}
            type="button"
            classname="ml-32 mt-40 lg:ml-0 xl:ml-32 2xl:ml-32 md:ml-[-1.00rem] sm:ml-1"
          >
            Send Message
          </Button>
          <ContainterIcon text="Mute notifications" img={Bell} classname="ml-32 mt-4 lg:ml-5  xl:ml-32 2xl:ml-32 md:ml-[-1.00rem] sm:ml-1" />
          <ContainterIcon text="Remove from contacts" img={Old} classname="ml-32 mt-4 lg:ml-5  xl:ml-32 2xl:ml-32 md:ml-[-1.00rem] sm:ml-1" />
          <ContainterIcon text="Copy link" img={Link} classname="ml-32 mt-4 lg:ml-5 2xl:ml-32 xl:ml-32 md:ml-[-1.00rem] sm:ml-1" />
          <ContainterIcon text="Report spam" img={Report} classname="ml-32 mt-4 lg:ml-5 2xl:ml-32 xl:ml-32 md:ml-[-1.00rem] sm:ml-1" />
        </div>
        <div className="w-[50%] lg:mt-0 ml-32 mt-40 sm:ml-0">
          <h2 className='mt-[68px] text-lg font-bold mb-3'>About</h2>
          <p className='w-[70%] text-sm text-left tracking-[0.24px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque molestias iure explicabo nemo facilis maxime reiciendis quis vitae velit saepe vero aut suscipit, adipisci perferendis doloribus ea dolor! Quasi quae reprehenderit iure velit quibusdam in officiis corporis cupiditate iste temporibus placeat id recusandae minima nobis illum culpa aliquid ducimus harum fugit, sint ad. Quae dolores debitis rem dolorum, veritatis quidem. Obcaecati quas minus aut dolorem eos esse, qui temporibus tenetur, sed animi dolor eum facilis sunt sint voluptatibus. 
            <br /> 
            <br />
            Eos sequi iusto quidem at perferendis dignissimos, quae unde totam tenetur eligendi, aut molestias illum! Delectus nesciunt doloremque incidunt similique temporibus.
          </p>
          <div className='xl:flex xl:flex-row sm:flex sm:flex-col'>
            <div>
                <ContainterIcon text={user.username} img={Teg} classname=" mt-2 mr-14" />
                <ContainterIcon text={`${user.address.country},${getInitials(user.address.country)}`} img={Country} classname=" mt-2 mr-14" />
                <ContainterIcon text="None" img={Birth} classname=" mt-2 mr-14" />
            </div>
            <div>
                <ContainterIcon text={user.email} img={Email} classname="mt-2" />
                <ContainterIcon text={user.username} img={X} classname="mt-2" />
                <ContainterIcon text="None" img={Report} classname="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
