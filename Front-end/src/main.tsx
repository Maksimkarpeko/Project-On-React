import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Links } from 'constants/links';
import { EntryEmail } from 'pages/EntryEmail/EntryEmail';
import { EntryPassword } from 'pages/EntryPassword/EntryPassword';
import { Error } from 'pages/Error/Error.tsx';
import { Home } from 'pages/Home/Home';
import { Welcome } from 'pages/Welcome/Welcome';

import './index.scss';

const router = createBrowserRouter([
  { path: Links.startPage, element: <Welcome /> },
  { path: Links.entryEmail, element: <EntryEmail /> },
  { path: Links.entryEmailPassword, element: <EntryPassword /> },
  { path: Links.homePage, element: <Home /> },
  { path: Links.errorError, element: <Error /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
