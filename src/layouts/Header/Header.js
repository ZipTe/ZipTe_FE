import React from 'react';
import './css/Header.css'; // CSS 파일 import

export const Header = () => {
  return (
    <header className='header-container'>
      <nav className='nav'>
        <a className='nav-link' href='/cart'>
          장바구니
        </a>
        <a className='nav-link' href='#'>
          로그인 / 회원가입
        </a>
        <a className='nav-link' href='/'>
          Home
        </a>
      </nav>
    </header>
  );
};
