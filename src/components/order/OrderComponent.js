import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/OrderComponent.css';

const OrderComponent = ({ initialOrderData, onOrderComplete }) => {
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [orderDesc, setOrderDesc] = useState('');
  const [deliveryDesc, setDeliveryDesc] = useState('');

  const [orderData, setOrderData] = useState(initialOrderData);

  // useEffect를 사용하여 initialOrderData가 변경될 때마다 상태를 업데이트
  useEffect(() => {
    setOrderData(initialOrderData);
  }, [initialOrderData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 최종 주문 요청 데이터
    const finalOrderRequest = {
      ...orderData,
      city,
      streetAddress,
      zipcode,
      orderDesc,
      deliveryDesc,
    };

    try {
      const response = await axios.post(
        'http://localhost:8080/api/order',
        finalOrderRequest
      );

      console.log(response);
      // alert('주문이 성공적으로 생성되었습니다!');
      onOrderComplete(response.data); // 부모 컴포넌트에 완료 알림
    } catch (error) {
      console.error('주문 생성 중 오류가 발생했습니다:', error);
      // alert('주문 생성에 실패했습니다.');
    }
  };

  return (
    <div className='order-container'>
      <h1>주문 정보 입력</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>상품이름:</label>
          <input
            type='text'
            value={orderData.items[0]?.productId || '없음'} // productId 표시 (수정 불가)
            readOnly
          />
        </div>
        <div>
          <label>수량:</label>
          <input
            type='number'
            value={orderData.items[0]?.count || 0} // count 표시 (수정 불가)
            readOnly
          />
        </div>
        <div>
          <label>도시:</label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='도시를 입력하세요'
          />
        </div>
        <div>
          <label>주소:</label>
          <input
            type='text'
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder='상세 주소를 입력하세요'
          />
        </div>
        <div>
          <label>우편번호:</label>
          <input
            type='number'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            placeholder='우편번호를 입력하세요'
          />
        </div>
        <div>
          <label>주문 메시지:</label>
          <textarea
            value={orderDesc}
            onChange={(e) => setOrderDesc(e.target.value)}
            placeholder='주문 메시지를 입력하세요'
          />
        </div>
        <div>
          <label>배송 메시지:</label>
          <textarea
            value={deliveryDesc}
            onChange={(e) => setDeliveryDesc(e.target.value)}
            placeholder='배송 메시지를 입력하세요'
          />
        </div>
        <button type='submit'>주문 완료</button>
      </form>
    </div>
  );
};

export default OrderComponent;
