import React, { useState, useEffect } from 'react';
import { getDeliveryList } from '../../api/AddressAPI';
import './css/AddressListComponent.css';

const AddressListComponent = ({ memberId, onAddressSelect }) => {
  const [addressList, setAddressList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddressList = async () => {
      try {
        setLoading(true);
        const response = await getDeliveryList(memberId);
        if (response.success) {
          setAddressList(response.data);
        } else {
          setError('주소 목록을 불러오는 데 실패했습니다.');
        }
      } catch (err) {
        setError('서버와의 통신 중 오류가 발생했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAddressList();
  }, [memberId]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='address-list-container'>
      <h1>주소 목록</h1>
      {addressList.length === 0 ? (
        <p>등록된 주소가 없습니다.</p>
      ) : (
        <ul>
          {addressList.map((address) => (
            <li
              key={address.id}
              className='address-item'
              onClick={() => onAddressSelect(address.id)} // 주소 클릭 시 id만 전달
            >
              <p>
                <strong>도로명 주소:</strong> {address.streetAddress}
              </p>
              <p>
                <strong>상세 주소:</strong> {address.detailAddress}
              </p>
              <p>
                <strong>우편번호:</strong> {address.zipcode}
              </p>
              <p>
                <strong>주문 메시지:</strong> {address.orderDesc}
              </p>
              <p>
                <strong>배송 메시지:</strong> {address.deliveryDesc}
              </p>
              <p>
                <strong>기본 주소:</strong>{' '}
                {address.isDefault ? '예' : '아니오'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressListComponent;
