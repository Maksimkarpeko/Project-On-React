import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Links } from 'constants/link.ts';
import { Error } from 'pages/Error/Error.tsx';

import App from './App.tsx';
import './index.scss';

const router = createBrowserRouter([
  { path: Links.homePage, element: <App /> },
  { path: Links.errorError, element: <Error /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
