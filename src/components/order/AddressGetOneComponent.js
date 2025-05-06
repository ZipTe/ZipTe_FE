import React, { useState, useEffect } from 'react';
import './css/DefaultAddressComponent.css';
import { getOne } from '../../api/AddressAPI';

const AddressGetOneComponent = ({ addressId }) => {
  const [address, setAddress] = useState(null); // 주소 상태

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const addressData = await getOne(addressId); // 주소 정보 가져오기
        console.log(addressData);
        setAddress(addressData); // 주소 상태에 저장
      } catch (error) {
        console.error('주소 가져오기 실패', error);
      }
    };

    if (addressId) {
      fetchAddress(); // addressId가 있을 때만 주소 가져오기
    }
  }, [addressId]); // addressId가 변경될 때마다 주소를 가져옴

  if (!address) {
    return <p>주소를 불러오는 중입니다...</p>; // 주소가 없으면 로딩 메시지 표시
  }

  return (
    <div className='default-address'>
      <p>
        <strong>도로명 주소:</strong> {address.data.streetAddress}
      </p>
      <p>
        <strong>상세 주소:</strong> {address.data.detailAddress}
      </p>
      <p>
        <strong>우편번호:</strong> {address.data.zipcode}
      </p>
      <p>
        <strong>주문 메시지:</strong> {address.data.orderDesc}
      </p>
      <p>
        <strong>배송 메시지:</strong> {address.data.deliveryDesc}
      </p>
    </div>
  );
};

export default AddressGetOneComponent;
