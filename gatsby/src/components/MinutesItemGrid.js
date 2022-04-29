import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import formatMoney from '../../utils/formatMoney';

const GridStyles = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.5rem;
  .card {
    margin: 3rem 1rem;
    padding: 1rem;
    border: 1px lightgray solid;
    box-shadow: 3px 3px 10px black;
    .title {
    }
    .content {
    }
  }
`;

const TreasurerStyles = styled.div`
  p {
    padding: 0 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
    .heading {
      background: #e4e4e4;
    }
  }
  .full {
    div {
      border-top: 1px black solid;
      border-bottom: 1px black solid;
      padding: 1rem;
    }
  }
  .dual {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid black;
    font-size: 1rem;
    div {
      padding: 0.5rem 0;
      place-self: center;
    }
  }
  // .thirds {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr;
  //   border: 1px solid black;
  //   font-size: 1rem;
  //   div {
  //     padding: 0.5rem 0;
  //     place-self: center;
  //   }
  // }
  // .quarter {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr 1fr;
  //   border: 1px solid black;
  //   font-size: 1rem;
  //   div {
  //     padding: 0.5rem;
  //   place-self: center;
  //   }
  // }
  // @media (max-width: 900px) {
  //   width: 100%;
  //   margin: 0;
  //   padding: 0;
  // }
  @media (max-width: 400px) {
    width: 100%;
    margin: 0;
    padding: 0;
    .dual {
      div {
        border: 0.5 solid black;
      }
    // .thirds {
    //   div {
    //     border: 0.5 solid black;
    //   }
    // .quarter {
    //   div {
    //     padding: 0;
    //     border: 0.5 solid black;
    //   }
    // }
  }
  // @media (max-width: 524px) and (min-width: 401px) {
  //   .quarter {
  //     font-size: 1.28rem;
  //     div {
  //       border: 0.5 solid black;
  //     }
  //   }
  // }
  // @media (max-width: 374px) and (min-width: 320px) {
  //   .quarter {
  //     font-size: 1.1rem;
  //     div {
  //       border: 0.5 solid black;
  //     }
  //   }
  // }
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
    <GridStyles>
      {allMinutes.map((minute) => {
        const endMDT = DateTime.fromISO(minute.endTime, {
          zone: 'utc-6',
        }).toFormat('h:mma MM/dd/yyyy');
        const startMDT = DateTime.fromISO(minute.meetingStart, {
          zone: 'utc-6',
        }).toFormat('h:mma MM/dd/yyyy');
        return (
          <div key={minute._id}>
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
                <p>The treasurers report is as follows:</p>
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
                    <li className="quarter thirds dual heading">
                      {/* <div data-name="Date">
                        <strong>Date</strong>
                      </div> */}
                      <div data-name="Place">
                        <strong>Place</strong>
                      </div>
                      <div data-name="Cost">
                        <strong>Cost</strong>
                      </div>
                      {/* <div data-name="Timeframe">
                        <strong>Time</strong>
                      </div> */}
                    </li>
                    {minute.insertReport.expenses.map((expense) => (
                      <li key={expense.id} className="quarter thirds dual">
                        {/* <div>{expense.dayOfExpense}</div> */}
                        <div>{expense.nameOfExpense}</div>
                        <div>{formatMoney(expense.amountOfExpense)}</div>
                        {/* <div>{expense.timeframe}</div> */}
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
          </div>
        );
      })}
    </GridStyles>
  );
}
