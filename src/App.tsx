import { useState } from 'react';

import { Contact } from 'components/Contacts/Contact';
import { BaseLayout } from 'components/layouts/baseLayout/BaseLayout';

function App() {
  const [page, setPage] = useState<string>('');
  return (
    <>
      <BaseLayout setPage={setPage} page={page}>
        {page === 'Discover' && 'Discover'}
        {page === 'Contact' && <Contact />}
        {page === 'Message' && 'Message'}
        {page === 'Notification' && 'Notification'}
        {page === 'Setting' && 'Setting'}
      </BaseLayout>
    </>
  );
}

export default App;
