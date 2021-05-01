import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PolicyStyles = styled.div`
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
`;

function countOrder(policies) {
  const counts = policies.map((policy) => policy);
  const sortedOrder = Object.values(counts).sort((a, b) => a.order - b.order);
  return sortedOrder;
}

export default function PrivacyPolicy({ data }) {
  const policies = data.policies.nodes;
  const order = countOrder(policies);
  return (
    <>
      <SEO title="Privacy Policy" />
      <PolicyStyles>
        <p className="updateDate">Last updated: April 22, 2021</p>
        {order.map((policy) => (
          <div key={policy._id}>
            <br />
            <h1>{policy.title}</h1>
            <br />
            <div>
              {policy.contents.map((content) => (
                <div>
                  <div>{content}</div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </PolicyStyles>
    </>
  );
}

export const query = graphql`
  query {
    policies: allSanityPrivacyPolicy {
      nodes {
        id
        order
        title
        contents
      }
    }
  }
`;
