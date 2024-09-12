import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const Loading = <div>Loading...</div>;
const ProductList = lazy(() => import('../pages/product/ListPage'));
const ProductAdd = lazy(() => import('../pages/product/AddPage'));

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
    {
      path: 'add',
      element: (
        <Suspense fallback={Loading}>
          <ProductAdd />
        </Suspense>
      ),
    },
  ];
};

export default ProductRouter;
