import axios from 'axios';
import { API_SERVER_HOST } from './ProductAPI';

const host = `${API_SERVER_HOST}/api/cart`;

export const postAdd = async (product) => {
  const header = { headers: { 'Content-Type': 'application/json' } };

  const res = await axios.post(`${host}`, product, header);
  // console.log(res.data);
  return res.data;
};

export const getCart = async (id) => {
  const res = await axios.get(`${host}/${id}`);
  console.log(res.data);
  return res.data;
};

export const deleteOne = async () => {
  const res = await axios.delete(`${host}`);
  return res.data;
};

export const putOne = async (pno, product) => {
  const header = { headers: { 'Content-Type': 'multipart/form-data' } };

  const res = await axios.put(`${host}/${pno}`, product, header);

  return res.data;
};
