import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AptRouter from './AptRouter';
import TossRouter from './TossRouter';
import ProductRouter from './ProductRouter';

const Loading = <div>Loading...</div>;

const Main = lazy(() => import('../pages/main/MainPage'));
const About = lazy(() => import('../pages/AboutPage'));
const AptIndex = lazy(() => import('../pages/apt/indexPage'));
const MapIndex = lazy(() => import('../pages/map/MapPage'));
const TossIndex = lazy(() => import('../pages/toss/IndexPage'));
const ProductIndex = lazy(() => import('../pages/product/indexPage'));
const CartPage = lazy(() => import('../pages/cart/CartPage'));
const OrderPage = lazy(() => import('../pages/order/OrderPage'));

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
    path: 'order',
    element: (
      <Suspense fallback={Loading}>
        <OrderPage />
      </Suspense>
    ),
  },
  {
    path: 'product',
    element: (
      <Suspense fallback={Loading}>
        <ProductIndex />
      </Suspense>
    ),
    children: ProductRouter(),
  },
  {
    path: 'cart',
    element: (
      <Suspense fallback={Loading}>
        <CartPage />
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
