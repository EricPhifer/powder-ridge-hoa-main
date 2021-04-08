import React, { useState } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
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

export const index = {};
export const store = {};

export default function Search() {
  const [query, setQuery] = useState(null);
  const results = useFlexSearch(query, index, store);
  return (
    <SearchStyles>
      <div>
        <input
          initialValues={{ query: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setQuery(values.query);
            setSubmitting(false);
          }}
          placeholder="Search by Keywords"
        />
      </div>
    </SearchStyles>
  );
}
