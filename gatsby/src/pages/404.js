import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FourOhFourStyles = styled.div`
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
  }

  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #notfound .notfound:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.7);
    -webkit-box-shadow: 0px 0px 0px 30px rgba(255, 255, 255, 0.7) inset;
    box-shadow: 0px 0px 0px 30px rgba(255, 255, 255, 0.7) inset;
    z-index: -1;
  }

  .notfound {
    width: 100%;
    text-align: center;
    padding: 30px;
    line-height: 1.4;
  }

  .notfound .notfound-404 {
    position: relative;
    height: 200px;
  }

  .notfound .notfound-404 h1 {
    font-family: 'Passion One', cursive;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-shadow: 1rem 1rem 1rem black;
    font-size: 25rem;
    margin: 0px;
    color: #a4a4a4;
    text-transform: uppercase;
  }

  .notfound h2 {
    font-family: 'Muli', sans-serif;
    font-size: 26px;
    font-weight: 400;
    text-transform: uppercase;
    color: #222225;
    margin-top: 26px;
    margin-bottom: 20px;
  }

  .notfound a {
    font-family: 'Muli', sans-serif;
    display: inline-block;
    font-weight: 400;
    text-decoration: none;
    background-color: transparent;
    color: #222225;
    text-transform: uppercase;
    font-size: 14px;
  }

  @media only screen and (max-width: 480px) {
    .notfound .notfound-404 {
      height: 146px;
    }

    .notfound .notfound-404 h1 {
      font-size: 146px;
    }

    .notfound h2 {
      font-size: 22px;
    }
  }
`;

export default function FourOhFour() {
  return (
    <>
      <FourOhFourStyles id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! Page Not Found</h2>
          <Link to="/">Back To Homepage</Link>
        </div>
      </FourOhFourStyles>
      {/* Adapted from template made by Colorlib (https://colorlib.com) */}
    </>
  );
}
