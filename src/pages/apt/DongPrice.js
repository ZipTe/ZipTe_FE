import React, { useState } from 'react';
import DongComponent from '../../components/apt/PriceDongComponent';
import './css/DongPrice.css';

function DongPrice() {
  const [dong, setDong] = useState('야탑동');
  const [year, setYear] = useState(10);
  const [submittedDong, setSubmittedDong] = useState(''); // 제출된 동
  const [submittedYear, setSubmittedYear] = useState(0); // 제출된 기간

  // '동' 값 변경 핸들러
  const handleDongChange = (e) => {
    setDong(e.target.value);
  };

  // '기간(년)' 값 변경 핸들러
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // '확인' 버튼 클릭 시 제출된 값 반영
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedDong(dong); // 제출된 동 값 업데이트
    setSubmittedYear(year); // 제출된 기간 값 업데이트
  };

  return (
    <div className='container'>
      <div className='title'>원하는 아파트 정보 확인하기</div>
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
              min='0'
              max='100'
              className='input-field'
            />
          </div>
          <button type='submit' className='submit-btn'>
            확인
          </button>
        </form>

        {/* '확인' 버튼 클릭 후 반영된 값만 전달 */}
        {submittedDong && submittedYear && (
          <DongComponent dong={submittedDong} year={submittedYear} />
        )}
      </div>
    </div>
  );
}

export default DongPrice;
