import { useEffect, useMemo, useState, useCallback } from 'react';

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

const USERS_FETCH_LIMIT = 30;
export const Contact = () => {
  const [page, setPage] = useState(1);
  const isOpen = useIsNavOpen();
  const total = useUserTotal();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');
  const users = useUsers();
  const isLoading = useUserLoading();
  const [selectUserId, setSelectUserId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredUsers = useMemo(() => Filter(users, debouncedSearchQuery), [users, debouncedSearchQuery]);
  
  useEffect(() => {
    fetchUsers(USERS_FETCH_LIMIT,page);
  }, [page]);

  const handleLoadMore = useCallback(() => {
    if (isLoading || total !== null && users.length >= total) return;
    setPage((prev) => prev + 1);
  }, [isLoading, total, users.length]);

  const handleUserClick = useCallback((userId: number) => {
    setSelectUserId(userId);
    fetchOneUser(userId);
  }, []);

  return (
    <>
      <div className={clsx('lg:w-[23.1%] sm:min-h-full absolute border-r ', selectUserId !== null ? 'max-[640px]:hidden':'max-[640px]:w-[100%]')}>
        <div
          className={clsx(
            'sm:ml-0 lg:w-[23%] 2xl:w-[22%] xl:w-[22%] fixed bg-white z-10 overflow-hidden sm:w-screen lg:block sm:hidden',
            isOpen ? 'ml-16' : '',
            selectUserId !== null ? 'max-[640px]:hidden' : 'max-[640px]:block'
          )}
        >
          <h2 className="my-3 ml-4 text-2xl font-bold">Contacts</h2>
          <img src={search} alt="search" className="absolute z-10 top-[66px] left-7  " />
          <Input
            classname="mx-4 mb-4 "
            inputStyle=''
            name="text"
            type="text"
            variant={Variant.text}
            otherStyle={OtherStyle.search}
            placeholder="Search"
            inputColor={Color.gray}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={clsx('sm:ml-0 mt-28 non-scrollable-wrapper flex flex-col h-[calc(100vh-112px)]', isOpen ? "ml-16":'')} >
          <div className='flex-1 overflow-hidden'>
            <Virtuoso  
              key="contacts-virtuoso"
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
                  onClick={() => handleUserClick(item.id)}
                  isActive={selectUserId === item.id}
                />
              )}
              endReached={handleLoadMore}
              components={{
                Footer: () => isLoading ? <Loader /> : null
              }}
            />
          </div>
        </div>
      </div>
      {selectUserId && <Profile setActiveId={setSelectUserId}/>}
    </>
  );
};
