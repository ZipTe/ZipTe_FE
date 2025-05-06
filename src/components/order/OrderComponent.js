import React, { useState, useEffect } from 'react';
import './css/OrderComponent.css';
import { createOrder } from '../../api/OrderAPI';

const OrderComponent = ({
  initialOrderData,
  savedAddressId, // 부모 컴포넌트에서 넘겨받은 주소 ID
  onOrderComplete,
}) => {
  const [orderData, setOrderData] = useState(initialOrderData);

  // useEffect를 사용하여 initialOrderData가 변경될 때마다 상태를 업데이트
  useEffect(() => {
    console.log('initialOrderData 변경됨:', initialOrderData); // initialOrderData가 변경될 때마다 확인

    // orderData가 갱신되는 과정 확인
    setOrderData((prevOrderData) => {
      const newData = {
        ...prevOrderData,
        savedAddressId: savedAddressId || prevOrderData.savedAddressId, // 주소 ID 갱신
        ...initialOrderData, // 기존 상태와 병합
      };
      console.log('새로 설정된 orderData:', newData); // 병합된 새 데이터 확인
      return newData;
    });
  }, [initialOrderData, savedAddressId]);

  // 주문 처리 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API 호출을 orderAPI에서 분리한 createOrder 메소드로 처리
      const response = await createOrder(orderData); // 업데이트된 orderData 사용
      console.log('주문 응답:', response);
      onOrderComplete(response); // 부모 컴포넌트에 완료 알림
    } catch (error) {
      console.error('주문 생성 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className='order-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>주문 상품 목록:</label>
          <ul>
            {orderData.items?.length > 0 ? (
              orderData.items.map((item, index) => (
                <li key={index}>
                  <div>상품 이름: {item.productId}</div>
                  <div>수량: {item.count}</div>
                </li>
              ))
            ) : (
              <p>선택된 상품이 없습니다.</p>
            )}
          </ul>
        </div>
        <button type='submit'>주문 완료</button>
      </form>
    </div>
  );
};

export default OrderComponent;
