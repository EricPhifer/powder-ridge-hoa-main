import React from 'react';
import CcrsItemGrid from '../components/CcrIemGrid';
import Search from '../components/Search';
import { PageCardStyles } from '../styles/PageCardStyles';

export default function Ccrs() {
  return (
    <>
      <h2>Covenants, Conditions &amp; Restrictions</h2>
      <Search />
      <PageCardStyles>
        <CcrsItemGrid />
      </PageCardStyles>
    </>
  );
}
