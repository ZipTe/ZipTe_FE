// src/api/orderAPI.js
import axios from 'axios';
import { API_SERVER_HOST } from './ProductAPI';


// 주문 생성 API
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(
      `${API_SERVER_HOST}/api/order`,
      orderData,
      {
        withCredentials: true, // 쿠키 포함
      },
    );
    return response.data; // 주문 성공 시 응답 데이터 반환
  } catch (error) {
    console.error('주문 생성 중 오류가 발생했습니다:', error);
    throw error; // 에러가 발생하면 상위 컴포넌트에서 처리할 수 있도록 throw
  }
};

// 추가적인 API 메소드들을 여기에 작성할 수 있습니다.
// 예: 주문 상세 조회, 주문 목록 조회 등.
