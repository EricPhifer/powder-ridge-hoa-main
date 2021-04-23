import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DateTime } from 'luxon';
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
          endTime
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
          meetingStart
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

  return (
    <CardStyles>
      {allMinutes.map((minute) => {
        const endMDT = DateTime.fromISO(minute.endTime, {
          zone: 'utc-6',
        }).toFormat('h:mma MM/dd/yyyy');
        const startMDT = DateTime.fromISO(minute.meetingStart, {
          zone: 'utc-6',
        }).toFormat('h:mma MM/dd/yyyy');
        return (
          <ItemStyles key={minute._id}>
            <div className="card">
              <div className="title">Called to order by: {minute.name}</div>
              <div className="content">Meeting began at: {startMDT}</div>
              <br />
              <div className="content">
                There were {minute.contributors} members that contributed proxy
                information.
              </div>
              <br />
              <div>
                Those present were:{' '}
                {minute.members.map((member) => member.newMember).join(', ')}
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
                        <strong>Date of Report:</strong>{' '}
                        {minute.insertReport.dateGenerated}
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
                    {minute.insertReport.expenses.map((expense) => (
                      <li key={expense.id} className="quarter">
                        <div>{expense.dayOfExpense}</div>
                        <div>{expense.nameOfExpense}</div>
                        <div>{formatMoney(expense.amountOfExpense)}</div>
                        <div>{expense.timeframe}</div>
                      </li>
                    ))}
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
                      <div>
                        Budget{' '}
                        {!minute.insertReport.approvedBudget
                          ? 'was not'
                          : 'was'}{' '}
                        approved as shown.
                      </div>
                    </li>
                  </ul>
                </section>
              </TreasurerStyles>
              <br />
              <div className="content">
                <strong>Old Business:</strong>
                <br />{' '}
                {minute.oldBusiness.map((oldBiz) => (
                  <div key={oldBiz.id} className="oldBiz">
                    {oldBiz}
                  </div>
                ))}
              </div>
              <br />
              <div className="content">
                <strong>New Business:</strong> <br />
                {minute.newBusiness.map((newBiz) => (
                  <div key={newBiz.id} className="newBiz">
                    {newBiz}
                  </div>
                ))}
              </div>
              <br />
              <div className="content">Meeting ended at: {endMDT}</div>
              <br />
              <div className="content">Tags: {minute.tags}</div>
            </div>
          </ItemStyles>
        );
      })}
    </CardStyles>
  );
}
