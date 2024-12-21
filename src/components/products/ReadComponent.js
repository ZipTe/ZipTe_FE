import React, { useEffect, useState } from 'react';
import useCustomMove from '../../hooks/UseCustomMove';
import FetchingModal from '../common/FetchingModal';
import { API_SERVER_HOST, getOne } from '../../api/ProductAPI';
import './css/ReadComponent.css'; // CSS 파일 import

const initState = {
  id: 0,
  pname: '',
  pdesc: '',
  price: 0,
  stock: 0,
  uploadFileNames: [],
};

const host = API_SERVER_HOST;

function ReadComponent({ id }) {
  const [product, setProduct] = useState(initState);
  const [fetching, setFetching] = useState(false);
  const { moveToList, moveToOrder } = useCustomMove();

  useEffect(() => {
    setFetching(true);

    getOne(id).then((response) => {
      const data = response.data;
      const mergedData = { ...initState, ...data };
      console.log(mergedData);
      setFetching(false);
      setProduct(data);
    });
  }, [id]);

  return (
    <div className='read-component-container'>
      {fetching && <FetchingModal />}

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>상품 이름</div>
          <div className='product-info-value'>{product.pname}</div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>가격</div>
          <div className='product-info-value'>{product.price}</div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>상품 설명</div>
          <div className='product-info-value'>{product.pdesc}</div>
        </div>
      </div>

      <div className='product-info-container'>
        <div className='product-info-row'>
          <div className='product-info-label'>재고</div>
          <div className='product-info-value'>{product.stock}</div>
        </div>
      </div>

      <div className='image-container'>
        <div className='product-info-label'>사진</div>

        {product.uploadFileNames.map((imgFile, i) => (
          <img
            alt='product'
            key={i}
            src={`${host}/api/product/view/${imgFile}`}
          />
        ))}
      </div>

      <div className='button-container'>
        <button type='button' className='button-list' onClick={moveToList}>
          리스트 돌아가기
        </button>
        <button type='button' className='button-cart' onClick={moveToList}>
          장바구니에 담기
        </button>
        <button
          type='button'
          className='button-order'
          onClick={() => moveToOrder(id)}
        >
          주문하기
        </button>
      </div>
    </div>
  );
}

export default ReadComponent;
