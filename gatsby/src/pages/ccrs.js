import React from 'react';
import styled from 'styled-components';
import CcrsItemGrid from '../components/CcrItemGrid';
import SEO from '../components/SEO';
import { PageCardStyles } from '../styles/PageCardStyles';

const FAQStyles = styled.div`
  .heroBG {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    .overlay {
      display: flex;
      flex-flow: column nowrap;
      h1 {
        margin: 30rem 1rem 0;
        color: #fff;
        font-size: 8vmin;
        text-shadow: 3px 3px 10px black;
        font-family: 'Canto', 'Gill Sans', 'Gill Sans MT', 'Calibri',
          'Trebuchet MS', sans-serif;
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
        }
      }
    }
    @media only screen and (max-width: 700px) {
      height: 75vh;
      .overlay {
        h1 {
          margin: 10rem 1rem;
          font-size: 4rem;
        }
        .startTriangle {
          bottom: 25vh;
          z-index: -1;
        }
      }
    }
  }
`;

export default function Ccrs() {
  return (
    <>
      <SEO title="Covenants, Conditions &amp; Restrictions" />
      <FAQStyles>
        <div className="heroBG">
          <div className="faqImg" />
          <div className="overlay">
            <h1>Covenants, Conditions &amp; Restrictions</h1>
            <div className="startTriangle" />
          </div>
        </div>
      </FAQStyles>
      <PageCardStyles>
        <CcrsItemGrid />
      </PageCardStyles>
    </>
  );
}
