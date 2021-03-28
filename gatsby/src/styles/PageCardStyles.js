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
  .faqCard {
    margin: 2rem;
    padding: 2rem;
    border: 1px black solid;
    border-radius: 2rem;
    box-shadow: 5px 5px 10px black;
  }
  .question {
    font-weight: bold;
    padding-bottom: 1rem;
  }
  .answer {
    position: relative;
  }
`;
