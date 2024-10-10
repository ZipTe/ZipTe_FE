import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <BasicLayout>
      <div className='text-3xl w-full flex'> Main Page</div>
    </BasicLayout>
  );
}

export default MainPage;
