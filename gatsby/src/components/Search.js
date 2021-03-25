import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

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
  return <div>Search Bar</div>;
}
