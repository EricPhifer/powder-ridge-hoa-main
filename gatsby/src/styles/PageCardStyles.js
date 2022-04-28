import styled from 'styled-components';

export const ItemStyles = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  position: relative;
  background-color: #fff;
  z-index: -1;
  h4 {
    text-align: center;
  }
  .card {
    padding: 2rem;
    margin: 1rem;
    border: 1px black solid;
    box-shadow: 5px 5px 10px black;
  }
  .ccrCard {
    padding: 0 2rem;
    margin: 0 1rem;
  }
  .title {
    font-weight: bold;
    padding-bottom: 1rem;
  }
  .position {
    padding-top: 0;
    padding-bottom: 1rem;
    font-size: 1.6rem;
  }
  .description {
    padding-bottom: 1rem;
  }
  .content {
    position: relative;
  }
  .rightAlign {
    text-align: right;
  }
  a {
    text-decoration: none;
    color: orangered;
  }
  a:hover {
    text-decoration: underline;
    color: orange;
  }
  .newBiz {
    padding-bottom: 0.7rem;
  }
  .oldBiz {
    padding-bottom: 0.7rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
