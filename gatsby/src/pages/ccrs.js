import React from 'react';
import CcrsItemGrid from '../components/CcrItemGrid';
import Search from '../components/Search';
import SEO from '../components/SEO';
import { PageCardStyles } from '../styles/PageCardStyles';

export default function Ccrs() {
  return (
    <>
      <SEO title="Covenants, Conditions &amp; Restrictions" />
      <h1>Covenants, Conditions &amp; Restrictions</h1>
      <Search />
      <PageCardStyles>
        <CcrsItemGrid />
      </PageCardStyles>
    </>
  );
}
