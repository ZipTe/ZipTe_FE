import React, { useEffect } from 'react';
import './KakaoMap.css'; // 같은 폴더에 있는 KakaoMap.css 파일을 임포트

function KakaoMap({ data, longitude, latitude }) {
  useEffect(() => {
    if (!latitude || !longitude) return;

    const mapContainer = document.getElementById('map'); // 지도의 중심 좌표
    const mapOption = {
      center: new window.kakao.maps.LatLng(latitude, longitude), // 지도의 중심 좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도 생성
    const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 마커를 표시합니다
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(latitude, longitude),
    });

    // 커스텀 오버레이의 콘텐츠 설정
    const content = `
      <div class="wrap">
        <div class="info">
          <div class="title">
            ${data.kaptName}
            <div class="close" style="cursor: pointer;" title="닫기">닫기</div>
          </div>
          <div class="body">
            <div class="img">
              <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">
            </div>
            <div class="desc">
              <div class="jibun ellipsis">${data.kaptAddr}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    // 커스텀 오버레이 설정
    const overlay = new window.kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });

    // 마커 클릭 시 커스텀 오버레이 표시
    window.kakao.maps.event.addListener(marker, 'click', function () {
      overlay.setMap(map);
    });

    // 닫기 버튼 클릭 시 커스텀 오버레이 닫기
    const closeButton = document.querySelector('.close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        overlay.setMap(null); // 오버레이를 제거하여 닫기
      });
    }

    // cleanup 함수: 컴포넌트가 언마운트되거나 `latitude`, `longitude`가 변경될 때 호출
    return () => {
      overlay.setMap(null);
      marker.setMap(null);
    };
  }, [latitude, longitude, data]); // 의존성 배열에 latitude, longitude, data 추가

  return <div id='map' style={{ width: '100%', height: '400px' }}></div>;
}

export default KakaoMap;
