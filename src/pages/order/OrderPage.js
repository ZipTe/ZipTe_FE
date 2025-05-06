import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // useLocation 훅 사용
import OrderComponent from '../../components/order/OrderComponent';
import { CheckOutComponent } from '../../components/Toss/CheckOutComponent';
import BasicLayout from '../../layouts/BasicLayout';
import AddressListComponent from '../../components/order/AddressListComponent';
import AddressGetOneComponent from '../../components/order/AddressGetOneComponent'; // AddressGetOneComponent 추가

const OrderPage = () => {
  const [orderCompleteData, setOrderCompleteData] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null); // 주소 ID 상태
  const [showAddressList, setShowAddressList] = useState(false);
  const location = useLocation();

  // 주문 완료 처리 함수
  const handleOrderComplete = (orderData) => {
    setOrderCompleteData(orderData);
    console.log('주문 완료 데이터:', orderData);
  };

  // 주소 선택 처리 함수
  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId); // 선택된 주소의 ID를 상태로 저장
    setShowAddressList(false); // 주소 리스트 숨기기
    console.log('선택된 주소 ID:', addressId);
  };

  const initialOrderData = location.state?.orderData || {};

  return (
    <BasicLayout>
      <div>
        {!orderCompleteData ? (
          <>
            {!showAddressList ? (
              <div>
                <button onClick={() => setShowAddressList(true)}>
                  주소 선택하기
                </button>
                {selectedAddressId && (
                  <div>
                    <AddressGetOneComponent addressId={selectedAddressId} />
                  </div>
                )}
              </div>
            ) : (
              <AddressListComponent
                memberId={1}
                onAddressSelect={handleAddressSelect} // 주소 ID를 전달받는 함수
              />
            )}
            <OrderComponent
              initialOrderData={{
                ...initialOrderData,
                savedAddressId: selectedAddressId, // 선택된 주소 ID를 전달
              }}
              onOrderComplete={handleOrderComplete}
            />
          </>
        ) : (
          <CheckOutComponent orderData={orderCompleteData} />
        )}
      </div>
    </BasicLayout>
  );
};

export default OrderPage;
