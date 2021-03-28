import React from 'react';
import MembersItemGrid from '../components/MembersIemGrid';
import { PageCardStyles } from '../styles/PageCardStyles';

export default function BoardMembers() {
  return (
    <>
      <h2>Board Members</h2>
      <PageCardStyles>
        <MembersItemGrid />
      </PageCardStyles>
    </>
  );
}
