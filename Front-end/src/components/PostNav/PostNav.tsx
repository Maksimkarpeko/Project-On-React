import { useState } from 'react';

import { PostsList } from 'components/PostsList/PostsList';
import { Contact } from 'components/Contacts/Contact';

export const PostNav = () => {
  const [selectUser, setSelectUser] = useState<string | null>('');
  return (
    <div className='overflow-hidden'>
      <Contact
        title="Posts"
        selectElement={
          <PostsList
            selectUser={selectUser}
          />
        }
        selectUser={selectUser}
        setSelectUser={setSelectUser}
      />
    </div>
  );
};
