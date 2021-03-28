import React from 'react';
import FaqItemGrid from '../components/FaqItemGrid';
import Search from '../components/Search';
import { PageCardStyles } from '../styles/PageCardStyles';

export default function Faqs() {
  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <Search />
      <PageCardStyles>
        <FaqItemGrid />
      </PageCardStyles>
    </>
  );
}
