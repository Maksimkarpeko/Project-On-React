import { Contact } from "components/Contacts/Contact";
import { EditProfile } from "components/EditProfile/EditProfile";
import { Setting } from "pages/Setting/Setting";
import type { ReactNode } from "react";

export const NavigationContent:Record<string,ReactNode> = {
    Discover:"Discover",
    Contact:<Contact/>,
    Message:"Message",
    Notification:"Notification",
    Setting:<Setting/>
}

export const SettingNavigationContent: Record<string, ReactNode> = {
  Edit: <EditProfile/>,
  Invites: "Invites content",
  Communities: "Communities content",

  Account: "Account and privacy content",
  Notifications: "Notifications content",
  Email: "Email preferences content",
  Appearance: "Appearance content",

  Wallet: "Wallet content",
  Subcriptions: "Subcriptions content",

  Install: "Install apps content",
  Guide: "User guide content",
  Help: "Help and feedback content",
  About: "About us content",
};
