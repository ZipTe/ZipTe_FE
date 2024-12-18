import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AptRouter from './AptRouter';
import TossRouter from './TossRouter';

const Loading = <div>Loading...</div>;

const Main = lazy(() => import('../pages/MainPage'));
const About = lazy(() => import('../pages/AboutPage'));
const AptIndex = lazy(() => import('../pages/apt/indexPage'));
const MapIndex = lazy(() => import('../pages/map/MapPage'));
const TossIndex = lazy(() => import('../pages/toss/IndexPage'));

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
  {
    path: 'map',
    element: (
      <Suspense fallback={Loading}>
        <MapIndex />
      </Suspense>
    ),
  },
  {
    path: 'toss',
    element: (
      <Suspense fallback={Loading}>
        <TossIndex />
      </Suspense>
    ),
    children: TossRouter(),
  },
]);
