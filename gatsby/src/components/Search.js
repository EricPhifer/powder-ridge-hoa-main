import React from 'react';
import styled from 'styled-components';

export const SearchStyles = styled.div`
  text-align: center;
  div {
    margin: 12px;
  }
  input {
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 2rem;
    width: 40vw;
  }
`;

export default function Search() {
  return (
    <SearchStyles>
      <div>
        <input placeholder="Search by Keywords" />
      </div>
    </SearchStyles>
  );
}
