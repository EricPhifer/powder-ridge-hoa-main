import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  width: 100vw;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        {children}
        <Footer />
      </SiteBorderStyles>
    </>
  );
}
