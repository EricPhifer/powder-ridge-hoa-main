import React from 'react';
import { graphql } from 'gatsby';
import Search from '../components/Search';

export default function Minutes({ data }) {
  const minutes = data.minutes.nodes;
  return (
    <>
      <h2>Board Minutes</h2>
      <Search minutes={minutes} />
    </>
  );
}

export const query = graphql`
  query MinutesSearchQuery {
    minutes: allSanityMinutes {
      nodes {
        tags
        addMotion {
          motionPerson
          motionName
        }
        members {
          ... on SanityBoardMembers {
            id
            email
          }
          ... on SanityOtherMembers {
            _key
            _type
          }
        }
        meetingStart
      }
    }
  }
`;
