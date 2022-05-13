import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../assets/images/bg.png';

const NavStyles = styled.nav`
  background-color: #fff;
  padding: 1rem 3rem;
  box-shadow: 0 3px 10px black;
  position: relative;
  z-index: 1;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    .logoLeft {
      justify-self: start;
    }
    list-style: none;
    font-variant: small-caps;
  }
  .logo {
    width: 9rem;
    height: 7rem;
    margin: 1rem 0;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  a {
    font-size: 1.65rem;
    text-decoration: none;
    position: relative;
    &:hover {
      color: var(--green);
    }
    &:active {
      color: var(--lightgreen);
    }
    &:after {
      content: '';
      border-bottom: 2px solid black;
      left: 50%;
      position: absolute;
      top: 110%;
      transition: all 0.2s ease-in-out;
      width: 0;
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
    &[aria-current='page'] {
      color: var(--lightgreen);
    }
  }

  @media (max-width: 900px) {
    .logo {
      width: 7rem;
      height: 5rem;
    }
    ul {
      gap: 0.5rem;
    }
    a {
      font-size: 1.75rem;
    }
  }
  @media (max-width: 400px) {
    .logo {
      width: 7rem;
      height: 5rem;
    }
    ul {
      gap: 0;
      line-height: 0.9;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 374px) and (min-width: 320px) {
    ul {
      gap: 0;
      line-height: 0.7;
    }
    a {
      font-size: 1.2rem;
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 749px) {
    display: none;
  }
`;

const MobileNavStyles = styled.nav`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 750px) {
    display: none;
  }
  width: 100vw;
  height: 5rem;
  position: fixed;
  background-color: #fff;
  padding: 1rem 3rem;
  box-shadow: 0 3px 10px black;
  z-index: 1;
  a {
    color: var(--green);
    font-size: 1.5rem;
  }
  a[aria-current='page'] {
    color: var(--lightgreen);
  }
  .logo {
    width: 9rem;
    height: 7rem;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    left: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0;
    background: #000;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  #menu {
    height: 100vh;
    width: 75vw;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu li {
    transition-delay: 2s;
  }
  #menuToggle input:checked ~ ul {
    transform: none;
  }
  ul {
    list-style-type: none;
    li {
      padding: 3rem 1rem;
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
    }
    a:hover {
      opacity: 0.5;
    }
  }
`;

export default function Nav() {
  return (
    <>
      <NavStyles>
        <ul>
          <li className="logoLeft">
            <Link to="/">
              <div className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/ccrs">CCRs</Link>
          </li>
          <li>
            <Link to="/boardmembers">Board Members</Link>
          </li>
          <li>
            <Link to="/minutes">Board Minutes</Link>
          </li>
          <li className="residentAccess">
            <a href="https://login.powderridgegrandmesa.com" rel="noreferrer">
              Resident Access
            </a>
          </li>
        </ul>
      </NavStyles>
      <MobileNavStyles>
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <li className="logoLeft mobileLink">
              <Link to="/">
                <div className="logo" />
              </Link>
            </li>
            <li className="mobileLink">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="mobileLink">
              <Link to="/ccrs">CCRs</Link>
            </li>
            <li className="mobileLink">
              <Link to="/boardmembers">Board Members</Link>
            </li>
            <li className="mobileLink">
              <Link to="/minutes">Board Minutes</Link>
            </li>
            <li className="residentAccess">
              <a href="https://login.powderridgegrandmesa.com" rel="noreferrer">
                Resident Access
              </a>
            </li>
          </ul>
        </div>
      </MobileNavStyles>
    </>
  );
}
