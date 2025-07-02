import { useState } from 'react';


import { BaseLayout } from 'components/layouts/baseLayout/BaseLayout';
import { Link } from 'react-router-dom';
import { Links } from 'constants/link';

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
        <Link to={Links.errorError} className='text-blue-500'>Error page</Link>
      </BaseLayout>
    </>
  );
}

export default App;
