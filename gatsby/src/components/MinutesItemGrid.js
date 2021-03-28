import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CardStyles, ItemStyles } from '../styles/PageCardStyles';

export default function MinutesItemGrid() {
  const { minutes } = useStaticQuery(graphql`
    query {
      minutes: allSanityMinutes {
        nodes {
          tags
          meetingStart
          id
          name
          addMotion {
            abstainersDissenters
            actionSteps
            approvedDenied
            debateAccount
            documents {
              asset {
                id
                assetId
              }
            }
            motionDescription
            motionName
            motionPerson
          }
          endTime
          members {
            ... on SanityBoardMembers {
              name
              slug {
                current
              }
            }
            ... on SanityOtherMembers {
              newMember
            }
          }
          quorum
          quorumReached
        }
      }
    }
  `);
  const allMinutes = minutes.nodes;
  return (
    <CardStyles>
      <ItemStyles>
        {allMinutes.map((minute) => (
          <div className="card" key={minute.id}>
            <div className="title">{minute.name}</div>
            <div className="content">{minute.meetingStart}</div>
          </div>
        ))}
      </ItemStyles>
    </CardStyles>
  );
}
