import { ChatPosts } from 'components/ChatPosts/ChatPosts';
import { Contact } from 'components/Contacts/Contact';
import { useState } from 'react';

export const PostNav = () => {
  const [selectUser, setSelectUser] = useState<string|null>('');
  return (
    <div className="flex">
      <Contact title="Posts" selectElement={<ChatPosts selectUser={selectUser}/>} selectUser={selectUser} setSelectUser={setSelectUser} />
    </div>
  );
};
