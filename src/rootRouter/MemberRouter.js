import React, { lazy, Suspense } from 'react';

const Loading = <div>Loading...</div>;
const Login = lazy(() => import('../pages/member/LoginPage'));

const MemberRouter = () => {
  return [
    {
      path: 'login',
      element: (
        <Suspense fallback={Loading}>
          <Login />
        </Suspense>
      ),
    },
  ];
};

export default MemberRouter;
