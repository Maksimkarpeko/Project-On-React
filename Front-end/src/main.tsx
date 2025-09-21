import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Links } from 'constants/links';
import { Loader } from 'components/common/Loader/Loader';

import './index.scss';

const StartScreen = lazy(() =>
  import('components/StartScreen/StartScreen').then((module) => ({ default: module.StartScreen })),
);
const Onboarding = lazy(() =>
  import('pages/Onboarding/Onboarding').then((module) => ({ default: module.Onboarding })),
);
const Error = lazy(() => import('pages/Error/Error').then((module) => ({ default: module.Error })));
const SignIn = lazy(() =>
  import('pages/SignIn/SignIn').then((module) => ({ default: module.SignIn })),
);
const SignUp = lazy(() =>
  import('pages/SignUp/SignUp').then((module) => ({ default: module.SignUp })),
);
const Home = lazy(() => import('pages/Home/Home').then((module) => ({ default: module.Home })));

const router = createBrowserRouter([
  { path: Links.startScreen, element: <StartScreen /> },
  { path: Links.entryBio, element: <Onboarding /> },
  { path: Links.signUp, element: <SignUp /> },
  { path: Links.signIn, element: <SignIn /> },
  { path: Links.homePage, element: <Home /> },
  { path: Links.errorError, element: <Error /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
