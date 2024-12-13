import React, { useEffect, useState } from 'react';
import { getAptInfo } from '../../api/AptAPI';
import KakaoMap from './KakaoMap';
import './css/ListComponent.css'; // CSS 파일 임포트

const initState = {
  kaptCode: '정보 없음',
  kaptName: '정보 없음',
  kaptAddr: '정보 없음',
  kaptMparea_60: 0,
  kaptMparea_135: 0,
  kaptMparea_136: 0,
  kaptMparea_85: 0,
  convenientFacility: '정보 없음',
  educationFacility: '정보 없음',
  welfareFacility: '정보 없음',
  subwayLine: '정보 없음',
  subwayStation: '정보 없음',
  kaptdWtimebus: '정보 없음',
  kaptdWtimesub: '정보 없음',
  kaptdPcnt: 0,
  kaptdPcntu: 0,
  Price_Per_Square_Meter: 0,
  location: {
    coordinates: ['정보 없음', '정보 없음'], // 기본값 설정
  },
};

function ListComponent({ apartment_name }) {
  const [apartmentData, setApartmentData] = useState({ ...initState });

  useEffect(() => {
    getAptInfo(apartment_name)
      .then((response) => {
        const data = response.data; // JSON 형식에 맞춰 데이터 접근
        const mergedData = { ...initState, ...data }; // 기본값과 응답 데이터 병합
        setApartmentData(mergedData);
      })
      .catch((err) => {
        console.error('Error fetching apartment data:', err);
      });
  }, [apartment_name]);

  const [longitude, latitude] = apartmentData.location?.coordinates || [
    '정보 없음',
    '정보 없음',
  ];

  return (
    <div className='list-container'>
      <div className='list-info'>
        <p>
          <strong> 아파트 이름: </strong> {apartmentData.kaptName}
        </p>
        <p>
          <strong>주소:</strong> {apartmentData.kaptAddr}
        </p>
        <p>
          <strong>60㎡ 이하:</strong> {apartmentData.kaptMparea_60}
        </p>
        <p>
          <strong>60㎡ ~ 85㎡ 이하:</strong> {apartmentData.kaptMparea_85}
        </p>
        <p>
          <strong>85㎡ ~ 135㎡ 이하:</strong> {apartmentData.kaptMparea_135}
        </p>
        <p>
          <strong>135㎡ 초과:</strong> {apartmentData.kaptMparea_136}
        </p>
        <p>
          <strong>편의시설:</strong> {apartmentData.convenientFacility}
        </p>
        <p>
          <strong>교육시설:</strong> {apartmentData.educationFacility}
        </p>
        <p>
          <strong>복지시설:</strong> {apartmentData.welfareFacility}
        </p>
        <p>
          <strong>버스 도착 시간:</strong> {apartmentData.kaptdWtimebus}
        </p>
        <p>
          <strong>지하철 도착 시간:</strong> {apartmentData.kaptdWtimesub}
        </p>
        <p>
          <strong>지하철 노선:</strong> {apartmentData.subwayLine}
        </p>
        <p>
          <strong>지하철역:</strong>{' '}
          {apartmentData.subwayStation || '정보 없음'}
        </p>
        <p>
          <strong>지하 주차 가능 대수:</strong> {apartmentData.kaptdPcnt}
        </p>
        <p>
          <strong>지상 주차 가능 대수:</strong> {apartmentData.kaptdPcntu}
        </p>
      </div>

      <div className='map-container'>
        <KakaoMap
          data={apartmentData}
          longitude={longitude}
          latitude={latitude}
        />
      </div>
    </div>
  );
}

export default ListComponent;
