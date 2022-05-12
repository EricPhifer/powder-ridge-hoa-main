import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --gray: #e4e4e4;
    --black: #2E2E2E;
    --green: #016B37;
    --white: #EDF4ED;
    --brown: #51291E;
    --lightgreen: #ABD1B5;
  }
  html {
    background-image: eggshell;
    background-size: 100%;
    background-attachment: fixed;
    font-size: 10px;
    overflow-x: hidden;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    display: flex;
    max-width: 800px;
    width: 100%;
    margin: 1.5rem auto;
    padding: 2rem 0;
    justify-content: center;
    box-shadow: 3px 3px 10px black;
    background: darkcyan;
    color: white;
    border: 0;
    border-radius: 40px;
    cursor: pointer;
    --cast: 2px;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.05s;
    a {
      text-decoration: none;
      color: white;
    }
    &:hover {
      border: 0.2rem solid #fff;s
    }
  }
  .userWelcome {
    padding: 2rem;
  }
  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;
