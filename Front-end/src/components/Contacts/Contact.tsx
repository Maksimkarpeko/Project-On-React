import { type FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

import search from 'assets/img/search.svg';
import testImg from 'assets/testImg.svg';
import clsx from 'clsx';
import { Size } from 'components/common/Avatars/constants';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { Input } from 'components/common/Input/Input';
import { OtherStyle, Variant } from 'components/common/Input/constant';
import { Loader } from 'components/common/Loader/Loader';
import { Color } from 'constants/color';
import { useIsOpen } from 'store/useFlagCopyModal/useFlagCopyModal';
import {
  getAllUsers,
  getOneUser,
  useUserLoading,
  useUserTotal,
  useUsers,
} from 'store/user/useUserStore';
import { Filter } from 'utils/filter';

import type { ContactProps } from './type';

const USERS_FETCH_LIMIT = 30;
export const Contact: FC<ContactProps> = ({ title, selectElement, selectUser, setSelectUser }) => {
  const [page, setPage] = useState(2);
  const isOpen = useIsOpen();
  const total = useUserTotal();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');
  const users = useUsers();
  const isLoading = useUserLoading();
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredUsers = useMemo(
    () => Filter(users, debouncedSearchQuery),
    [users, debouncedSearchQuery],
  );

  useEffect(() => {
    getAllUsers(USERS_FETCH_LIMIT, page);
  }, [page]);

  const handleLoadMore = useCallback(() => {
    if (isLoading || (total !== null && users.length >= total)) return;
    setPage((prev) => prev + 1);
  }, [isLoading, total, users.length]);

  const handleUserClick = useCallback((userName: string) => {
    setSelectUser?.(userName);
    getOneUser(userName);
  }, []);

  return (
    <>
      <div
        className={clsx(
          'lg:w-[23.1%] sm:min-h-full absolute lg:border-r z-50',
          selectUser !== null ? '' : 'w-screen border-r',
        )}
      >
        <div
          className={clsx(
            'sm:ml-0 lg:w-[23%] 2xl:w-[22%] xl:w-[22%] fixed bg-white overflow-hidden sm:w-screen lg:block',
            isOpen ? 'ml-16' : '',
            selectUser !== null ? 'hidden' : 'block',
          )}
        >
          <h2 className="my-3 ml-4 text-2xl font-bold">{title}</h2>
          <img src={search} alt="search" className="absolute z-10 top-[66px] left-7  " />
          <Input
            classname="mx-4 mb-4"
            inputStyle="w-[100%]"
            name="text"
            type="text"
            variant={Variant.text}
            otherStyle={OtherStyle.search}
            placeholder="Search"
            inputColor={Color.gray}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div
          className={clsx(
            'sm:ml-0 mt-28 non-scrollable-wrapper flex flex-col h-[calc(100vh-112px)] lg:w-full',
            isOpen ? 'ml-16' : '',
            selectUser !== null ? '' : 'sm:w-full',
          )}
        >
          <Virtuoso
            style={{ height: 'calc(100vh - 112px)' }}
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
                onClick={() => handleUserClick(item.username)}
                isActive={selectUser === item.username}
                isOnlineUser
              />
            )}
            endReached={handleLoadMore}
            components={{
              Footer: () => (isLoading ? <Loader /> : null),
            }}
          />
        </div>
      </div>
      {selectUser && selectElement}
    </>
  );
};
