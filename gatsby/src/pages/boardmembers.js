import React from 'react';
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import useForm from '../../utils/useForm';
import useContact from '../../utils/useContact';
import WhoToEmail from '../components/WhoToEmail';
import SEO from '../components/SEO';
import skylift from '../assets/images/prhoa-skilift.jpg';

const HeroStyles = styled.div`
  .heroBG {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    .heroImg {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-image: url(${skylift});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .overlay {
      display: flex;
      flex-flow: column nowrap;
      h1 {
        margin: 30rem 1rem 0;
        color: #fff;
        font-size: 8vmin;
        text-shadow: 3px 3px 10px black;
        font-family: 'Canto', 'Palatino', 'Gill Sans', 'Gill Sans MT', 'Calibri',
          'Trebuchet MS', sans-serif;
        font-style: italic;
        font-weight: bold;
      }
      .startTriangle {
        width: 100vw;
        height: 20vh;
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(
            to bottom right,
            transparent 50%,
            #fff 0
          ),
          linear-gradient(to top right, #fff 50%, transparent 0);
        background-size: 50% 100%;
        background-repeat: no-repeat;
        background-position: left, right;
        @media only screen and (max-width: 700px) {
          height: 15vh;
          z-index: -1;
        }
      }
    }
    @media only screen and (max-width: 700px) {
      height: 75vh;
      .heroImg {
        height: 75vh;
      }
      .overlay {
        h1 {
          margin: 10rem 1rem;
          font-size: 4rem;
        }
      }
    }
  }
`;

const MemberStyles = styled.div`
  --columns: 4;
  max-width: 1200px;
  margin: 0 auto;
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
      width: 100%;
      display: inline;
      text-align: center;
      margin: 0.5rem;
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
      display: grid;
      margin-left: -15%;
      grid-template-columns: 1fr;
    }
    button {
      margin: 0.5rem;
      width: 100%;
    }
  }
  /* Hiding call button on non-mobile devices */
  .call {
    display: none;
  }
  @media (pointer: coarse) {
    .call {
      display: inline;
    }
  }
`;

const CommitteeStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
      width: 100%;
    }
    div {
      font-size: 1.75rem;
    }
    div strong {
      font-size: 1.75rem;
    }
  }
  /* Hiding call button on non-mobile devices */
  .call {
    display: none;
  }
  @media (pointer: coarse) {
    .call {
      display: block;
    }
  }
`;

const CommitteesStyles = styled.div``;

const FormStyles = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  legend {
    font-size: 3rem;
  }
  input,
  textarea {
    width: 99%;
  }
  input,
  button,
  textarea,
  select {
    margin: 5px 0;
    padding: 10px 0 10px 10px;
  }
  .hide {
    display: none;
  }
  select,
  button {
    width: 100%;
  }
  select {
    color: #7c7c7c;
  }
  .submitButton {
    margin-top: 1.5rem;
    &:hover {
      border: 0.2rem solid orangered;
      box-shadow: 5px 5px 10px black;
    }
  }
  @media (max-width: 400px) {
    input,
    textarea {
      width: 95%;
    }
    fieldset {
      margin: 0;
      padding: 5px;
    }
    button {
      margin-top: 1rem;
      width: 100%;
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
      <HeroStyles>
        <div className="heroBG">
          <div className="heroImg" />
          <div className="overlay">
            <h1>Board Members</h1>
            <div className="startTriangle" />
          </div>
        </div>
      </HeroStyles>
      {members.map((member) => (
        <MemberStyles key={member.id}>
          {member.image ? (
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
          ) : (
            <div className="noImage" />
          )}
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
                  className="memberbtn call"
                >
                  <a href={`tel:${member.phone}`}>Call {member.name}</a>
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
                    className="committeebtn call"
                  >
                    <a href={`tel:${committee.phone}`}>Call {committee.name}</a>
                  </button>
                </div>
                <div className="container">
                  <button
                    type="button"
                    name={committee.name}
                    id={committee.id}
                    className="committeebtn"
                  >
                    <a href="#formContainer">Email {committee.name}</a>
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
            <label htmlFor="contacting" className="contactingLabel">
              Contacting:
            </label>
            <select
              type="contacting"
              name="contacting"
              value={values.contacting}
              onChange={updateValue}
              id="contactList"
            >
              <option value="WhoToContact">Who Are You Contacting?</option>
              <option value="President">President</option>
              <option value="Secretary">Secretary</option>
              <option value="VicePresident">Vice President</option>
              <option value="Treasurer">Treasurer</option>
              <option value="Chair">Committee Chairman</option>
            </select>
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
