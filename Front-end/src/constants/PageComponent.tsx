import { Contact } from "components/Contacts/Contact";
import type { ReactNode } from "react";

export const PageComponent:Record<string,ReactNode> = {
    Discover:"Discover",
    Contact:<Contact/>,
    Message:"Message",
    Notification:"Notification",
    Setting:"Setting"
}