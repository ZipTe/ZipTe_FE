import React, { useRef, useState } from 'react';
import ResultModal from '../common/ResultModal';
import FetchingModal from '../common/FetchingModal';
import useCustomMove from '../../hooks/UseCustomMove';
import { postAdd } from '../../api/ProductAPI';
import './css/AddComponent.css';

const initState = {
  pname: '',
  pdesc: '',
  price: 0,
  stock: 0,
  files: [],
};

function AddComponent() {
  const uploadRef = useRef();
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState(null);
  const { moveToList } = useCustomMove();

  // 상태 변경 핸들러
  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickAdd = () => {
    const files = uploadRef.current.files;
    const formData = new FormData();

    Array.from(files).forEach((file) => formData.append('files', file));

    formData.append('pname', product.pname);
    formData.append('pdesc', product.pdesc);
    formData.append('price', product.price);
    formData.append('stock', product.stock);

    setFetching(true);
    postAdd(formData)
      .then((data) => {
        console.log('등록 결과:', data.Result);
        closeModal(); // 상품 등록 후 리스트로 이동
      })
      .catch((error) => {
        console.error('상품 등록 실패:', error);
        setResult('등록 실패! 다시 시도하세요.');
      })
      .finally(() => setFetching(false));
  };

  // 모달 닫기
  const closeModal = () => {
    setResult(null);
    moveToList({ page: 1 });
  };

  return (
    <div className='add-container'>
      {fetching && <FetchingModal />}
      {result && (
        <ResultModal
          title='Product Add Result'
          content={`${result}번 상품 등록 완료`}
          callbackFn={closeModal}
        />
      )}
      <div className='add-title'>ADD PAGE</div>
      <div className='input-group'>
        <div className='label'>Product Name</div>
        <input
          className='input'
          name='pname'
          type='text'
          value={product.pname}
          onChange={handleChangeProduct}
        />
      </div>
      <div className='input-group'>
        <div className='label'>Description</div>
        <textarea
          className='input textarea'
          name='pdesc'
          rows='4'
          value={product.pdesc}
          onChange={handleChangeProduct}
        ></textarea>
      </div>
      <div className='input-group'>
        <div className='label'>Price</div>
        <input
          className='input'
          name='price'
          type='number'
          value={product.price}
          onChange={handleChangeProduct}
        />
      </div>
      <div className='input-group'>
        <div className='label'>Stock</div>
        <input
          className='input'
          name='stock'
          type='number'
          value={product.stock}
          onChange={handleChangeProduct}
        />
      </div>
      <div className='input-group'>
        <div className='label'>Files</div>
        <input
          className='input file-input'
          ref={uploadRef}
          type='file'
          multiple
        />
      </div>
      <div className='add-button'>
        <button className='btn' type='button' onClick={handleClickAdd}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddComponent;
