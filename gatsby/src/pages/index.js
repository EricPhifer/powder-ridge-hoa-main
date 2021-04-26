import React from 'react';
import styled from 'styled-components';

export const HomeStyles = styled.div`
  h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
      sans-serif;
  }
  .heroBG {
    margin: 12rem;
    background-image: url('../assets/images/view-over-valley.jpg');
  }
`;

export default function HomePage() {
  return (
    <>
      <HomeStyles>
        <div className="heroBG">
          <h1>Welcome to Powder Ridge HOA!</h1>
        </div>
      </HomeStyles>
    </>
  );
}
