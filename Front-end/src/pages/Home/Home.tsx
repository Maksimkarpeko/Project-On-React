import{ useEffect, useState} from 'react';
import { BaseLayout } from 'components/layouts/baseLayout/BaseLayout';
import { NavigationContent } from 'constants/navigationContent';
import { useNavigate } from 'react-router-dom';
import { Links } from 'constants/links';

export function Home() {
  const [page, setPage] = useState<string>('');
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate(Links.startScreen)
    }
  })
  return (
    <>
      <BaseLayout setPage={setPage} page={page}>
        {NavigationContent[page] ?? null}
      </BaseLayout>
    </>
  );
}