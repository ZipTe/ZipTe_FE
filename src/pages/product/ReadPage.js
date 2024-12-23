import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReadComponent from '../../components/products/ReadComponent';
import ProductOrderButtonComponent from '../../components/products/ProductOrderButtonComponent';
import './css/ReadPage.css';
import { getOne } from '../../api/ProductAPI'; // CSS 파일 import

const ReadPage = () => {
  const { pno } = useParams();
  const [product, setProduct] = useState(null); // product 상태 추가

  useEffect(() => {
    getOne(pno).then((response) => {
      setProduct(response.data); // product 데이터를 받아 상태에 저장
    });
  }, [pno]);

  if (!product) {
    return <div>Loading...</div>; // 데이터가 로딩 중이면 로딩 화면 표시
  }

  return (
    <div className='read-page-container'>
      <div className='read-page-title'>Products Read Page</div>
      <ReadComponent id={pno} product={product} />{' '}
      {/* ReadComponent에 product 전달 */}
      <ProductOrderButtonComponent product={product} />{' '}
      {/* OrderComponent에 product 전달 */}
    </div>
  );
};

export default ReadPage;
