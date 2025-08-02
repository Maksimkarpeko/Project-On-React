import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { StartScreen } from 'components/StartScreen/StartScreen';
import { Links } from 'constants/links';
import { EntryBio } from 'pages/EntryBio/EntryBio';
import { Error } from 'pages/Error/Error.tsx';
import { Home } from 'pages/Home/Home';
import { SignIn } from 'pages/SignIn/SignIn';
import { SignUp } from 'pages/SignUp/SignUp';

import './index.scss';

const router = createBrowserRouter([
  { path: Links.startScreen, element: <StartScreen /> },
  { path: Links.entryBio, element: <EntryBio /> },
  { path: Links.singUp, element: <SignUp /> },
  { path: Links.singIn, element: <SignIn /> },
  { path: Links.homePage, element: <Home /> },
  { path: Links.errorError, element: <Error /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
