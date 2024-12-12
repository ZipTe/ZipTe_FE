import React, { useState } from 'react';
import styled from '@emotion/styled';
import ListComponent from '../../components/apt/ListComponent';
import AIListComponent from '../../components/apt/AIListComponent';

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CountInput = styled.input`
  width: 50px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function MyAptInfo() {
  const [inputValue, setInputValue] = useState('야탑장미마을동부');
  const [apartmentName, setApartmentName] = useState('야탑장미마을동부');
  const [count, setCount] = useState(10); // 기본 추천 개수 설정

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCountChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10) || 1); // 최소 1개로 설정
    setCount(value);
  };

  const handleSubmit = () => {
    setApartmentName(inputValue);
  };

  return (
    <Container>
      <Title>원하는 아파트 정보 확인하기</Title>
      <Input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='아파트 이름 입력'
      />
      <Button onClick={handleSubmit}>확인</Button>

      {/* 추천 아파트 개수 입력 */}
      <div>
        <label>추천 아파트 개수: </label>
        <CountInput
          type='number'
          value={count}
          onChange={handleCountChange}
          min='1'
        />
      </div>

      <ListComponent apartment_name={apartmentName} />
      <AIListComponent apartment_name={apartmentName} count={count} />
    </Container>
  );
}

export default MyAptInfo;
