import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(100%, minmax(250px, 1fr));
    align-items: center;
    text-align: center;
    align-content: center;
    font-size: 1.4rem;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: gray;
    &:hover {
      color: tomato;
    }
  }
`;

export default function Footer() {
  return (
    <footer>
      <FooterStyles>
        <ul>
          <li>&copy; Powder Ridge HOA {new Date().getFullYear()}</li>
          <li>
            <a href="https://ericphifer.com" target="_blank" rel="noreferrer">
              Designed &amp; Developed by Eric Phifer LLC
            </a>
          </li>
          <li>
            <div />
            <Link to="/privacyPolicy">Privacy Policy</Link> |{' '}
            <Link to="/termsConditions">Terms &amp; Condtions</Link>
          </li>
        </ul>
      </FooterStyles>
    </footer>
  );
}
