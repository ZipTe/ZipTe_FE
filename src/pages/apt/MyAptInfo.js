import React, { useState } from 'react';
import ListComponent from '../../components/apt/ListComponent';
import AIListComponent from '../../components/apt/AIListComponent';
import './css/MyAptInfo.css'; // CSS 파일 import

function MyAptInfo() {
  const [inputValue, setInputValue] = useState('야탑장미마을동부');
  const [apartmentName, setApartmentName] = useState('야탑장미마을동부');
  const [count, setCount] = useState(10); // 기본 추천 개수 설정

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCountChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10) || 1); // 최소 1개로 설정
    setCount(value);
  };

  const handleSubmit = () => {
    setApartmentName(inputValue);
  };

  // 아파트 이름 클릭 시 ListComponent와 inputValue 업데이트
  const handleAptClick = (name) => {
    setApartmentName(name); // 클릭한 아파트 이름으로 상태 업데이트
    setInputValue(name); // inputValue도 클릭한 아파트 이름으로 업데이트
  };

  return (
    <div className='container'>
      <div className='title'>원하는 아파트 정보 확인하기</div>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='아파트 이름 입력'
        className='input'
      />
      <button onClick={handleSubmit} className='button'>
        확인
      </button>

      {/* 추천 아파트 개수 입력 */}
      <div>
        <label>추천 아파트 개수: </label>
        <input
          type='number'
          value={count}
          onChange={handleCountChange}
          min='1'
          className='count-input'
        />
      </div>

      <ListComponent apartment_name={apartmentName} />
      <AIListComponent
        apartment_name={apartmentName}
        count={count}
        onAptClick={handleAptClick} // 클릭 이벤트 핸들러 전달
      />
    </div>
  );
}

export default MyAptInfo;
