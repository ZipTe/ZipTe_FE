import React, { lazy, Suspense } from 'react';

const Loading = <div>Loading...</div>;
const APTList = lazy(() => import('../pages/apt/MyAptInfo'));
const APTTest = lazy(() => import('../pages/apt/DongPrice'));
const APTPriceList = lazy(() => import('../pages/apt/AptPrice'));

const AptRouter = () => {
  return [
    {
      path: 'get',
      element: (
        <Suspense fallback={Loading}>
          <APTList />
        </Suspense>
      ),
    },
    {
      path: 'price',
      element: (
        <Suspense fallback={Loading}>
          <APTPriceList />
        </Suspense>
      ),
    },
    {
      path: 'test',
      element: (
        <Suspense fallback={Loading}>
          <APTTest />
        </Suspense>
      ),
    },
  ];
};

export default AptRouter;
