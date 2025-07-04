import { useEffect } from 'react';

import search from 'assets/img/search.svg';
import testImg from 'assets/testImg.svg';
import clsx from 'clsx';
import style from 'components/Contacts/contact.module.scss';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { Input } from 'components/common/Input/Input';
import { OtherStyle, Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { fetchUser, useIsLoading, useUser } from 'store/user/useUserStore';

export const Contact = () => {
  const user = useUser();
  const isLoading = useIsLoading();
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={clsx('w-[360px] h-screen absolute border-r', style.scrollbarHidden)}>
      <div className="fixed bg-white z-10">
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
        <>
          {user.map((item) => (
            <ContactUser name={item.username} alt="User" img={testImg} key={item.id}/>
          ))}
        </>
      )}
    </div>
  );
};
