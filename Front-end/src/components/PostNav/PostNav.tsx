import { useState } from 'react';

import { ChatPosts } from 'components/ChatPosts/ChatPosts';
import { Contact } from 'components/Contacts/Contact';

export const PostNav = () => {
  const [selectUser, setSelectUser] = useState<string | null>('');
  return (
    <div className='overflow-hidden'>
      <Contact
        title="Posts"
        selectElement={
          <ChatPosts
            selectUser={selectUser}
          />
        }
        selectUser={selectUser}
        setSelectUser={setSelectUser}
      />
    </div>
  );
};
