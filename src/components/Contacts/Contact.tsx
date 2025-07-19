import { useEffect, useMemo, useState } from 'react';

import search from 'assets/img/search.svg';
import testImg from 'assets/testImg.svg';
import clsx from 'clsx';

import { Profile } from 'components/Profile/Profile';
import { Size } from 'components/common/Avatars/constants';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { Input } from 'components/common/Input/Input';
import { OtherStyle, Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { fetchOneUser, fetchUsers, useUserLoading, useUserTotal, useUsers } from 'store/user/useUserStore';
import { Filter } from 'utils/filter';
import { useIsNavOpen } from 'store/useOpenNav/useNavStore';
import { Virtuoso } from 'react-virtuoso'
import { Loader } from 'components/common/Loader/Loader';

const limit = 30;
export const Contact = () => {
  const [page, setPage] = useState(1);
  const isOpen = useIsNavOpen();
  const total = useUserTotal();
  const [searchUser, setSearchUser] = useState<string>('');
  const user = useUsers();
  const isLoading = useUserLoading();
  const [activeId, setActiveId] = useState<number | null>(null);


  const filteredUsers = useMemo(() => Filter(user, searchUser), [user, searchUser])
  useEffect(() => {
    fetchUsers(limit,page);
  }, [page]);

  const handleLoadMore = () => {
    if (isLoading || total !== null && user.length >= total) return;
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div className={clsx('lg:w-[23.1%] sm:min-h-full absolute border-r', activeId !== null ? 'max-[640px]:hidden':'max-[640px]:w-[100%]')}>
        <div className={clsx("sm:ml-0 sm:w-[23%] 2xl:w-[22%] xl:w-[22%] fixed bg-white z-10 ",isOpen ? "ml-16":'',)}>
          <h2 className="my-3 ml-4 text-2xl font-bold">Contacts</h2>
          <img src={search} alt="search" className="absolute z-10 top-[66px] left-7  " />
          <Input
            classname="mx-4 mb-4 "
            inputStyle='xl:w-[100%] 2xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] max-[640px]:w-[175%]  '
            name="text"
            type="text"
            variant={Variant.text}
            otherStyle={OtherStyle.search}
            placeholder="Search"
            inputColor={Color.gray}
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </div>

        {isLoading ? (
          <Loader/>
        ) : (
            <div className={clsx('sm:ml-0 mt-28 non-scrollable-wrapper flex flex-col h-[calc(100vh-112px)]', isOpen ? "ml-16":'')} >
              <div className='flex-1 overflow-hidden'>
                {
                  <Virtuoso  
                    style={{height: "calc(100vh - 112px)"}}
                    data={filteredUsers}
                    itemContent={(__, item) => (
                    <ContactUser
                      name={item.username}
                      statusClass="ml-4"
                      nameClass="ml-4"
                      AvatarSize={Size.Medium}
                      disableHover={false}
                      alt="User"
                      img={testImg}
                      key={item.id}
                      onClick={() => {
                        setActiveId(item.id);
                        fetchOneUser(item.id);
                      }}
                      isActive={activeId === item.id}
                    />
                    
                    )}
                    endReached={handleLoadMore}/>
                }
              </div>
            </div>
        )}
      </div>
      {activeId && <Profile setActiveId={setActiveId}/>}
    </>
  );
};
