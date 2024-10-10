import React from 'react';
import { Map } from 'react-kakao-maps-sdk';

function KakaoMap(props) {
  return (
    <Map
      center={{ lat: 37.41569817, lng: 127.128401667 }}
      style={{ width: '1000px', height: '600px' }}
      level={3}
    />
  );
}

export default KakaoMap;
