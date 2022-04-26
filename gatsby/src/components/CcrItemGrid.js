import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ItemStyles } from '../styles/PageCardStyles';

function countOrder(allCcrs) {
  const counts = allCcrs.map((ccr) => ccr);
  const sortedOrder = Object.values(counts).sort((a, b) => a.refId - b.refId);
  return sortedOrder;
}

export default function CcrsItemGrid() {
  const { ccrs } = useStaticQuery(graphql`
    query {
      ccrs: allSanityCcrs {
        nodes {
          ccr
          ccrContent
          refId
          id
        }
      }
    }
  `);

  const allCcrs = ccrs.nodes;
  const order = countOrder(allCcrs);

  return (
    <ItemStyles>
      {order.map((ccr) => (
        <div key={ccr.id} className="ccrCard">
          <div className="title">{ccr.ccr}</div>
          <div className="content">{ccr.ccrContent}</div>
          <div className="rightAlign">
            {'§'}
            {ccr.refId} {/* will become {ccr.refIdDisplay} */}
          </div>
        </div>
      ))}
    </ItemStyles>
  );
}
