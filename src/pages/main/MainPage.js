import React, { useState } from 'react';
import './css/MainPage.css';
import BasicLayout from '../../layouts/BasicLayout';

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`검색어: ${searchTerm}`);
  };

  return (
    <BasicLayout>
      <div className='top-container'>
        <div className='search-container'>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='검색어를 입력하세요'
            className='search-input'
          />
          <button className='search-button' onClick={handleSearch}>
            검색
          </button>
        </div>

        <button className='apt-button' onClick={() => alert('아파트 선택됨')}>
          <div className='button-main-text'>아파트</div>
          <div className='button-small-text'>가장 빠른 실거래가 알림!</div>
        </button>

        <button className='button' onClick={() => alert('빌라 선택됨')}>
          <div className='button-main-text'>주택 / 빌라</div>
          <div className='button-small-text'>
            전월세부터 매매까지 모든 매물!
          </div>
        </button>

        <button className='button' onClick={() => alert('주택 선택됨')}>
          <div className='button-main-text'>오피스텔</div>
          <div className='button-small-text'>다양한 정보와 다양한 매물</div>
        </button>

        <button className='button' onClick={() => alert('상가 선택됨')}>
          <div className='button-main-text'>원/투룸</div>
          <div className='button-small-text'>모~든 전월세 매물을 한번에!</div>
        </button>
      </div>
      <div className='middle-container'>
        <div>나만의 지역을 찾을 수 있도록 설정해보세요</div>
        <div className='m-32'></div>
      </div>
      <div className='top-container'>
        나만의 관심 지역 내 새로운 소식
        <div className='m-32'></div>
      </div>
      <div className='middle-container'>
        ZIPTE AI가 새로운 지역을 추천합니다!
        <div className='m-32'></div>
      </div>
    </BasicLayout>
  );
}

export default MainPage;
