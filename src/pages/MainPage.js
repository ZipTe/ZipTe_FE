import React from 'react';
import BasicLayout from '../layouts/Basic Layout';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <BasicLayout>
      <div className='text-3xl w-full flex'> Main Page</div>
      <Link className={'text-2xl'} to={'/about'}>
        About
      </Link>
    </BasicLayout>
  );
}

export default MainPage;
