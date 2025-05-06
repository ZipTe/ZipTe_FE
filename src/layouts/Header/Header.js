import React from 'react';
import './css/Header.css'; // CSS 파일 import

export const Header = () => {
  return (
    <header className='header-container'>
      <nav className='nav'>
        <a className='nav-link' href='/cart'>
          장바구니
        </a>
        <a
          className='nav-link'
          href='http://localhost:8080/oauth2/authorization/naver'
        >
          네이버 로그인
        </a>
        <a
          className='nav-link'
          href='http://localhost:8080/oauth2/authorization/kakao'
        >
          카카오 로그인
        </a>
        <a
          className='nav-link'
          href='http://localhost:8080/oauth2/authorization/google'
        >
          구글 로그인
        </a>
        <a className='nav-link' href='/'>
          Home
        </a>
      </nav>
    </header>
  );
};
