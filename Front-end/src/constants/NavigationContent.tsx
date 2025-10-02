import type { ReactNode } from 'react';

import { Contact } from 'components/Contacts/Contact';
import { EditProfile } from 'components/EditProfile/EditProfile';
import { MessageUsers } from 'components/MessageUsers/MessageUsers';
import { Profile } from 'components/Profile/Profile';
import { Setting } from 'pages/Setting/Setting';

export const getNavigationContent = (
  setSelectUser: React.Dispatch<React.SetStateAction<string | null>>,
  selectUser: string | null,
): Record<string, ReactNode> => ({
  Discover: 'Discover',
  Contact: <Contact title="Contact" selectElement={<Profile setActive={setSelectUser} />} selectUser={selectUser} setSelectUser={setSelectUser}/>,
  Message: <MessageUsers />,
  Notification: 'Notification',
  Setting: <Setting />,
});

export const SettingNavigationContent: Record<string, ReactNode> = {
  Edit: <EditProfile />,
  Invites: 'Invites content',
  Communities: 'Communities content',

  Account: 'Account and privacy content',
  Notifications: 'Notifications content',
  Email: 'Email preferences content',
  Appearance: 'Appearance content',

  Wallet: 'Wallet content',
  Subcriptions: 'Subcriptions content',

  Install: 'Install apps content',
  Guide: 'User guide content',
  Help: 'Help and feedback content',
  About: 'About us content',
};
