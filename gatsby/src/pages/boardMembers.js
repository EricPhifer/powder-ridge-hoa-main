import { graphql } from 'gatsby';
import React from 'react';
import {
  CardStyles,
  ItemStyles,
  PageCardStyles,
} from '../styles/PageCardStyles';

export default function BoardMembers({ data }) {
  const members = data.members.nodes;
  return (
    <>
      <h2>Board Members</h2>
      <h5>
        <strong>Click</strong> or <strong>Tap</strong> an image to see more
        information
      </h5>
      <PageCardStyles>
        <CardStyles>
          {members.map((member) => (
            <ItemStyles key={member.id}>
              <div>
                <div className="memberName">{member.name}</div>
                <div className="position">{member.position}</div>
              </div>
              <div className="card">
                <div className="description">{member.description}</div>
                <div className="content">{member.email}</div>
                <a href={member.phone} className="content">
                  Call {member.name}
                </a>
              </div>
            </ItemStyles>
          ))}
        </CardStyles>
      </PageCardStyles>
    </>
  );
}

export const query = graphql`
  query {
    members: allSanityBoardMembers {
      nodes {
        name
        description
        email
        id
        phone
        position
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
