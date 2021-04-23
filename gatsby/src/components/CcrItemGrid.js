import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CardStyles, ItemStyles } from '../styles/PageCardStyles';

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
        }
      }
    }
  `);

  const allCcrs = ccrs.nodes;
  const order = countOrder(allCcrs);
  console.log(order);
  return (
    <CardStyles>
      <ItemStyles>
        {order.map((ccr) => (
          <div key={ccr.id} className="card">
            <div className="title">{ccr.ccr}</div>
            <div className="content">{ccr.ccrContent}</div>
            <div className="rightAlign">
              {'§'}
              {ccr.refId}
            </div>
          </div>
        ))}
      </ItemStyles>
    </CardStyles>
  );
}
