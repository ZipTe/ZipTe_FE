import styled from '@emotion/styled';

const Container = styled.header`
    background-color: #282c34;
    color: white;
    padding: 2rem;
`;

const Logo = styled.img`
    width: 150px;
`;

const Nav = styled.nav`
    margin-top: 10px;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: auto;
    margin-right: 10px;
    float: right; /* 오른쪽 정렬 */

    &:hover {
        text-decoration: underline;
    }
`;

export const Header = () => {
  return (
    <Container>
      <Logo src=/Users/eedo_y/ZipTe/Logo/ZipTe.png />
      <Nav>
        <NavLink href="/">광고 문의</NavLink>
        <NavLink href="#">로그인 / 회원가입</NavLink>
        <NavLink href="#">Home</NavLink>
      </Nav>
    </Container>
  );
};
