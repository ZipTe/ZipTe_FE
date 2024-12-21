import React, { lazy, Suspense } from 'react';

const Loading = <div>Loading...</div>;
const SuccessPage = lazy(() => import('../pages/toss/SuccessPage'));
const FailPage = lazy(() => import('../pages/toss/FailPage'));

const TossRouter = () => {
  return [
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
