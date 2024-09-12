import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const Loading = <div>Loading...</div>;
const ProductList = lazy(() => import('../pages/product/ListPage'));

const ProductRouter = () => {
  return [
    {
      path: 'list',
      element: (
        <Suspense fallback={Loading}>
          <ProductList />
        </Suspense>
      ),
    },
    {
      path: '',
      element: <Navigate replace to={'list'} />,
    },
  ];
};

export default ProductRouter;
