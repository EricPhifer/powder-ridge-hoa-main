import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  max-width: 95vw;
  margin: 6rem auto 2rem auto;
  margin-top: clamp(2rem, 10vw, 2rem);
  background: linear-gradient(grey, lightgrey, grey, lightgrey, grey);
  padding: 5px;
  padding: clamp(2px, 1vw, 8px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  h2 {
    text-decoration: underline;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
