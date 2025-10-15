import { ChatPosts } from 'components/ChatPosts/ChatPosts';
import { Contact } from 'components/Contacts/Contact';
import { useState } from 'react';

export const ChatsNav = () => {
  const [selectUser, setSelectUser] = useState<string|null>('');
  return (
    <div className="flex">
      <Contact title="Chats" selectElement={<ChatPosts selectUser={selectUser}/>} selectUser={selectUser} setSelectUser={setSelectUser} />
    </div>
  );
};
