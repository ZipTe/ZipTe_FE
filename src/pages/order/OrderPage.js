import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // useLocation 훅 사용
import OrderComponent from '../../components/order/OrderComponent';
import { CheckOutComponent } from '../../components/Toss/CheckOutComponent';
import BasicLayout from '../../layouts/BasicLayout';

const OrderPage = () => {
  const [orderCompleteData, setOrderCompleteData] = useState(null);
  const location = useLocation(); // 페이지 이동 시 전달된 상태 데이터 접근

  const handleOrderComplete = (orderData) => {
    // 주문 완료 후 처리 (예: 알림, 페이지 이동 등)
    setOrderCompleteData(orderData);
    console.log('주문 완료 데이터:', orderCompleteData);
    // alert('주문이 완료되었습니다!');
  };

  const initialOrderData = location.state?.orderData || {}; // 상태로 전달된 주문 데이터

  return (
    <BasicLayout>
      <div>
        <h1>주문 페이지</h1>
        {!orderCompleteData ? (
          <OrderComponent
            initialOrderData={initialOrderData}
            onOrderComplete={handleOrderComplete}
          />
        ) : (
          <CheckOutComponent orderData={orderCompleteData} />
        )}
      </div>
    </BasicLayout>
  );
};

export default OrderPage;
