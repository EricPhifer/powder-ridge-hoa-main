import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Img } from 'gatsby-image';
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
              fluid {
                src
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
      <ItemStyles>
        {allMembers.map((member) => (
          <div className="card" key={member.id}>
            <div className="memberName">{member.name}</div>
            <div className="position">{member.position}</div>
            <div className="description">{member.description}</div>
            <div className="content">{member.email}</div>
            <div className="content">{member.phone}</div>
          </div>
        ))}
      </ItemStyles>
    </CardStyles>
  );
}
