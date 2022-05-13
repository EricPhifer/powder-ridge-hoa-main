import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import MinutesItemGrid from '../components/MinutesItemGrid';
import SEO from '../components/SEO';
import sunset from '../assets/images/prhoa-sunset.jpg';

const MinuteStyles = styled.div`
  .heroBG {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    .minutesImg {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;xs
      left: 0;
      z-index: -1;
      background-image: url(${sunset});
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
      .minutesImg {
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

export default function Minutes() {
  return (
    <>
      <SEO title="Board Minutes" />
      <MinuteStyles>
        <div className="heroBG">
          <div className="minutesImg" />
          <div className="overlay">
            <h1>Board Minutes</h1>
            <div className="startTriangle" />
          </div>
        </div>
      </MinuteStyles>
      <MinutesItemGrid />
    </>
  );
}

export const query = graphql`
  query MinuteSearchQuery {
    search: allSanityMinutes {
      nodes {
        tags
        meetingStart
      }
    }
  }
`;
