import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Links } from 'constants/links';
import { EntryBio } from 'pages/EntryBio/EntryBio';
import { Error } from 'pages/Error/Error.tsx';
import { Home } from 'pages/Home/Home';
import { SingUp } from 'pages/SingUp/SignUp';
import { Welcome } from 'pages/Welcome/Welcome';

import './index.scss';

const router = createBrowserRouter([
  { path: Links.startPage, element: <Welcome /> },
  { path: Links.entryBio, element: <EntryBio /> },
  { path: Links.singUp, element: <SingUp /> },
  { path: Links.homePage, element: <Home /> },
  { path: Links.errorError, element: <Error /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
