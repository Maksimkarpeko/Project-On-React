import { useEffect, useState } from 'react';

import { SettingNav } from 'components/SettingNav/SettingNav';
import { SettingNavigationContent } from 'constants/navigationContent';
import { getAuthUser } from 'store/user/useUserStore';

export const Setting = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);
  return (
    <div className="flex">
      <SettingNav setTab={setActiveTab} tab={activeTab} />
      {SettingNavigationContent[activeTab] ?? null}
    </div>
  );
};
