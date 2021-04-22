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
  .card {
    display: grid;
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
  .position {
    padding-top: 0;
    padding-bottom: 1rem;
    font-size: 1.6rem;
  }
  .description {
    padding-bottom: 1rem;
    padding-right: 0.3rem;
    padding-left: 0.3rem;
  }
  .content {
    position: relative;
    line-height: 1.3;
  }
  ul {
    list-style-type: none;
    li {
      width: 40%;
      display: inline;
      text-align: center;
    }
    li:last-child {
      margin-left: 2rem;
    }
  }
  a {
    padding: 0.5rem 2rem;
    border: 0.2rem dashed tomato;
    text-align: center;
    text-decoration: none;
  }
  a:hover {
    border: 0.2rem solid orangered;
    box-shadow: 5px 5px 10px black;
  }
  .memberName {
    padding-bottom: 0;
    font-weight: bold;
    font-size: 2.2rem;
  }
`;

export const CommitteeStyles = styled.div`
  margin: 2rem;
  border: 1px solid black;
  padding: 2rem;
  div {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    line-height: 1.43;
    strong {
      border-bottom: 2px lightgrey groove;
      padding: 0.2rem;
      font-size: 2.3rem;
    }
  }
  .contact a {
    padding: 0.4rem 3rem;
    border: 0.2rem dashed tomato;
    text-align: center;
    text-decoration: none;
  }
  .contact a:hover {
    border: 0.2rem solid orangered;
    box-shadow: 5px 5px 10px black;
  }
  .contact a:active {
    border: 0.2rem solid magenta;
  }
`;

export const CommitteesStyles = styled.div``;

export const FormStyles = styled.div`
  padding: 1.5rem;
  fieldset {
    padding: 3.5rem;
  }
  .nameAndEmail {
    display: grid;
    grid-template-columns: [name] 1fr [email] 1fr;
  }

  .contacting {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    color: #7c7c7c;
  }
  .messageContainer {
    display: grid;
    grid-template-columns: 2fr;
  }
  .submitButton {
    margin-top: 1.5rem;
  }
`;

/* eslint-disable */
export default function BoardMembers({ data }) {
  const members = data.members.nodes;
  const committees = data.committees.nodes;
  return (
    <>
      <h2>Board Members</h2>
      <MemberStyles>
          {members.map((member) => (
            <div className="container" key={member._id}>
              <div className="imageNamePosition">
                <SanityImage
                  {...member.image}
                  alt={member.name}
                  height={800}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    auto: "format",
                  }}
                  />
               </div> 
               <div className="card">
                 <div className="memberName">{member.name}</div>
                <div className="position">{member.position}</div>
                <div className="description">{member.description}</div>
                <ul>
                  <li>
                    <a href={member.email} className="content">Email</a>
                  </li>
                  <li>
                     <a href={member.phone} className="content">Call</a>
                  </li>
                </ul>
              </div>  
            </div>
          ))}
      </MemberStyles>
      <CommitteesStyles>
        {committees.map((committee) => (
          <CommitteeStyles>
          <div className="committeeContainer" key={committee._id}>
            <h2>{committee.name}</h2>
            <div className="committeeImage">
              <SanityImage
              {...committee.image}
              alt={committee.name}
              style={{
                width: "100%",
                height: "40vh",
                objectFit: "cover",
                auto: "format",
              }}
              />
            </div>
            <div><strong>Chairman of the committee:</strong> {committee.chairman}</div>
            <div><strong>What is the purpose of the committee?</strong> <br />{committee.description}</div>
            <div><strong>Who are the members of the committee?</strong> {' '} <br />{committee.members.map((member) => member).join(', ')}</div>
            <div className="contact"><strong>How do I contact the committee?</strong> <a href= {committee.phone}>Call</a> or <a href={committee.email}>Email</a></div>
          </div>
        </CommitteeStyles>
        ))}
      </CommitteesStyles>
      <FormStyles>
        <form className="container">
          <fieldset>
            <legend>Contact Us</legend>
            <div className="nameAndEmail">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email"/>
            </div>
            <div className="contacting">This message will contact *Someone*</div>
            <div className="messageContainer">
              <textarea name="message" rows="7" placeholder="Message" />
            </div>
            <input type="submit" className="submitButton" value="Submit"/>
          </fieldset>
        </form>
      </FormStyles>
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
    committees: allSanityCommittees {
    nodes {
      id
      email
      description
      chairman
      name
      phone
      image {
        asset {
          _id 
        }
        ...ImageWithPreview
      }
      members
    }
  }
  }
`;
