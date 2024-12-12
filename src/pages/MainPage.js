import React, { useState } from 'react';
import styled from '@emotion/styled';
import BasicLayout from '../layouts/BasicLayout';

// CSS는 맨 위에 정의

const Logo = styled.img`
  margin-top: 20px;
  width: 130px;
`;

const Top_Container = styled.div`
  padding: 20px;
  margin-left: 150px;
  margin-right: 150px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Middle_Container = styled.div`
  padding: 20px;
  margin-left: 150px;
  margin-right: 150px;
  background-color: #d0d1d2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const APT_Button = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 200px;
  background-color: #ffee8c;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  //flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ffe880;
  }
`;

const ButtonMainText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ButtonSmallText = styled.div`
  font-size: 10px;
  color: #666;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  width: 200px;
  background-color: #282c34;
  color: white;
  border: wheat;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3c4049;
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  width: 70px;
  background-color: #333;
  border-radius: 8px;
  margin-right: 10px;
  color: white;
  border: wheat;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`검색어: ${searchTerm}`);
  };

  return (
    <BasicLayout>
      <Top_Container>
        <SearchContainer>
          <SearchInput
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='검색어를 입력하세요'
          />
          <SearchButton onClick={handleSearch}>검색</SearchButton>
        </SearchContainer>

        <APT_Button onClick={() => alert('아파트 선택됨')}>
          <ButtonMainText>아파트</ButtonMainText>
          <ButtonSmallText>가장 빠른 실거래가 알림!</ButtonSmallText>
        </APT_Button>

        <Button onClick={() => alert('빌라 선택됨')}>
          <ButtonMainText> 주택 / 빌라 </ButtonMainText>
          <ButtonSmallText>전월세부터 매매까지 모든 매물!</ButtonSmallText>
        </Button>

        <Button onClick={() => alert('주택 선택됨')}>
          <ButtonMainText>오피스텔</ButtonMainText>
          <ButtonSmallText> 다양한 정보와 다양한 매물 </ButtonSmallText>
        </Button>

        <Button onClick={() => alert('상가 선택됨')}>
          <ButtonMainText>원/투룸</ButtonMainText>
          <ButtonSmallText>모~든 전월세 매물을 한번에!</ButtonSmallText>
        </Button>
      </Top_Container>
      <Middle_Container>
        <div>나만의 지역을 찾을 수 있도록 설정해보세요</div>
        <div className='m-32'></div>
      </Middle_Container>
      <Top_Container>
        나만의 관심 지역 내 새로운 소식
        <div className='m-32'></div>
      </Top_Container>
      <Middle_Container>
        ZIPTE AI가 새로운 지역을 추천합니다!
        <div className='m-32'></div>
      </Middle_Container>
    </BasicLayout>
  );
}

export default MainPage;
