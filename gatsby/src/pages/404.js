import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const FourOhFourStyles = styled.div``;

export default function FourOhFour() {
  return (
    <>
      <FourOhFourStyles>
        <div id="notfound">
          <div className="notfound-bg" />
          <div className="notfound">
            <div className="notfound-404">
              <h1>404</h1>
            </div>
            <h2>Oops! Page Not Found</h2>
            <form className="notfound-search">
              <input type="text" placeholder="Search..." />
              <button type="button">Search</button>
            </form>
            <Link to="/">Back To Homepage</Link>
          </div>
        </div>
      </FourOhFourStyles>
    </>
  );
}
