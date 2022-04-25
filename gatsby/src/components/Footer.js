import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  ul {
    margin: 0;
    padding: 8vmin 0;
    text-align: center;
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
          <Link to="/privacypolicy">Privacy Policy</Link> |{' '}
          <Link to="/termsconditions">Terms &amp; Conditions</Link>
        </li>
      </ul>
    </FooterStyles>
  );
}
