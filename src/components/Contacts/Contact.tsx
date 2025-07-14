import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import search from 'assets/img/search.svg';
import testImg from 'assets/testImg.svg';
import clsx from 'clsx';
import style from 'components/Contacts/contact.module.scss';
import { Profile } from 'components/Profile/Profile';
import { Size } from 'components/common/Avatars/constants';
import { ContactUser } from 'components/common/ContactUser/ContactUser';
import { Input } from 'components/common/Input/Input';
import { OtherStyle, Variant } from 'components/common/Input/constant';
import { Color } from 'constants/color';
import { fetchOneUser, fetchUsers, useIsLoading, useTotal, useUsers } from 'store/user/useAllUsersStore';
import { Filter } from 'utils/filter';
import { useOpen } from 'store/navBarmenu/useOpenNav';
import ReactPaginate from 'react-paginate';
import { Virtuoso } from 'react-virtuoso'

const ITEM_PARE_PAGE = 30;

export const Contact = () => {
  const isOpen = useOpen();
  const totalPage = useTotal();
  const [searchUser, setSearchUser] = useState<string>('');
  const page = useRef(1);
  const user = useUsers();
  const isLoading = useIsLoading();
  const [activeID, setActiveID] = useState<number | null>(null);

  console.log(scroll);
  useEffect(() => {
    fetchUsers(1,ITEM_PARE_PAGE);
  }, []);
  const pageChangeHendler = ({selected}:{selected:number}) => {
    page.current = selected
    fetchUsers(selected + 1, ITEM_PARE_PAGE)
  }
  const countPage = Math.ceil((totalPage ?? 1) / ITEM_PARE_PAGE);
  return (
    <>
      <div>

      </div>
      <div className={clsx('lg:w-[23.1%] sm:min-h-full absolute border-r', activeID !== null ? 'max-[640px]:hidden':'max-[640px]:w-[100%]')}>
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
          <span className="absolute mt-28 flex items-center gap-2 ml-28">
            <span className="w-5 h-5 border-2 border-t-transparent border-gray-300 rounded-full animate-spin"></span>
          </span>
        ) : (
            <div className={clsx('sm:ml-0 mt-28 non-scrollable-wrapper flex flex-col h-[calc(100vh-112px)]', isOpen ? "ml-16":'')} >
              <div className='flex-1 overflow-hidden'>
                {
                  <Virtuoso  
                    style={{height: "calc(100vh - 112px)"}}
                    data={Filter(user,searchUser)}
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
                        setActiveID(item.id);
                        fetchOneUser(item.id);
                      }}
                      isActive={activeID === item.id}
                    />
                    )}>
                  </Virtuoso>
                }
              </div>
              <div className='mt-auto bg-white border-t border-gray-100'>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={pageChangeHendler}
                  pageRangeDisplayed={1}
                  pageCount={countPage}
                  forcePage={page.current}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  containerClassName = 'flex my-4 items-center justify-center'
                  pageClassName = 'px-1'
                  activeClassName = 'border-b border-b-black'
                />
              </div>
            </div>
        )}
      </div>
      {activeID && <Profile setActiveId={setActiveID}/>}
    </>
  );
};
