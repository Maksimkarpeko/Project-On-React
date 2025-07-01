import { useState } from 'react';

import { Layout } from 'components/layout/Layout';

function App() {
  const [page, setPage] = useState<string>('');
  return (
    <>
      <Layout setPage={setPage} page={page}>
        {page === 'Discover' && 'Discover'}
        {page === 'Contact' && 'Contact'}
        {page === 'Message' && 'Message'}
        {page === 'Notification' && 'Notification'}
        {page === 'Setting' && 'Setting'}
      </Layout>
    </>
  );
}

export default App;
