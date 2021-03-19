import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import { useStaticQuery, graphql } from 'gatsby';
import { debounce } from 'lodash';
import { DropDown, DropDownItem, SearchStyles } from '../styles/DropDown.js';

export default function Search() {
  const SEARCH_QUERY = useStaticQuery(graphql`
    query {
      allSanityMinutes {
        nodes {
          tags
          meetingStart
          id
          name
        }
      }
    }
  `);
  const [findItems, { loading, data, error }] = useLazyQuery(SEARCH_QUERY, {
    fetchPolicy: 'no-cache',
  });
  console.log(data);
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
      console.log('Input changed!');
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange() {
      console.log('Selected Item changed!');
    },
  });
/* eslint-disable */
  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'Search',
            placeholder: 'Search by keyword or name',
            id: 'search',
            className: 'loading',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        <DropDownItem>One</DropDownItem>
        <DropDownItem>Two</DropDownItem>
        <DropDownItem>Three</DropDownItem>
        <DropDownItem>Four</DropDownItem>
      </DropDown>
    </SearchStyles>
  );
}

// export const SEARCH_QUERY = graphql`
//   query SEARCH_QUERY($searchTerm: String!) {
//     searchTerms: allSanityMinutes(
//       where: {
//         OR: [
//           { tags_contains_i: $searchTerm }
//           { meetingStart_contains_i: $searchTerm }
//         ]
//       }
//     ) {
//       id
//       name
//       tags
//       meetingStart
//     }
//   }

// export default function Search() {
//   const [findItems, { loading, data, error }] = useLazyQuery(SEARCH_QUERY, {
//     fetchPolicy: 'no-cache',
//   });
//   const findItemsButChill = debounce(findItems, 350);
//   resetIdCounter();
//   const {
//     inputValue,
//     getMenuProps,
//     getInputProps,
//     getComboboxProps,
//   } = useCombobox({
//     items: [],
//     onInputValueChange() {
//       console.log('Input changed');
//       findItemsButChill({
//         variables: {
//           searchTerm: inputValue,
//         },
//       });
//     },
//     onSelectedItemChange() {
//       console.log('Selected Item changed');
//     },
//   );
//   return (
//     <SearchStyles>
//       <div {...getComboboxProps()}>
//         <input
//           {...getInputProps({
//             type: 'search',
//             placeholder: 'Placeholder Text',
//             id: 'search',
//             className: loading ? 'loading' : '',
//           })}
//         />
//         <ul>
//           {this.state.results.map((page) => (
//             <li key={page.id}>
//               <Link to={`/${page.path}`}>
//                 {page.title}
//               </Link>
//               {`: ${page.tags.join(',')}`}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </SearchStyles>
//     )
//   };
