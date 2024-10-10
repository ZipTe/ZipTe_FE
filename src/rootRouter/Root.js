import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AptRouter from './AptRouter';

const Loading = <div>Loading...</div>;

const Main = lazy(() => import('../pages/MainPage'));
const About = lazy(() => import('../pages/AboutPage'));
const AptIndex = lazy(() => import('../pages/apt/indexPage'));

export const root = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: 'about',
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: 'apt',
    element: (
      <Suspense fallback={Loading}>
        <AptIndex />
      </Suspense>
    ),
    children: AptRouter(),
  },
]);
