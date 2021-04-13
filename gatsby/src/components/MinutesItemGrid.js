import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CardStyles, ItemStyles } from '../styles/PageCardStyles';

export default function MinutesItemGrid() {
  const { minutes } = useStaticQuery(graphql`
    query {
      minutes: allSanityMinutes {
        nodes {
          contributors
          endTime(formatString: "h:mm z")
          id
          meetingStart(formatString: "h:mm z")
          members {
            ... on SanityBoardMembers {
              id
              email
              phone
              name
            }
            ... on SanityOtherMembers {
              newMember
            }
          }
          name {
            ... on SanityBoardMembers {
              id
              email
              phone
              name
            }
            ... on SanityOtherMembers {
              newMember
            }
          }
          newBusiness
          oldBusiness
          teleconference
          tags
        }
      }
    }
  `);
  const allMinutes = minutes.nodes;
  return (
    <CardStyles>
      {allMinutes.map((minute) => (
        <ItemStyles>
          <div className="card" key={minute.id}>
            <div className="title">Called to order by: </div>
            <div className="content">
              Meeting began at: {minute.meetingStart}
            </div>
            <br />
            <div className="content">
              There were {minute.contributors} members that contributed proxy
              information.
            </div>
            <br />
            <div className="content">
              <strong>Old Business:</strong>
              <br /> {minute.oldBusiness}
            </div>
            <br />
            <div className="content">
              <strong>New Business:</strong> <br />
              {minute.newBusiness}
            </div>
            <br />
            <div className="content">Meeting ended at: {minute.endTime}</div>
            <br />
            <div className="content">Tags: {minute.tags}</div>
          </div>
        </ItemStyles>
      ))}
    </CardStyles>
  );
}
