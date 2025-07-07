import Bell from 'assets/icon/Bell.svg';
import Link from 'assets/icon/Link.svg';
import Report from 'assets/icon/Report.svg';
import old from 'assets/icon/old.svg';
import testImg from 'assets/testImg.svg';
import teg from 'assets/icon/teg.svg';
import email from 'assets/icon/mail.svg';
import country from 'assets/icon/location.svg';
import x from 'assets/icon/X.svg';
import birth from 'assets/icon/birth.svg'
import { Size } from 'components/common/Avatars/constants';
import { Button } from 'components/common/Button/Button';
import { buttonColor, buttonSize } from 'components/common/Button/constant';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { ContainterIcon } from 'components/common/ContainerIcon/ContainerIcon';
import { useUserId } from 'store/user/useAllUsersStore';
import { corectCountry } from 'utils/corectData';

export const Profile = () => {
  const user = useUserId();
  if (!user) return null;
  return (
    <>
      <div className=" flex w-[77.5%] h-screen ml-[360px]">
        <div className="h-full w-[40%]">
          <ContactUser
            AvatarSize={Size.xxLarge}
            disableHover={true}
            img={testImg}
            alt="user"
            name={user.username}
            statusClass="ml-4 pt-2 "
            nameClass="text-xl ml-4 font-bold"
            classname="h-5 mt-[72px] ml-28 flex-col flex"
            disablePointer={true}
          />
          <Button
            color={buttonColor.blue}
            size={buttonSize.sizeLL}
            type="button"
            classname="ml-32 mt-40"
          >
            Send Message
          </Button>
          <ContainterIcon text="Mute notifications" img={Bell} classname="ml-32 mt-4" />
          <ContainterIcon text="Remove from contacts" img={old} classname="ml-32 mt-4" />
          <ContainterIcon text="Copy link" img={Link} classname="ml-32 mt-4" />
          <ContainterIcon text="Report spam" img={Report} classname="ml-32 mt-4" />
        </div>
        <div className="w-[60%]">
          <h2 className='mt-[68px] text-lg font-bold mb-3'>About</h2>
          <p className='w-[504px] text-sm text-left tracking-[0.24px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque molestias iure explicabo nemo facilis maxime reiciendis quis vitae velit saepe vero aut suscipit, adipisci perferendis doloribus ea dolor! Quasi quae reprehenderit iure velit quibusdam in officiis corporis cupiditate iste temporibus placeat id recusandae minima nobis illum culpa aliquid ducimus harum fugit, sint ad. Quae dolores debitis rem dolorum, veritatis quidem. Obcaecati quas minus aut dolorem eos esse, qui temporibus tenetur, sed animi dolor eum facilis sunt sint voluptatibus. 
            <br /> 
            <br />
            Eos sequi iusto quidem at perferendis dignissimos, quae unde totam tenetur eligendi, aut molestias illum! Delectus nesciunt doloremque incidunt similique temporibus.
          </p>
          <div className='flex'>
            <div>
                <ContainterIcon text={user.username} img={teg} classname=" mt-2 mr-14" />
                <ContainterIcon text={`${user.address.country},${corectCountry(user.address.country)}`} img={country} classname=" mt-2 mr-14" />
                <ContainterIcon text="None" img={birth} classname=" mt-2 mr-14" />
            </div>
            <div>
                <ContainterIcon text={user.email} img={email} classname="mt-2" />
                <ContainterIcon text={user.username} img={x} classname="mt-2" />
                <ContainterIcon text="None" img={Report} classname="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
