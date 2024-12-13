import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BasicLayout from '../../layouts/BasicLayout';
import './css/index.css';

function IndexPage() {
  const navigate = useNavigate();

  const handleClickList = useCallback(() => {
    navigate({ pathname: 'get' });
  }, []);

  const handleClickTest = useCallback(() => {
    navigate({ pathname: 'test' });
  }, []);

  const handleClickPrice = useCallback(() => {
    navigate({ pathname: 'price' });
  }, []);

  return (
    <BasicLayout>
      <div className='header'>APT 홈페이지</div>
      <div className='button-container'>
        <div className='button' onClick={handleClickList}>
          아파트 정보 조회하기
        </div>
        <div className='button' onClick={handleClickPrice}>
          아파트 가격 정보 조회하기
        </div>
        <div className='button' onClick={handleClickTest}>
          Test
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </BasicLayout>
  );
}

export default IndexPage;
