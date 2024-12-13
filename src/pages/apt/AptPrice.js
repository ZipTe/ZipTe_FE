import React, { useState } from 'react';
import PriceComponent from '../../components/apt/PriceComponent';
import './css/AptPrice.css';

function AptPrice() {
  const [formData, setFormData] = useState({
    apartmentName: 'LH동분당센트럴파크아파트',
    size: 84.99,
    year: 5,
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // 확인 버튼이 눌렸는지 여부를 추적

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'size' || name === 'year' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = () => {
    console.log('Updated form data:', formData);
    setIsSubmitted(false); // 이전 클릭 상태 초기화
    setIsSubmitted(true); // 확인 버튼 클릭 시 데이터가 제출됨
  };

  return (
    <div className='container'>
      <div className='title'>원하는 아파트 정보 확인하기</div>
      <div className='input-group'>
        <label className='label'>궁금한 아파트의 이름은?</label>
        <input
          type='text'
          name='apartmentName'
          value={formData.apartmentName}
          onChange={handleInputChange}
          placeholder='아파트 이름 입력'
          className='input'
        />
      </div>

      <div className='input-group'>
        <label className='label'>보고 싶은 사이즈는?</label>
        <input
          type='number'
          name='size'
          value={formData.size}
          onChange={handleInputChange}
          placeholder='아파트 평수 입력'
          className='input'
        />
      </div>

      <div className='input-group'>
        <label className='label'>몇 년의 기록이 필요한가요?</label>
        <input
          type='number'
          name='year'
          value={formData.year}
          onChange={handleInputChange}
          placeholder='5'
          className='input'
        />
      </div>

      <button onClick={handleSubmit} className='button'>
        확인
      </button>

      {/* isSubmitted가 true일 때만 PriceComponent를 렌더링 */}
      {isSubmitted && (
        <PriceComponent
          apt_name={formData.apartmentName}
          size={formData.size}
          year={formData.year}
        />
      )}
    </div>
  );
}

export default AptPrice;
