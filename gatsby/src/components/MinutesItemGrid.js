import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CardStyles, ItemStyles } from '../styles/PageCardStyles';

export default function MinutesItemGrid() {
  const { minutes } = useStaticQuery(graphql`
    query {
      minutes: allSanityMinutes {
        nodes {
          contributors
          meetingStart(formatString: "h:mma [on] MM/DD/YYYY")
          endTime(formatString: "h:mma [on] MM/DD/YYYY")
          id
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
          name
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
            <div className="title">Called to order by: {minute.name}</div>
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
              Those present are: **List of Members**
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
