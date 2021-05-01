import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  --columns: 1;
  ul {
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
    align-items: center;
    justify-content: center;
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
  @media (max-width: 400px) {
    ul {
      font-size: 1rem;
      margin: 0;
      margin-top: 2rem;
      margin-left: -3rem;
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
            <Link to="/privacypolicy">Privacy Policy</Link> |{' '}
            <Link to="/termsconditions">Terms &amp; Condtions</Link>
          </li>
        </ul>
      </FooterStyles>
    </footer>
  );
}
