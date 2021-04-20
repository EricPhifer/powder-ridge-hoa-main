import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { CardStyles, ItemStyles } from '../styles/PageCardStyles';
import formatMoney from '../../utils/formatMoney';

const TreasurerStyles = styled.div`
  padding: 1rem;
  margin: 0;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 4fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  section {
  }
  ul {
    list-style-type: none;
  }
  .full {
    display: grid;
    column-count: 4fr;
    div {
      border: 1px black solid;
      text-align: center;
      padding: 1rem;
    }
  }
  .quarter {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    div {
      padding: 0.7rem;
      border: 2px solid black;
    }
  }
`;

export default function MinutesItemGrid() {
  const { minutes } = useStaticQuery(graphql`
    query {
      minutes: allSanityMinutes {
        nodes {
          contributors
          endTime(formatString: "h:mma [on] MM/DD/YYYY")
          id
          insertReport {
            treasurersName
            totalBalance
            slug {
              current
            }
            notes
            id
            dateGenerated(formatString: "MM/DD/YYYY")
            approvedBudget
            expenses {
              amountOfExpense
              dayOfExpense
              nameOfExpense
              timeframe
            }
          }
          meetingStart(formatString: "h:mma [on] MM/DD/YYYY")
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
          tags
          teleconference
        }
      }
    }
  `);
  const allMinutes = minutes.nodes;
  console.log(allMinutes);
  return (
    <CardStyles>
      {allMinutes.map((minute, index) => (
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
              Those present were: {minute.members[index].newMember}
            </div>
            <br />
            <TreasurerStyles>
              The treasurers report is as follows:{' '}
              <section>
                <ul>
                  <li className="full">
                    <div>
                      <strong>Treasurer:</strong>{' '}
                      {minute.insertReport.treasurersName}
                    </div>
                  </li>
                  <li className="full">
                    <div>
                      <strong>Date:</strong> {minute.insertReport.dateGenerated}
                    </div>
                  </li>
                  <li className="quarter">
                    <div data-name="Date">
                      <strong>Date</strong>
                    </div>
                    <div data-name="Place">
                      <strong>Place</strong>
                    </div>
                    <div data-name="Cost">
                      <strong>Cost</strong>
                    </div>
                    <div data-name="Timeframe">
                      <strong>Timeframe</strong>
                    </div>
                  </li>
                  <li className="quarter">
                    <div>
                      {minute.insertReport.expenses[index].dayOfExpense}
                    </div>
                    <div>
                      {minute.insertReport.expenses[index].nameOfExpense}
                    </div>
                    <div>
                      {formatMoney(
                        minute.insertReport.expenses[index].amountOfExpense
                      )}
                    </div>
                    <div>{minute.insertReport.expenses[index].timeframe}</div>
                  </li>
                  <li className="full">
                    <div>
                      <strong>Total Balance:</strong>{' '}
                      {formatMoney(minute.insertReport.totalBalance)}
                    </div>
                  </li>
                  <li className="full">
                    <div>
                      <strong>Notes:</strong> {minute.insertReport.notes}
                    </div>
                  </li>
                  <li className="full">
                    <div>Budget was approved as shown.</div>
                  </li>
                </ul>
              </section>
            </TreasurerStyles>
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
