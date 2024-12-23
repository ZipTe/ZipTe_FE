import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import useCustomMove from '../../hooks/UseCustomMove';
import FetchingModal from '../common/FetchingModal';
import './css/ListComponent.css';
import { getCart } from '../../api/CartAPI';
import { API_SERVER_HOST } from '../../api/ProductAPI';

const host = API_SERVER_HOST;

const initState = {
  data: { items: [] },
};

function ListComponent({ id }) {
  const { moveToProductRead } = useCustomMove();
  const navigate = useNavigate(); // useNavigate 초기화

  const [serverData, setServerData] = useState(initState);
  const [fetching, setFetching] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setFetching(true);

    getCart(id).then((response) => {
      const mergedData = { ...initState, ...response };
      console.log(mergedData);
      setServerData(mergedData);
      setFetching(false);
    });
  }, [id]);

  const handleCheckboxChange = (productId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleSubmit = () => {
    if (selectedItems.length === 0) {
      alert('선택된 아이템이 없습니다.');
      return;
    }

    // 선택된 아이템 데이터를 생성
    const selectedData = selectedItems.map((productId) => {
      const product = serverData.data.items.find(
        (item) => item.productId === productId
      );
      return {
        productId: product.productId,
        count: product.quantity,
      };
    });

    const createOrderData = {
      memberId: id || 1,
      city: '',
      streetAddress: '',
      zipcode: '',
      orderDesc: '',
      deliveryDesc: '',
      items: selectedData,
    };

    console.log(createOrderData);
    // /order로 이동하면서 데이터 전달
    navigate('/order', { state: { orderData: createOrderData } });
  };

  return (
    <div className='list-container'>
      {fetching && <FetchingModal className='fetching-modal' />}

      <div className='cart-list'>
        {serverData.data.items && serverData.data.items.length > 0 ? (
          serverData.data.items.map((product) => (
            <div key={product.productId} className='product-card'>
              <div className='product-card-content'>
                <div className='product-card-header'>
                  <input
                    type='checkbox'
                    checked={selectedItems.includes(product.productId)}
                    onChange={() => handleCheckboxChange(product.productId)}
                  />
                  <div>{product.productName}</div>
                </div>
                <div className='product-card-details'>
                  <div className='product-info'>
                    <div className='product-image'>
                      <img
                        alt='product'
                        className='product-image'
                        src={
                          product.productImage &&
                          product.productImage.length > 0
                            ? `${host}/api/product/view/${product.productImage}`
                            : '/path/to/default-image.jpg' // Default image path
                        }
                      />
                    </div>

                    <div className='product-info-details'>
                      <div>개별 가격: {product.price.toLocaleString()}원</div>
                      <div>원하는 수량: {product.quantity}</div>
                      <div>
                        총 가격: {product.totalPrice.toLocaleString()}원
                      </div>
                      <div
                        className='product-name'
                        onClick={() => moveToProductRead(product.productId)}
                      >
                        상품으로 이동하기
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>장바구니에 상품이 없습니다.</p>
        )}
      </div>
      <button onClick={handleSubmit} className='submit-button'>
        구매하기
      </button>
    </div>
  );
}

export default ListComponent;
