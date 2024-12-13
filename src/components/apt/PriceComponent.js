import React, { useEffect, useState } from 'react';
import { getAptPriceWithSIze } from '../../api/AptAPI';
import './css/PriceComponent.css';

function PriceComponent({ apt_name, size, year }) {
  const [apartmentData, setApartmentData] = useState();

  useEffect(() => {
    getAptPriceWithSIze(apt_name, size, year)
      .then((response) => {
        // 데이터 가져오기
        const data = response.data || []; // 없으면 빈 배열로 설정

        // 거래 일자 기준으로 내림차순 정렬
        const sortedData = data.sort(
          (a, b) => new Date(b['거래 일자']) - new Date(a['거래 일자'])
        );
        setApartmentData(sortedData);

        console.log(data);
      })
      .catch((err) => {
        console.error('Error fetching apartment data:', err);
      });
  }, [apt_name, size, year]);

  return (
    <div className='list-container'>
      <div className='list-info'>
        {Array.isArray(apartmentData) && apartmentData.length > 0 ? (
          apartmentData.map((apt, index) => (
            <div key={index} className='apt-item'>
              <div className='apt-name'>
                <strong> 거래 일자: </strong> {apt['단지명']}
              </div>
              <div className='apt-type'>
                <strong>거래 금액:</strong> {apt['거래 금액 (만원)']} (만원)
              </div>
              <div className='apt-time'>
                <strong> 거래 일자: </strong> {apt['거래 일자']}
              </div>
              <div className='apt-type'>
                <strong>전용 면적 (㎡):</strong> {apt['전용 면적 (㎡)']}
              </div>
              <div className='apt-floor'>
                <strong>층:</strong> {apt['층']}
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

export default PriceComponent;
