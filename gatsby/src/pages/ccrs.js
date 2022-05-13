import React from 'react';
import styled from 'styled-components';
import CcrsItemGrid from '../components/CcrItemGrid';
import SEO from '../components/SEO';
import slopes from '../assets/images/prhoa-skiing-over-valley.jpg';

const CCRStyles = styled.div`
  .heroBG {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    .ccrImg {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-image: url(${slopes});
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
      .ccrImg {
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

export default function Ccrs() {
  return (
    <>
      <SEO title="Covenants, Conditions &amp; Restrictions" />
      <CCRStyles>
        <div className="heroBG">
          <div className="ccrImg" />
          <div className="overlay">
            <h1>Covenants, Conditions &amp; Restrictions</h1>
            <div className="startTriangle" />
          </div>
        </div>
      </CCRStyles>
      <CcrsItemGrid />
    </>
  );
}
