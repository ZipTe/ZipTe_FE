import React, { useEffect, useState } from 'react';
import { getAptAI } from '../../api/AptAPI';
import './css/AIListComponent.css';

const initState = []; // 초기 상태를 빈 배열로 설정

function AIListComponent({ apartment_name, count, onAptClick }) {
  const [apartmentData, setApartmentData] = useState(initState);

  useEffect(() => {
    getAptAI(apartment_name, count)
      .then((response) => {
        // 응답에서 '추천 아파트' 배열만 추출
        const data = response.data['추천 아파트'] || []; // 없으면 빈 배열로 설정
        setApartmentData(data);
      })
      .catch((err) => {
        console.error('Error fetching apartment data:', err);
      });
  }, [apartment_name, count]);

  return (
    <div className='list-container'>
      <div className='list-info'>
        {Array.isArray(apartmentData) && apartmentData.length > 0 ? (
          apartmentData.map((apt, index) => (
            <div
              key={index}
              className='apt-item'
              onClick={() => onAptClick(apt['단지명'])}
            >
              <div className='apt-name'>
                <strong> 아파트 이름: </strong> {apt['단지명']}
              </div>
              <div className='apt-addr'>
                <strong>주소:</strong> {apt['주소']}
              </div>
            </div>
          ))
        ) : (
          <p>추천 아파트가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default AIListComponent;
