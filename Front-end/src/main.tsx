import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Links } from 'constants/links';
import { Error } from 'pages/Error/Error.tsx';


import './index.scss';
import { Home } from 'pages/Home/Home';

const router = createBrowserRouter([
  { path: Links.homePage, element: <Home/> },
  { path: Links.errorError, element: <Error /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
