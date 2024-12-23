import axios from 'axios';
import { API_SERVER_HOST } from './ProductAPI';

const host = `${API_SERVER_HOST}/api/cart`;

export const postAdd = async (product) => {
  const header = { headers: { 'Content-Type': 'application/json' } };

  const res = await axios.post(`${host}`, product, {
    headers: header,
    withCredentials: true, // 쿠키 포함
  });
  return res.data;
};

export const getCart = async (id) => {
  const res = await axios.get(`${host}/${id}`, {
    withCredentials: true, // 쿠키 포함
  });
  console.log(res.data);
  return res.data;
};

export const deleteOne = async () => {
  const res = await axios.delete(`${host}`, {
    withCredentials: true, // 쿠키 포함
  });
  return res.data;
};

export const putOne = async (pno, product) => {
  const header = { headers: { 'Content-Type': 'multipart/form-data' } };

  const res = await axios.put(`${host}/${pno}`, product, {
    headers: header,
    withCredentials: true, // 쿠키 포함
  });

  return res.data;
};
