import styled from 'styled-components';

export const PageCardStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
`;
export const CardStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
export const ItemStyles = styled.div`
  position: relative;
  h4 {
    text-align: center;
  }
  .card {
    width: 90%;
    margin: 2rem;
    padding: 2rem;
    border: 1px black solid;
    box-shadow: 5px 5px 10px black;
  }
  .title {
    font-weight: bold;
    padding-bottom: 1rem;
  }
  .memberName {
    padding-bottom: 0;
    font-weight: bold;
    font-size: 2.2rem;
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
`;
