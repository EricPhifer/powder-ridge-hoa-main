import React from 'react';
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import useForm from '../../utils/useForm';
import useContact from '../../utils/useContact';
import WhoToEmail from '../components/WhoToEmail';
import SEO from '../components/SEO';

const MemberStyles = styled.div`
  --columns: 4;
  display: grid;
  grid-template-columns: repeat(var(--columns), minmax(auto, 3fr));
  gap: 2rem;
  margin-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-shadow: 2px 2px 3px white;
  .image {
    justify-self: center;
    align-self: center;
    grid-column: 1 / span 1;
  }
  img {
    border: 3rem grey groove;
  }
  .card {
    justify-self: center;
    align-self: center;
    grid-column: 2 / span 3;
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
    text-decoration: none;
    color: white;
  }
  button {
    padding: 0.5rem 2rem;
    text-align: center;
    text-decoration: none;
    margin-top: 0.5rem;
  }
  button:hover {
    border: 0.2rem solid orangered;
    box-shadow: 5px 5px 10px black;
  }
  .memberName {
    padding-bottom: 0;
    font-weight: bold;
    font-size: 2.2rem;
  }
  @media (max-width: 900px) {
    --columns: 2;
    .image {
      grid-column: 1 / span 2;
    }
    .card {
      grid-column: 1 / span 2;
      padding-left: 1rem;
    }
    img {
      max-width: 40%;
      padding-left: 29%;
      border: none;
    }
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
    ul {
      width: 100%;
      text-align: center;
    }
    button {
      margin-left: 0;
      padding: 2px;
    }
  }
`;

const CommitteeStyles = styled.div`
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
  .contact {
    text-align: center;
    a {
      text-decoration: none;
      color: white;
    }
    button {
      padding: 0.4rem 3rem;
      border: 0.2rem dashed tomato;
      text-align: center;
      text-decoration: none;
    }
    button:hover {
      border: 0.2rem solid orangered;
      box-shadow: 5px 5px 10px black;
    }
    button:active {
      border: 0.2rem solid magenta;
      color: magenta;
    }
  }
  @media (max-width: 400px) {
    margin: 0;
    h2 {
      font-size: 1.75rem;
    }
    button {
      font-size: 1.5rem;
    }
    div {
      font-size: 1.75rem;
    }
    div strong {
      font-size: 1.75rem;
    }
  }
`;

const CommitteesStyles = styled.div``;

const FormStyles = styled.div`
  padding: 1.5rem;
  fieldset {
    padding: 3.5rem;
  }
  .formContainer {
    --columns: 12;
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
    gap: 1rem;
    input {
      border: 1px solid grey;
      padding-left: 5px;
    }
    .nameLabel {
      grid-column: 1 / span 1;
    }
    .emailLabel {
      grid-column: 1 / span 1;
    }
    .subjectLabel {
      grid-column: 1 / span 1;
    }
    .messageLabel {
      grid-column: 1 / span 1;
    }
  }
  #name {
    grid-column: 2 / span 5;
  }
  #email {
    grid-column: 2 / span 5;
  }
  #subject {
    grid-column: 1 / span 6;
  }
  textarea {
    grid-column: 1 / span 12;
  }
  .hide {
    display: none;
  }
  .contacting {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    color: #7c7c7c;
  }
  .submitButton {
    margin-top: 1.5rem;
    text-align: right;
    &:hover {
      border: 0.2rem solid orangered;
      box-shadow: 5px 5px 10px black;
    }
  }
  @media (max-width: 400px) {
    --columns: 6;
    fieldset {
      margin: 0;
      padding: 5px;
    }
    button {
      margin-top: 1rem;
    }
  }
  @media (max-width: 600px) {
    .formContainer {
      .nameLabel {
        grid-column: 1 / span 1;
      }
      .emailLabel {
        grid-column: 1 / span 1;
      }
    }
    #name {
      grid-column: 2 / span 5;
    }
    #email {
      grid-column: 2 / span 5;
    }
    #subject {
      grid-column: 1 / span 12;
    }
  }
`;

export default function BoardMembers({ data, pageContext }) {
  const members = data.members.nodes;
  const committees = data.committees.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  console.log(contact, error, loading, submitContact);
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <>
      <SEO title="Board Members" />
      <h1>Board Members</h1>
      {members.map((member) => (
        <MemberStyles key={member.id}>
          <div className="image">
            <SanityImage
              {...member.image}
              alt={member.name}
              height={1000}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                auto: 'format',
              }}
            />
          </div>
          <div className="card">
            <div className="memberName">{member.name}</div>
            <div className="position">{member.position}</div>
            <div className="description">{member.description}</div>
            <ul>
              <li>
                <button
                  type="button"
                  name={member.position}
                  id={member.id}
                  className="memberbtn"
                >
                  <a href="#formContainer">Email {member.name}</a>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  name={member.position}
                  id={member.id}
                  className="memberbtn"
                  onClick={() => console.log()}
                >
                  Call {member.name}
                </button>
              </li>
            </ul>
          </div>
        </MemberStyles>
      ))}
      <CommitteesStyles>
        {committees.map((committee) => (
          <CommitteeStyles>
            <div className="committeeContainer" key={committee.id}>
              <h2>{committee.name}</h2>
              <div className="committeeImage">
                <SanityImage
                  {...committee.image}
                  alt={committee.name}
                  style={{
                    width: '100%',
                    height: '40vh',
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <div>
                <strong>Chairman of the committee:</strong> {committee.chairman}
              </div>
              <div>
                <strong>What is the purpose of the committee?</strong> <br />
                {committee.description}
              </div>
              <div>
                <strong>Who are the members of the committee?</strong> <br />
                {committee.members.map((member) => member).join(', ')}
              </div>
              <div className="contact">
                <strong>How do I contact the committee?</strong>{' '}
                <div className="container">
                  <button
                    type="button"
                    name={committee.name}
                    id={committee.id}
                    className="committeebtn"
                  >
                    <a tel={committee.phone}>Call {committee.name}</a>
                  </button>
                </div>{' '}
                or{' '}
                <div className="container">
                  <button
                    type="button"
                    name={committee.name}
                    id={committee.id}
                    className="committeebtn"
                  >
                    <a href={committee.email}>Email {committee.name}</a>
                  </button>
                </div>
              </div>
            </div>
          </CommitteeStyles>
        ))}
      </CommitteesStyles>
      <FormStyles>
        <form
          className="container"
          id="formContainer"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <fieldset>
            <legend>Contact Us</legend>
            <div className="formContainer">
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={updateValue}
                placeholder="Your Name"
              />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={updateValue}
                placeholder="Your Email"
              />
              <label htmlFor="subject" className="subjectLabel">
                Subject
              </label>
              <input
                type="subject"
                name="subject"
                id="subject"
                value={values.subject}
                onChange={updateValue}
                placeholder="Reason for contacting?"
              />
              <label htmlFor="message" className="messageLabel">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={values.message}
                onChange={updateValue}
                rows="7"
                placeholder="What question or message do you have?"
              />
            </div>
            <WhoToEmail personToEmail={pageContext.name} />
            <button type="submit" className="submitButton" value="Submit">
              Submit Message
            </button>
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
        id
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
