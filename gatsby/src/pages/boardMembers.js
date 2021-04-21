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
  const committee = data.committee.nodes;
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
        {committee.map((acc) => (
          <div className="accContainer" key={acc._id}>
            <h4>Architectural Control Committee</h4>
            <div className="accImage">
              <SanityImage
              {...acc.image}
              alt={acc.name}
              width={540}
              height={820}
              />
            </div>
            <div>Chairman of the ACC: {acc.name}</div>
            <div>What does the ACC do? {acc.description}</div>
            <div>Who are the members of the ACC? {' '} {acc.members.map((member) => member.memberName).join(', ')}</div>
            <div>How do I contact the ACC? {acc.phone}<br /> {acc.email}</div>
          </div>
        ))}
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
    committee: allSanityAcc {
    nodes {
      id
      email
      description
      name
      phone
      image {
        asset {
          _id 
        }
        ...ImageWithPreview
      }
      members {
        memberName
      }
    }
  }
  }
`;
