import React, { useState } from 'react';
import DongComponent from '../../components/apt/PriceDongComponent';
import './css/DongPrice.css';

function DongPrice() {
  const [dong, setDong] = useState('야탑동');
  const [year, setYear] = useState(10);

  // '동' 값 변경 핸들러
  const handleDongChange = (e) => {
    setDong(e.target.value);
  };

  // '기간(년)' 값 변경 핸들러
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼이 제출될 때 동과 기간이 업데이트 되며, DongComponent는 그 값을 반영하여 다시 렌더링
  };

  return (
    <div className='dong-price-container'>
      <h2>아파트 가격 조회</h2>
      <form className='dong-price-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='dong'>동 이름:</label>
          <input
            type='text'
            id='dong'
            value={dong}
            onChange={handleDongChange}
            placeholder='동 이름을 입력하세요'
            className='input-field'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='year'>기간 (년):</label>
          <input
            type='number'
            id='year'
            value={year}
            onChange={handleYearChange}
            min='1'
            max='100'
            className='input-field'
          />
        </div>
        <button type='submit' className='submit-btn'>
          조회하기
        </button>
      </form>

      {/* 동 이름과 기간을 입력받아 DongComponent에 전달 */}
      <DongComponent dong={dong} year={year} />
    </div>
  );
}

export default DongPrice;
