import type { UserResponse } from 'api/user/type';
import {Bell,Link,Report,Old,Teg,Email,Country,X,Birth,ActiveBell} from 'assets/index'
import { getInitialsForCountry } from 'utils/getInitialsForCountry';
export const actionsBlock = [
  { text: "Mute notifications", img: Bell, classname: "ml-24 lg:ml-5 md:mt-4 xl:ml-32 2xl:ml-32 sm:ml-1", activeIcon:ActiveBell, activeText:'Unmute notifications' },
  { text: "Remove from contacts", img: Old, classname: "ml-24 lg:ml-5 md:mt-4 xl:ml-32 2xl:ml-32 sm:ml-1",  },
  { text: "Copy link", img: Link, classname: "ml-24 lg:ml-5 2xl:ml-32 md:mt-4 xl:ml-32 sm:ml-1" },
  { text: "Report spam", img: Report, classname: "ml-24 md:mt-4 lg:ml-5 2xl:ml-32 xl:ml-32 sm:ml-1" },
];


export const profileBlock = (user:UserResponse)=>[
  { text: user.username, img: Teg, classname: "mr-14" },
  { text: `${user.address.country},${getInitialsForCountry(user.address.country)}`, img: Country, classname: "mr-14" },
  { text: "None", img: Birth, classname: "mr-14" },
];

export const contactBlock = (user:UserResponse) =>[
  { text: user.email, img: Email, classname: "" },
  { text: user.username, img: X, classname: "" },
  { text: "None", img: Report, classname: "" },
];
