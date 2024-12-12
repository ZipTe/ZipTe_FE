import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, // 쿠키와 세션을 요청에 포함
});

export const getAptInfo = async (kaptCode) => {
  const res = await apiClient.get('/api/apt', {
    params: { kaptCode },
  });
  return res.data;
};
