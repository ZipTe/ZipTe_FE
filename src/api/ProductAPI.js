import axios from 'axios';

export const API_SERVER_HOST = 'http://localhost:8080';

const host = `http://localhost:8080/api/product`;

export const postAdd = async (product) => {
  const header = { headers: { 'Content-Type': 'multipart/form-data' } };

  // 쿠키를 포함하여 요청을 보냄
  const res = await axios.post(`${host}`, product, {
    headers: header,
    withCredentials: true, // 쿠키 포함
  });
  console.log(res.data);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  // 쿠키를 포함하여 요청을 보냄
  const res = await axios.get(`${host}/list`, {
    params: { page: page, size: size },
    withCredentials: true, // 쿠키 포함
  });
  return res.data;
};

export const getOne = async (pno) => {
  const res = await axios.get(`${host}/${pno}`, {
    withCredentials: true, // 쿠키 포함
  });
  return res.data;
};

export const deleteOne = async (pno) => {
  const res = await axios.delete(`${host}/${pno}`, {
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
