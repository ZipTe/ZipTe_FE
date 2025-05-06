import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReadComponent from '../../components/products/ReadComponent';
import ProductOrderButtonComponent from '../../components/products/ProductOrderButtonComponent';
import './css/ReadPage.css';
import { getOne } from '../../api/ProductAPI'; // CSS 파일 import

const ReadPage = () => {
  const { pno } = useParams();
  const [serverData, setServerData] = useState(null); // serverData 상태 추가

  useEffect(() => {
    getOne(pno).then((response) => {
      setServerData(response.data); // serverData 데이터를 받아 상태에 저장
    });
  }, [pno]);

  if (!serverData) {
    return <div>Loading...</div>; // 데이터가 로딩 중이면 로딩 화면 표시
  }

  return (
    <div className='read-page-container'>
      <div className='read-page-title'>Products Read Page</div>
      <ReadComponent id={pno} serverData={serverData} />{' '}
      {/* ReadComponent에 serverData 전달 */}
      <ProductOrderButtonComponent serverData={serverData} />{' '}
      {/* OrderComponent에 serverData 전달 */}
    </div>
  );
};

export default ReadPage;
