import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';
import ListComponent from '../../components/cart/ListComponent';

const CartPage = () => {
  return (
    <BasicLayout>
      <div className='cart-page'>
        <ListComponent id={1} />
      </div>
    </BasicLayout>
  );
};

export default CartPage;
