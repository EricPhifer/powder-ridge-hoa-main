import styled from 'styled-components';

export const PageCardStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @media (max-width: 400px) {
    display: block;
  }
`;
export const CardStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 2rem;
  padding-right: 2rem;
`;
export const ItemStyles = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;
  h4 {
    text-align: center;
  }
  .card {
    padding: 2rem;
    margin: 1rem;
    border: 1px black solid;
    box-shadow: 5px 5px 10px black;
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
