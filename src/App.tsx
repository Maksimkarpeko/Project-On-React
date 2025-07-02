import { useState } from 'react';

import { Avatars } from 'components/Avatars/Avatars';
import { Size } from 'components/Avatars/constants';
import { BaseLayout } from 'components/layouts/baseLayout/BaseLayout';

function App() {
  const [page, setPage] = useState<string>('');
  return (
    <>
      <BaseLayout setPage={setPage} page={page}>
        {page === 'Discover' && 'Discover'}
        {page === 'Contact' && 'Contact'}
        {page === 'Message' && 'Message'}
        {page === 'Notification' && 'Notification'}
        {page === 'Setting' && 'Setting'}
        <Avatars size={Size.Large} isOnline= {false}/>
      </BaseLayout>
    </>
  );
}

export default App;
