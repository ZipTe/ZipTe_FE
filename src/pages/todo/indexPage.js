import React, { useCallback } from 'react';
import BasicLayout from '../../layouts/Basic Layout';
import { Outlet, useNavigate } from 'react-router-dom';

function IndexPage() {
  const navigate = useNavigate();

  const handleClickList = useCallback(() => {
    navigate({ pathname: 'list' });
  }, []);

  const handleClickAdd = useCallback(() => {
    navigate({ pathname: 'add' });
  }, []);

  return (
    <BasicLayout>
      <div className='underline' onClick={handleClickList}>
        List
      </div>
      <div className='underline' onClick={handleClickAdd}>
        ADD
      </div>
      <div>
        <Outlet />
      </div>
    </BasicLayout>
  );
}

export default IndexPage;
