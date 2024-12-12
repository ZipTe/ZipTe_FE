import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, // 쿠키와 세션을 요청에 포함
});

export const getAptInfo = async (apartment_name) => {
  const res = await apiClient.get('/api/apt', {
    params: { apartment_name },
  });
  return res.data;
};
export const getAptAI = async (apartment_name, count) => {
  const res = await apiClient.get('/api/apt/AI', {
    params: { apartment_name, count }, // 두 값을 객체 안에 함께 전달
  });
  return res.data;
};
