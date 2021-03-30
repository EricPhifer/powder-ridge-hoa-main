import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import {
  CardStyles,
  ItemStyles,
  PageCardStyles,
} from '../styles/PageCardStyles';

export default function BoardMembers({ data, image }) {
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
                <SanityImage
                  {...image}
                  alt={member.name}
                  width={410}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
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
          ...ImageWithPreview
        }
      }
    }
  }
`;
