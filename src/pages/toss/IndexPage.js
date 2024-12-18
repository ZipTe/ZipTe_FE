import { Outlet, useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import BasicLayout from '../../layouts/BasicLayout';

function IndexPage() {
  const navigate = useNavigate();
  
  const handleClickPrice = useCallback(() => {
    navigate({ pathname: 'pay' });
  }, []);

  return (
    <BasicLayout>
      <div className='header'>결제 페이지</div>
      <div className='button-container'>
        <div className='button' onClick={handleClickPrice}>
          결제하기
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </BasicLayout>
  );
}

export default IndexPage;
