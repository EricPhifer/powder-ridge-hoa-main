import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const TermStyles = styled.div`
  word-wrap: break-word;
  padding-left: 5rem;
  padding-right: 5rem;
  .updateDate {
    text-align: center;
  }
  @media (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .call {
    display: none;
  }
  @media (pointer: coarse) {
    .call {
      display: block;
    }
  }
`;

function countOrder(terms) {
  const counts = terms.map((term) => term);
  const sortedOrder = Object.values(counts).sort((a, b) => a.order - b.order);
  return sortedOrder;
}

export default function TermsConditions({ data }) {
  const terms = data.terms.nodes;
  const order = countOrder(terms);
  const members = data.members.nodes;
  const mappedMembers = members.map((member) => member);
  return (
    <>
      <SEO title="Terms &amp; Conditions" />
      <TermStyles>
        <h1>Terms and Conditions</h1>
        <p className="updateDate">Last updated: April 30, 2021</p>
        {order.map((term) => (
          <div key={term.id}>
            <br />
            <h1>{term.title}</h1>
            <br />
            <div>
              {term.contents.map((content) => (
                <div>
                  <div>{content}</div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div>Powder Ridge Homeowners Association</div>
          <div>P.O. Box 4574</div>
          <div>Grand Junction, CO 81501 United States</div>
          <div className="call">
            <a href={mappedMembers[2].phone}>Contact Us by phone.</a>
          </div>
          <div>
            <a href={mappedMembers[2].email}>Contact Us by email.</a>
          </div>
        </div>
      </TermStyles>
    </>
  );
}

export const query = graphql`
  query {
    terms: allSanityTermsConditions {
      nodes {
        contents
        id
        order
        title
      }
    }
    members: allSanityBoardMembers {
      nodes {
        phone
        email
        id
      }
    }
  }
`;
