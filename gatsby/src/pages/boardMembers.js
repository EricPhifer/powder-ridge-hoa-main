import React from 'react';
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

export const MemberStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  .container {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
  }
  .imageNamePosition {
    justify-self: center;
    align-self: center;
  }
  .imageNamePosition:hover {
    outline: 3px solid lightblue;
    outline-offset: 5px;
    cursor: pointer;
  }
  .card {
    display: grid;
    grid-column: 1 / span 2;
    padding: 0.5rem;
    border: 1px black solid;
    box-shadow: 5px 5px 10px black;
  }
  .position {
    padding-top: 0;
    padding-bottom: 1rem;
    font-size: 1.6rem;
  }
  .description {
    padding-bottom: 1rem;
  }
  .content {
    position: relative;
  }
  .memberName {
    padding-bottom: 0;
    font-weight: bold;
    font-size: 2.2rem;
  }
  .hide {
    display: none;
  }
`;

export const AccStyles = styled.div`
  margin: 2rem;
  border: 1px solid black;
  h4 {
    text-decoration: underline;
  }
  img {
    text-align: center;
  }
`;

/* eslint-disable */
export default function BoardMembers({ data }) {
  const members = data.members.nodes;
  return (
    <>
      <h2>Board Members</h2>
      <h5>
        <strong>Click</strong> or <strong>Tap</strong> an image to see more
        information
      </h5>
      <MemberStyles>
          {members.map((member) => (
            <div className="container" key={member._id}>
              <div className="imageNamePosition">
                <SanityImage
                  {...member.image}
                  alt={member.name}
                  width={410}
                  height={410}
                  />
                <div className="memberName">{member.name}</div>
                <div className="position">{member.position}</div>
              </div>
              <div className="card hide">
                <div className="description">{member.description}</div>
                <div className="content">{member.email}</div>
                <a href={member.phone} className="content">
                  Call {member.name}
                </a>
            </div>
            </div>
          ))}
      </MemberStyles>
      <AccStyles>
        <h4>Architectural Control Committee</h4>
        <img src="../assets/images/pexels-jopwell-1325766.jpg" alt="ACC Convening"/>
      </AccStyles>
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
        _id
        phone
        position
        image {
          asset {
            _id
          }
          ...ImageWithPreview
        }
      }
    }
  }
`;
