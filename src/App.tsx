import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Contact } from 'components/Contacts/Contact';
import { BaseLayout } from 'components/layouts/baseLayout/BaseLayout';
import { Links } from 'constants/link';

function App() {
  const [page, setPage] = useState<string>('');
  return (
    <>
      <BaseLayout setPage={setPage} page={page}>
        {page === 'Discover' && <Contact />}
        {page === 'Contact' && 'Contact'}
        {page === 'Message' && 'Message'}
        {page === 'Notification' && 'Notification'}
        {page === 'Setting' && 'Setting'}
      </BaseLayout>
    </>
  );
}

export default App;
