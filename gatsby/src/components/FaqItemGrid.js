import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CardStyles, ItemStyles } from '../styles/PageCardStyles';

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
    <CardStyles>
      <ItemStyles>
        {allFaqs.map((faq) => (
          <div className="faqCard" key={faq.id}>
            <div className="question">{faq.question}</div>
            <div className="answer">{faq.answer}</div>
          </div>
        ))}
      </ItemStyles>
    </CardStyles>
  );
}
