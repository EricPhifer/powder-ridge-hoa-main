import React from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import { graphql, useStaticQuery } from 'gatsby';

export const SearchStyles = styled.div`
  text-align: center;
  div {
    display: grid;
    margin: 12px;
    grid-template-columns: 1fr;
  }
  input {
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 2rem;
    width: 40vw;
    margin-right: 2rem;
  }
  button:hover {
    box-shadow: 5px 5px 10px black;
  }
  @media (max-width: 400px) {
    input {
      width: 95%;
    }
  }
`;

export default function Search() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      faqs: allSanityFaq {
        nodes {
          question
          answer
          id
        }
      }
      ccrs: allSanityCcrs {
        nodes {
          refId
          ccrContent
          id
        }
      }
      minutes: allSanityMinutes {
        nodes {
          meetingStart
          tags
          id
        }
      }
    }
  `);

  const faqs = data.faqs.nodes;
  const ccrs = data.ccrs.nodes;
  const minutes = data.minutes.nodes;
  const mappedFaqs = faqs.map((faq) => [faq.question, faq.answer]);
  const mappedCcrs = ccrs.map((ccr) => [ccr.ccrContent, ccr.refId]);
  const mappedMinutes = minutes.map((minute) => [
    minute.tags,
    minute.meetingStart,
  ]);
  const combined = [...mappedCcrs, ...mappedFaqs, ...mappedMinutes];

  const fuse = new Fuse(combined);

  return (
    <SearchStyles>
      <div>
        <input name="search" placeholder="Search by Keywords" />
        <button type="button" onClick={() => fuse.search(combined)}>
          Search
        </button>
      </div>
    </SearchStyles>
  );
}
