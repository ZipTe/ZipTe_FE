import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BasicLayout from '../../layouts/BasicLayout';
import './css/IndexPage.css';

function IndexPage() {
  const navigate = useNavigate();

  return (
    <BasicLayout>
      <h1 className='header'>상품 보기</h1>
      <div className='button-container'>
        <div className='button' onClick={() => navigate('list')}>
          LIST
        </div>
        <div className='button' onClick={() => navigate('add')}>
          ADD
        </div>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </BasicLayout>
  );
}

export default IndexPage;
