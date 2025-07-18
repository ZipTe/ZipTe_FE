import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OrderComponent from '../../components/order/OrderComponent';
import { CheckOutComponent } from '../../components/Toss/CheckOutComponent';
import BasicLayout from '../../layouts/BasicLayout';
import AddressListComponent from '../../components/order/AddressListComponent';
import AddressGetOneComponent from '../../components/order/AddressGetOneComponent';

const OrderPage = () => {
  const location = useLocation();
  const initialOrderData = location.state?.orderData || null;

  const [orderCompleteData, setOrderCompleteData] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showAddressList, setShowAddressList] = useState(false);

  // 💡 location으로 들어온 orderData가 있으면 바로 Checkout으로 이동
  useEffect(() => {
    if (initialOrderData && initialOrderData.directCheckout) {
      console.log('바로 결제 데이터:', initialOrderData);
      setOrderCompleteData(initialOrderData); // 바로 CheckoutComponent 렌더링
    }
  }, [initialOrderData]);

  const handleOrderComplete = (orderData) => {
    setOrderCompleteData(orderData);
    console.log('주문 완료 데이터:', orderData);
  };

  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId);
    setShowAddressList(false);
  };

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
                  <AddressGetOneComponent addressId={selectedAddressId} />
                )}
              </div>
            ) : (
              <AddressListComponent
                memberId={1}
                onAddressSelect={handleAddressSelect}
              />
            )}
            <OrderComponent
              initialOrderData={{
                ...initialOrderData,
                savedAddressId: selectedAddressId,
              }}
              onOrderComplete={handleOrderComplete}
              savedAddressId={selectedAddressId}
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
