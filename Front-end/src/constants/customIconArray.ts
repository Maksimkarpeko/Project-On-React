import type { UserResponse } from 'api/user/type';
import {
  About,
  Account,
  ActiveAboutUs,
  ActiveAccount,
  ActiveAppearance,
  ActiveBell,
  ActiveCommunities,
  ActiveDarkBell,
  ActiveEdit,
  ActiveEmail,
  ActiveGuide,
  ActiveHelp,
  ActiveInstall,
  ActiveInvite,
  ActiveSubscriptions,
  ActiveWallet,
  Appearance,
  Bell,
  Birth,
  Communities,
  Country,
  Edit,
  Email,
  Guide,
  Help,
  Install,
  Invite,
  Link,
  Old,
  Report,
  Subcriptions,
  Teg,
  Wallet,
  X,
} from 'assets/index';
import { getInitialsForCountry } from 'utils/getInitialsForCountry';

export const actionsBlock = [
  {
    text: 'Mute notifications',
    img: Bell,
    classname: 'ml-24 lg:ml-5 md:mt-4 xl:ml-32 2xl:ml-32 sm:ml-1 cursor-pointer',
    activeIcon: ActiveDarkBell,
    activeText: 'Unmute notifications',
  },
  {
    text: 'Remove from contacts',
    img: Old,
    classname: 'ml-24 lg:ml-5 md:mt-4 xl:ml-32 2xl:ml-32 sm:ml-1 cursor-pointer',
  },
  {
    text: 'Copy link',
    img: Link,
    classname: 'ml-24 lg:ml-5 2xl:ml-32 md:mt-4 xl:ml-32 sm:ml-1 cursor-pointer',
  },
  {
    text: 'Report spam',
    img: Report,
    classname: 'ml-24 md:mt-4 lg:ml-5 2xl:ml-32 xl:ml-32 sm:ml-1 cursor-pointer',
  },
];

export const profileBlock = (user: UserResponse) => [
  { text: user.username, img: Teg, classname: 'mr-14 cursor-pointer' },
  {
    text: `${user.country === undefined ? 'You need to enter the data' : user.country}${getInitialsForCountry(user.country)}`,
    img: Country,
    classname: 'mr-14 cursor-pointer',
  },
  { text: 'None', img: Birth, classname: 'mr-14 cursor-pointer' },
];

export const contactBlock = (user: UserResponse) => [
  { text: user.email, img: Email, classname: 'cursor-pointer' },
  { text: user.username, img: X, classname: 'cursor-pointer' },
  { text: 'None', img: Report, classname: 'cursor-pointer' },
];

export const settingBlock = [
  { text: 'Edit profile', img: Edit, classnameImg: 'pl-4', alt: 'Edit', activeImg: ActiveEdit },
  {
    text: 'invites friends',
    img: Invite,
    classnameImg: 'pl-4',
    alt: 'Invites',
    activeImg: ActiveInvite,
  },
  {
    text: 'Communities',
    img: Communities,
    classnameImg: 'pl-4',
    alt: 'Communities',
    activeImg: ActiveCommunities,
  },
];

export const preferencesBlock = [
  {
    text: 'Account and privacy',
    img: Account,
    classnameImg: 'pl-4',
    alt: 'Account',
    activeImg: ActiveAccount,
  },
  {
    text: 'Notifications',
    img: Bell,
    classnameImg: 'pl-4',
    alt: 'Notifications',
    activeImg: ActiveBell,
  },
  {
    text: 'Email preferences',
    img: Email,
    classnameImg: 'pl-4',
    alt: 'Email',
    activeImg: ActiveEmail,
  },
  {
    text: 'Appearance',
    img: Appearance,
    classnameImg: 'pl-4',
    alt: 'Appearance',
    activeImg: ActiveAppearance,
  },
];

export const billingBlock = [
  { text: 'Wallet', img: Wallet, classnameImg: 'pl-4', alt: 'Wallet', activeImg: ActiveWallet },
  {
    text: 'Subcriptions',
    img: Subcriptions,
    classnameImg: 'pl-4',
    alt: 'Subcriptions',
    activeImg: ActiveSubscriptions,
  },
];

export const openlangBlock = [
  { text: 'Install apps', img: Install, classnameImg: 'pl-4', alt: 'Install', activeImg: ActiveInstall },
  { text: 'User guide', img: Guide, classnameImg: 'pl-4', alt: 'Guide', activeImg: ActiveGuide },
  { text: 'Help and feedback', img: Help, classnameImg: 'pl-4', alt: 'Help', activeImg: ActiveHelp },
  { text: 'About us', img: About, classnameImg: 'pl-4', alt: 'About', activeImg: ActiveAboutUs },
];
