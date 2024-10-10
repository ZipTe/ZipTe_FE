import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BasicLayout from '../../layouts/BasicLayout';

function IndexPage() {
  const navigate = useNavigate();

  const handleClickList = useCallback(() => {
    navigate({ pathname: 'get' });
  }, []);

  const handleClickTest = useCallback(() => {
    navigate({ pathname: 'test' });
  }, []);

  return (
    <BasicLayout>
      <div>APT 홈페이지</div>
      <div onClick={handleClickList}>아파트 정보 조회하기</div>
      <div onClick={handleClickTest}>Test</div>
      <div>
        <Outlet />
      </div>
    </BasicLayout>
  );
}

export default IndexPage;
