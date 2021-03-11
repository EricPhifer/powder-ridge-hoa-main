import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import { graphql } from 'gatsby';
import { debounce } from 'lodash';
import { DropDown, DropDownItem, SearchStyles } from '../styles/DropDown';

const SEARCH_QUERY = graphql`
  query SEARCH_QUERY($searchTerm: String!) {
    searchTerms: allSanityMinutes(
      where: {
        OR: [
          { tags_contains_i: $searchTerm }
          { meetingStart_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      tags
      meetingStart
    }
  }
`;

export default function Search() {
  const [findItems, { loading, data, error }] = useLazyQuery(SEARCH_QUERY, {
    fetchPolicy: 'no-cache',
  });
  const findItemsButChill = debounce(findItems, 350);
  resetIdCounter();
  const {
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
  } = useCombobox({
    items: [],
    onInputValueChange() {
      console.log('Input changed');
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange() {
      console.log('Selected Item changed');
    },
  });
  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: `Placeholder Text`,
            id: 'search',
            className: loading ? 'loading' : '',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        <DropDownItem>Hey</DropDownItem>
        <DropDownItem>Hey</DropDownItem>
        <DropDownItem>Hey</DropDownItem>
        <DropDownItem>Hey</DropDownItem>
      </DropDown>
    </SearchStyles>
  );
}
