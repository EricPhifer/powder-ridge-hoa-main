import React from 'react';
import styled from 'styled-components';
import FaqItemGrid from '../components/FaqItemGrid';
import SEO from '../components/SEO';
import mountains from '../assets/images/prhoa-view-over-mountains.jpg';

const FAQStyles = styled.div`
  .heroBG {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    .faqImg {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-image: url(${mountains});
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
      .faqImg {
        height: 75vh;
      }
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

export default function Faqs() {
  return (
    <>
      <SEO title="Frequently Asked Questions" />
      <FAQStyles>
        <div className="heroBG">
          <div className="faqImg" />
          <div className="overlay">
            <h1>Frequently Asked Questions</h1>
            <div className="startTriangle" />
          </div>
        </div>
      </FAQStyles>
      <FaqItemGrid />
    </>
  );
}
