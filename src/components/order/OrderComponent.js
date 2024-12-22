import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/OrderComponent.css';

const OrderComponent = ({ initialOrderData, onOrderComplete }) => {
  const [streetAddress, setStreetAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [orderDesc, setOrderDesc] = useState('');
  const [deliveryDesc, setDeliveryDesc] = useState('');

  const [orderData, setOrderData] = useState(initialOrderData);

  // useEffect를 사용하여 initialOrderData가 변경될 때마다 상태를 업데이트
  useEffect(() => {
    setOrderData(initialOrderData);
  }, [initialOrderData]);

  // Daum 우편번호 API 스크립트 동적 로딩
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 최종 주문 요청 데이터
    const finalOrderRequest = {
      ...orderData,
      streetAddress,
      detailAddress,
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
      onOrderComplete(response.data); // 부모 컴포넌트에 완료 알림
    } catch (error) {
      console.error('주문 생성 중 오류가 발생했습니다:', error);
    }
  };

  // Daum 우편번호 찾기 함수
  const openPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = '';
        let extraAddr = '';

        if (data.userSelectedType === 'R') {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr +=
              extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
          }
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')';
          }
        }

        setZipcode(data.zonecode);
        setStreetAddress(addr);
      },
    }).open();
  };

  return (
    <div className='order-container'>
      <h1>주문 정보 입력</h1>
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
        <div>
          <label>우편번호:</label>
          <input type='text' value={zipcode} readOnly placeholder='우편번호' />
          <input type='button' value='주소 찾기' onClick={openPostcode} />
        </div>
        <div>
          <label>주소:</label>
          <input
            type='text'
            value={streetAddress}
            readOnly
            placeholder='주소'
          />
        </div>
        <div>
          <label>상세주소:</label>
          <input
            type='text'
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
            placeholder='상세 주소를 입력하세요'
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
