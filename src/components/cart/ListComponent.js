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
      const item = serverData.data.items.find(
        (item) => item.discountProduct.product.id === productId // 변경된 경로 참조
      );
      return {
        productId: item.discountProduct.product.id,
        count: item.quantity,
      };
    });

    const createOrderData = {
      memberId: id || 1,
      savedAddressId: 0,
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
          serverData.data.items.map((item) => {
            const product = item.discountProduct.product;
            const discountPrice = item.discountProduct.discountPrice;
            const imageName =
              product.uploadFileNames && product.uploadFileNames.length > 0
                ? product.uploadFileNames[0]
                : 'default-image.jpg'; // Default image

            return (
              <div key={product.id} className='product-card'>
                <div className='product-card-content'>
                  <div className='product-card-header'>
                    <input
                      type='checkbox'
                      checked={selectedItems.includes(product.id)}
                      onChange={() => handleCheckboxChange(product.id)}
                    />
                    <div>{product.pname}</div>
                  </div>
                  <div className='product-card-details'>
                    <div className='product-info'>
                      <div className='product-image'>
                        <img
                          alt='product'
                          className='product-image'
                          src={`${host}/api/product/view/${imageName}`}
                        />
                      </div>

                      <div className='product-info-details'>
                        <div>개별 가격: {discountPrice.toLocaleString()}원</div>
                        <div>원하는 수량: {item.quantity}</div>
                        <div>
                          총 가격:{' '}
                          {(discountPrice * item.quantity).toLocaleString()}원
                        </div>
                        <div
                          className='product-name'
                          onClick={() => moveToProductRead(product.id)}
                        >
                          상품으로 이동하기
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
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
