import Bell from 'assets/icon/Bell.svg';
import Link from 'assets/icon/Link.svg';
import Report from 'assets/icon/Report.svg';
import old from 'assets/icon/old.svg';
import testImg from 'assets/testImg.svg';
import { Size } from 'components/common/Avatars/constants';
import { Button } from 'components/common/Button/Button';
import { buttonColor, buttonSize } from 'components/common/Button/constant';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { ContainterIcon } from 'components/common/ContainerIcon/ContainerIcon';
import { useUserId } from 'store/user/useAllUsersStore';

export const Profile = () => {
  const user = useUserId();
  if (!user) return null;
  return (
    <>
      <div className="fixed flex w-[77.5%] h-screen ml-[360px]">
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
          <h2>About</h2>
          <p></p>
        </div>
      </div>
    </>
  );
};
