import React from 'react';
import FaqItemGrid from '../components/FaqItemGrid';
import SEO from '../components/SEO';
import { PageCardStyles } from '../styles/PageCardStyles';

export default function Faqs() {
  return (
    <>
      <SEO title="Frequently Asked Questions" />
      <h1>Frequently Asked Questions</h1>
      <PageCardStyles>
        <FaqItemGrid />
      </PageCardStyles>
    </>
  );
}
