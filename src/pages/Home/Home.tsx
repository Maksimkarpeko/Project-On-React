import{ useState} from 'react';
import { BaseLayout } from 'components/layouts/baseLayout/BaseLayout';
import { PageComponent } from 'constants/PageComponent';

export function Home() {
  const [page, setPage] = useState<string>('');
  return (
    <>
      <BaseLayout setPage={setPage} page={page}>
        {PageComponent[page] ?? null}
      </BaseLayout>
    </>
  );
}