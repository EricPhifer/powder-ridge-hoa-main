import React from 'react';
import { graphql } from 'gatsby';
import { PageCardStyles } from '../styles/PageCardStyles';
import MinutesItemGrid from '../components/MinutesItemGrid';
import SEO from '../components/SEO';

export default function Minutes() {
  return (
    <>
      <SEO title="Board Minutes" />
      <h1>Board Minutes</h1>
      <PageCardStyles>
        <MinutesItemGrid />
      </PageCardStyles>
    </>
  );
}

export const query = graphql`
  query MinuteSearchQuery {
    search: allSanityMinutes {
      nodes {
        tags
        meetingStart
      }
    }
  }
`;
