import { ChatPosts } from 'components/ChatPosts/ChatPosts';
import { Contact } from 'components/Contacts/Contact';
import { useState } from 'react';

export const MessageUsers = () => {
  const [selectUser, setSelectUser] = useState<string|null>('')
  return (
    <div className="flex">
      <Contact title="Chats" selectElement={<ChatPosts />} selectUser={selectUser} setSelectUser={setSelectUser} />
    </div>
  );
};
