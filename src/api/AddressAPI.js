import axios from 'axios';
import { API_SERVER_HOST } from './ProductAPI';

const deliveryHost = `${API_SERVER_HOST}/api/deliveryList`;

// 주소 추가 함수
export const addDelivery = async (addressData) => {
  try {
    const res = await axios.post(deliveryHost, addressData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true, // 쿠키 포함
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('주소 추가 중 오류가 발생했습니다:', error);
    throw error;
  }
};

export const getDeliveryList = async (memberId) => {
  try {
    const res = await axios.get(`${deliveryHost}/member/${memberId}`, {
      withCredentials: true, // 쿠키 포함
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('주소 목록을 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }
};

export const getOne = async (Id) => {
  try {
    const response = await axios.get(
      `${API_SERVER_HOST}/api/deliveryList/${Id}`
    );
    return response.data;
  } catch (error) {
    console.error('기본 주소를 가져오는 데 오류가 발생했습니다.', error);
    throw error;
  }
};
