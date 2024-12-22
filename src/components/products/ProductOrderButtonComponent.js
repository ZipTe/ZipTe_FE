import React, { useState } from 'react';
import './css/ProductOrderButtonComponent.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 사용

function ProductOrderButtonComponent({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * product.price);
  };

  const handleOrderButtonClick = () => {
    const orderData = createOrderData(); // 주문 데이터 생성
    navigate('/order', { state: { orderData } }); // 주문 데이터와 함께 이동
  };

  const createOrderData = () => {
    return {
      memberId: 1, // 예시로 1번 회원
      city: '',
      streetAddress: '',
      zipcode: '',
      orderDesc: '',
      deliveryDesc: '',
      items: [
        {
          productId: product.id,
          count: quantity,
        },
      ],
    };
  };

  return (
    <div className='order-component-container'>
      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>상품 이름</div>
          <div className='product-info-value'>{product.pname}</div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>가격</div>
          <div className='product-info-value'>{product.price} 원</div>
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
        <button type='button' className='button-cart'>
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
