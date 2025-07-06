import { useEffect, useState } from 'react';

import search from 'assets/img/search.svg';
import testImg from 'assets/testImg.svg';
import clsx from 'clsx';
import style from 'components/Contacts/contact.module.scss';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { Input } from 'components/common/Input/Input';
import { OtherStyle, Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { fetchUsers, useIsLoading, useUsers,fetchOneUser } from 'store/user/useAllUsersStore';
import { Profile } from 'components/Profile/Profile';
import { Size } from 'components/common/Avatars/constants';


export const Contact = () => {
  const user = useUsers();
  const isLoading = useIsLoading();
  const [activeID, setActiveID] = useState<number|null>(null);
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className={clsx('w-[360px] min-h-full absolute border-r', style.scrollbarHidden)}>
        <div className="w-[359px] fixed bg-white z-10">
          <h2 className="my-3 ml-4 text-2xl font-bold">Contacts</h2>
          <img src={search} alt="search" className="absolute z-10 top-[66px] left-7" />
          <Input
            classname="mx-4 mb-4"
            name="text"
            type="text"
            variant={Variant.text}
            otherStyle={OtherStyle.search}
            placeholder="Search"
            inputColor={Color.gray}
          />
        </div>

        {isLoading ? (
          <span className="absolute mt-28">Loading...</span>
        ) : (
          <div className='mt-28'>
            {user.map((item) => (
              <ContactUser name={item.username} statusClass='ml-[72px]' nameClass='ml-[72px]' AvatarSize={Size.Medium} disableHover={false} alt="User" img={testImg} key={item.id} onClick={()=>{
                setActiveID(item.id)
                fetchOneUser(item.id)
              }} isActive={activeID === item.id}/>
            ))}
          </div>
        )}
      </div>
      {activeID && <Profile/>}
    </>
    
  );
};
