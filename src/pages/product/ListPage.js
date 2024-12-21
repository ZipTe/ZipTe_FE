import React from 'react';
import ListComponent from '../../components/products/ListComponent';
import './css/ListPage.css';

function ListPage() {
  return (
    <div className='list-page-container'>
      <div className='list-page-title'>Products List Page</div>
      <div className='list-component-wrapper'>
        <ListComponent />
      </div>
    </div>
  );
}

export default ListPage;
