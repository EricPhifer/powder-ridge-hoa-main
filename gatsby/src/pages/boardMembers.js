import React from 'react';
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import useForm from '../../utils/useForm';
import useContact from '../../utils/useContact';
import WhoToEmail from '../components/WhoToEmail';

const MemberStyles = styled.div`
  --columns: 4;
  display: grid;
  grid-template-columns: repeat(var(--columns), minmax(auto, 3fr));
  gap: 2rem;
  margin-top: 2rem;
  .image {
    justify-self: center;
    align-self: center;
    grid-column: 1 / span 1;
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
  button {
    padding: 0.5rem 2rem;
    border: 0.2rem dashed tomato;
    text-align: center;
    text-decoration: none;
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
  @media (min-width: 300px) and (max-width: 769) {
    --columns: 1;
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
    }
  }
`;

const CommitteesStyles = styled.div``;

const FormStyles = styled.div`
  padding: 1.5rem;
  fieldset {
    padding: 3.5rem;
  }
  .nameAndEmail {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr 5fr;
    gap: 1rem;
    input {
      border: 1px solid grey;
      padding-left: 5px;
    }
  }
  .hide {
    display: none;
  }
  .contacting {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    color: #7c7c7c;
  }
  .messageContainer {
    display: grid;
    grid-template-columns: 2fr;
    margin-top: 2rem;
    textarea {
      padding-left: 1rem;
    }
  }
  .submitButton {
    margin-top: 1.5rem;
    &:hover {
      border: 0.2rem solid orangered;
      box-shadow: 5px 5px 10px black;
    }
  }
  .mapleSyrup {
    display: none;
  }
`;

export default function BoardMembers({ data, pageContext }) {
  const members = data.members.nodes;
  const committees = data.committees.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    mapleSyrup: '',
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
      <h1>Board Members</h1>
      {members.map((member) => (
        <MemberStyles key={member.id}>
          <div className="image">
            <SanityImage
              {...member.image}
              alt={member.name}
              height={800}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
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
                  onClick={() => console.log()}
                >
                  Email {member.name.split(' ', 1)}
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
                  Call {member.name.split(' ', 1)}
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
        <form className="container" id="formContainer">
          <fieldset>
            <legend>Contact Us</legend>
            <div className="nameAndEmail">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={updateValue}
                placeholder="Your Name"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={updateValue}
                placeholder="Your Email"
              />
              <input
                type="mapleSyrup"
                name="mapleSyrup"
                id="mapleSyrup"
                value={values.mapleSyrup}
                onChange={updateValue}
                className="mapleSyrup"
              />
            </div>
            <WhoToEmail personToEmail={pageContext.name} />
            <div className="messageContainer">
              <textarea
                name="message"
                id="message"
                value={values.message}
                onChange={updateValue}
                rows="7"
                placeholder="Message"
              />
            </div>
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
