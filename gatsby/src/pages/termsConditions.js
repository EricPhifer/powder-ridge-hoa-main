import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const TermStyles = styled.div`
  .updateDate {
    text-align: center;
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
  console.log(order);
  return (
    <>
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
          <div>851 Grand Ave.</div>
          <div>Grand Junction, CO 81501 United States</div>
          <div>
            <a href="970-261-0818">Contact Us by phone.</a>
          </div>
          <div>
            <a href="powderridgesecretary@gmail.com">Contact Us by email.</a>
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
  }
`;
