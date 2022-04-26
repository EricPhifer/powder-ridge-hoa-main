import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ItemStyles } from '../styles/PageCardStyles';

export default function FaqItemGrid() {
  const { faqs } = useStaticQuery(graphql`
    query {
      faqs: allSanityFaq {
        nodes {
          id
          question
          answer
        }
      }
    }
  `);
  const allFaqs = faqs.nodes;
  return (
    <ItemStyles>
      {allFaqs.map((faq) => (
        <div className="card" key={faq.id}>
          <div className="title">{faq.question}</div>
          <div className="content">{faq.answer}</div>
        </div>
      ))}
    </ItemStyles>
  );
}
