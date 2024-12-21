import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BasicLayout from '../../layouts/BasicLayout';

function indexPage() {
  const navigate = useNavigate();

  return (
    <BasicLayout>
      <div onClick={() => navigate('list')}> LIST</div>
      <div onClick={() => navigate('add')}> ADD</div>

      <div>
        <Outlet />
      </div>
    </BasicLayout>
  );
}

export default indexPage;
