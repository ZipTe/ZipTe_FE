import React, { useState } from 'react';
import { addDelivery } from '../../api/AddressAPI';

const AddressComponent = () => {
  const [streetAddress, setStreetAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [orderDesc, setOrderDesc] = useState('');
  const [deliveryDesc, setDeliveryDesc] = useState('');
  const [isDefault, setIsDefault] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addressData = {
      memberId: 1, // 고정된 사용자 ID
      streetAddress,
      detailAddress,
      zipcode,
      orderDesc,
      deliveryDesc,
      isDefault,
    };

    try {
      const response = await addDelivery(addressData);
      if (response.success) {
        alert('주소가 성공적으로 추가되었습니다!');
        // 필요한 경우 상태 초기화 또는 다른 처리
      } else {
        console.error('주소 추가 실패:', response.error);
      }
    } catch (error) {
      console.error('주소 추가 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className='add-address-container'>
      <h1>주소 추가</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>우편번호:</label>
          <input
            type='text'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            placeholder='우편번호를 입력하세요'
          />
        </div>
        <div>
          <label>도로명 주소:</label>
          <input
            type='text'
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder='도로명 주소를 입력하세요'
          />
        </div>
        <div>
          <label>상세 주소:</label>
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
        <div>
          <label>기본 주소로 설정:</label>
          <input
            type='checkbox'
            checked={isDefault}
            onChange={(e) => setIsDefault(e.target.checked)}
          />
        </div>
        <button type='submit'>주소 추가</button>
      </form>
    </div>
  );
};

export default AddressComponent;
