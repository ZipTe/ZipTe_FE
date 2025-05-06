import React, { useState } from 'react';
import './css/ProductOrderButtonComponent.css';
import { useNavigate } from 'react-router-dom';
import { postAdd } from '../../api/CartAPI'; // useNavigate 훅 사용

function ProductOrderButtonComponent({ serverData }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(serverData.discountPrice);

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * serverData.discountPrice);
  };

  const handleOrderButtonClick = () => {
    const orderData = createOrderData(); // 주문 데이터 생성
    navigate('/order', { state: { orderData } }); // 주문 데이터와 함께 이동
  };

  const handleCartButtonClick = () => {
    const cartData = createCartData(); // 주문 데이터 생성

    // cartData를 서버에 보내는 함수 호출
    postAdd(cartData)
      .then(() => {
        console.log(cartData);
        alert('장바구니에 추가되었습니다:');
        // 서버 응답에 따라 처리 (예: 성공 메시지 출력)
      })
      .catch((error) => {
        console.error('장바구니 추가 실패:', error);
        // 실패 처리
      });
  };

  const createOrderData = () => {
    return {
      memberId: 1, // 예시로 1번 회원
      savedAddressId: 0,
      items: [
        {
          productId: serverData.product.id,
          count: quantity,
        },
      ],
    };
  };

  const createCartData = () => {
    return {
      memberId: 1, // 예시로 1번 회원
      item: {
        productId: serverData.product.id,
        quantity: quantity,
      },
    };
  };

  return (
    <div className='order-component-container'>
      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>상품 이름</div>
          <div className='product-info-value'>{serverData.product.pname}</div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>가격</div>
          <div className='product-info-value'>
            {serverData.discountPrice} 원
          </div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>수량</div>
          <input
            type='number'
            value={quantity}
            min='1'
            onChange={handleQuantityChange}
            className='quantity-input'
          />
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>총 가격</div>
          <div className='product-info-value'>{totalPrice} 원</div>
        </div>
      </div>

      <div className='button-container'>
        <button
          type='button'
          className='button-cart'
          onClick={handleCartButtonClick}
        >
          장바구니에 담기
        </button>
        <button
          type='button'
          className='button-order'
          onClick={handleOrderButtonClick}
        >
          주문하기
        </button>
      </div>
    </div>
  );
}

export default ProductOrderButtonComponent;
