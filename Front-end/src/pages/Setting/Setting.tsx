import { SettingNav } from "components/SettingNav/SettingNav"
import { SettingNavigationContent } from "constants/NavigationContent";
import { useState } from "react";

export const Setting = () => {
    const [activeTab, setActiveTab] = useState<string>('');
    return(
        <div className="flex">
            <SettingNav setTab={setActiveTab} tab={activeTab}/>
            {SettingNavigationContent[activeTab] ?? null}
        </div>
    )
}