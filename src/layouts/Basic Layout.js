import React from 'react';
import PropTypes from 'prop-types';
// import BasicMenu from '../components/menus/BasicMenu';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './SideBar/Sidebar';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

const BasicLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Main>{children}</Main>
      </Content>
      <Footer />
    </Container>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
