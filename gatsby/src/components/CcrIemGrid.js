import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CardStyles, ItemStyles } from '../styles/PageCardStyles';

export default function CcrsItemGrid() {
  const { ccrs } = useStaticQuery(graphql`
    query {
      ccrs: allSanityCcrs {
        nodes {
          ccr
          ccrContent
          refId
        }
      }
    }
  `);
  const allCcrs = ccrs.nodes;
  return (
    <CardStyles>
      <ItemStyles>
        {allCcrs.map((ccr) => (
          <div className="card" key={ccr.id}>
            <div className="title">{ccr.ccr}</div>
            <div className="content">{ccr.ccrContent}</div>
            <div className="rightAlign">{ccr.refId}</div>
          </div>
        ))}
      </ItemStyles>
    </CardStyles>
  );
}
