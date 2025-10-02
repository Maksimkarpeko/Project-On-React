import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BaseLayout } from 'components/layouts/baseLayout/BaseLayout';
import { Links } from 'constants/links';
import { getNavigationContent } from 'constants/navigationContent';

export function Home() {
  const [page, setPage] = useState<string>('');
  const [selectUser, setSelectUser] = useState<string | null>('');
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate(Links.startScreen);
    }
  });
  return (
    <BaseLayout setPage={setPage} page={page}>
      {getNavigationContent(setSelectUser, selectUser)[page] ?? null}
    </BaseLayout>
  );
}
