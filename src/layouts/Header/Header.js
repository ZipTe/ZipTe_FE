import React from 'react';
import './css/Header.css';

export const Header = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/logout', {
        method: 'POST',
        credentials: 'include', // 쿠키(특히 HttpOnly) 포함시키기
      });

      if (response.ok) {
        alert('로그아웃 되었습니다.');
        window.location.href = '/';
      } else {
        const errorText = await response.text();
        console.error('로그아웃 실패:', response.status, errorText);
        alert('로그아웃 실패');
      }
    } catch (error) {
      console.error('로그아웃 중 에러 발생:', error);
      alert('오류가 발생했습니다.');
    }
  };

  return (
    <header className='header-container'>
      <nav className='nav'>
        <a className='nav-link' href='/cart'>
          장바구니
        </a>
        <a
          className='nav-link'
          href='https://zipte-dev.store/oauth2/authorization/naver'
        >
          집터 네이버 로그인
        </a>
        <a
          className='nav-link'
          href='http://localhost:8080/oauth2/authorization/naver'
        >
          로컬 네이버 로그인
        </a>
        <a
          className='nav-link'
          href='https://zipte-dev.store/oauth2/authorization/kakao'
        >
          집터 카카오 로그인
        </a>
        <a
          className='nav-link'
          href='https://kikihi.store/oauth2/authorization/kakao'
        >
          키키하이 카카오 로그인
        </a>
        <a
          className='nav-link'
          href='http://localhost:8080/oauth2/authorization/kakao'
        >
          로컬 카카오 로그인
        </a>
        <a
          className='nav-link'
          href='https://zipte-dev.store/oauth2/authorization/google'
        >
          집터 구글 로그인
        </a>
        <a
          className='nav-link'
          href='https://kikihi.store/oauth2/authorization/google'
        >
          키키하이 구글 로그인
        </a>
        <a
          className='nav-link'
          href='http://localhost:8080/oauth2/authorization/google'
        >
          로컬 구글 로그인
        </a>
        <button className='nav-link' onClick={handleLogout}>
          로그아웃
        </button>
        <a className='nav-link' href='/'>
          Home
        </a>
      </nav>
    </header>
  );
};
