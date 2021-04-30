import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function WhoToEmail({ personToEmail }) {
  const data = useStaticQuery(graphql`
    query {
      members: allSanityBoardMembers {
        nodes {
          name
          email
          id
        }
      }
      committees: allSanityCommittees {
        nodes {
          id
          email
          name
        }
      }
    }
  `);

  const members = data.members.nodes;
  const name = members.map((names) => names.name);
  const email = members.map((emails) => emails.email);
  const id = members.map((ids) => ids.id);

  function whichOne(keyId) {
    id.forEach((item, index) => {
      if (item === keyId) {
        return [name[index], email[index]];
      }
      return console.log('Unknown Member');
    });
  }

  return (
    <div>
      {!whichOne(id) ? (
        ' '
      ) : (
        <div key={id}>Your email will be sent to {name}</div>
      )}

      <div className="hide">email is output</div>
    </div>
  );
}
