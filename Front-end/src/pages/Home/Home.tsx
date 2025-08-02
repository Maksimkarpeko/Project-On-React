import{ useEffect, useState} from 'react';
import { BaseLayout } from 'components/layouts/baseLayout/BaseLayout';
import { PageComponent } from 'constants/PageComponent';
import { useNavigate } from 'react-router-dom';
import { Links } from 'constants/links';

export function Home() {
  const [page, setPage] = useState<string>('');
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate(Links.startPage)
    }
  })
  return (
    <>
      <BaseLayout setPage={setPage} page={page}>
        {PageComponent[page] ?? null}
      </BaseLayout>
    </>
  );
}