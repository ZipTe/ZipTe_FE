import axios from 'axios';

export const API_SERVER_HOST = 'http://localhost:8080';
const config = { 'Content-Type': 'application/json' };

const host = `${API_SERVER_HOST}`;

export const getAptInfo = async (apartment_name) => {
  const res = await axios.get(
    `${host}/api/apt/get?apartment_name=${apartment_name}`,
    config
  );
  return res.data;
};
