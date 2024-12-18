import React, { lazy, Suspense } from 'react';

const Loading = <div>Loading...</div>;
const SuccessPage = lazy(() => import('../pages/toss/SuccessPage'));
const FailPage = lazy(() => import('../pages/toss/FailPage'));
const TossPage = lazy(() => import('../pages/toss/TossPage'));

const TossRouter = () => {
  return [
    {
      path: 'pay',
      element: (
        <Suspense fallback={Loading}>
          <TossPage />
        </Suspense>
      ),
    },
    {
      path: 'success',
      element: (
        <Suspense fallback={Loading}>
          <SuccessPage />
        </Suspense>
      ),
    },
    {
      path: 'fail',
      element: (
        <Suspense fallback={Loading}>
          <FailPage />
        </Suspense>
      ),
    },
  ];
};

export default TossRouter;
