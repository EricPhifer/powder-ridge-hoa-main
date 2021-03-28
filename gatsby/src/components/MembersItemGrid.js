import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CardStyles, ItemStyles } from '../styles/PageCardStyles';

export default function MembersItemGrid() {
  const { members } = useStaticQuery(graphql`
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
  `);
  const allMembers = members.nodes;
  return (
    <CardStyles>
      {allMembers.map((member) => (
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
  );
}
