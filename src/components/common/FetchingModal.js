import React from 'react';
import './css/FetchingModal.css'; // CSS 파일 import

const FetchingModal = () => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal-text'>Loading.....</div>
      </div>
    </div>
  );
};

export default FetchingModal;
