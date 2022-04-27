import React from 'react';
import { graphql, Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const HomeStyles = styled.div`
  .heroBG {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    img {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .overlay {
      display: flex;
      flex-flow: column nowrap;
      h1 {
        margin: 30vmin 1rem 0;
        color: #fff;
        font-size: 8vmin;
        text-shadow: 3px 3px 10px black;
        font-family: 'Canto', 'Palatino', 'Gill Sans', 'Gill Sans MT', 'Calibri',
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
      img {
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
  .contentContainer {
    width: 100vw;
    margin: 5vh auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    a {
      text-decoration: none;
      width: 250px;
      height: 250px;
      margin: 2rem;
      padding: 1rem;
      border: 2px solid lightgray;
      box-shadow: 3px 3px 10px black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        font-family: 'Canto', 'Palatino', 'Gill Sans', 'Gill Sans MT', 'Calibri',
          'Trebuchet MS', sans-serif;
        font-style: italic;
        font-weight: bold;
        font-size: 2.5rem;
        text-align: center;
        align-self: center;
      }
      p {
        text-align: center;
        font-size: 1.5rem;
      }
      @media (max-width: 400px) {
        .heroBG {
          h1 {
            font-size: 2.22rem;
          }
        }
        .homeContent {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (min-width: 401px) and (max-width: 600px) {
    .heroBG {
      h1 {
        font-size: 2.6rem;
      }
    }
  }
`;

export default function HomePage({ data }) {
  const homepage = data.homepage.nodes;
  return (
    <>
      <SEO title="Home Page" />
      {homepage.map((home) => (
        <HomeStyles key={home.id}>
          <div className="heroBG">
            <SanityImage
              {...home.image}
              alt="Powder Ridge Homes"
              id="homeImg"
              style={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
            <div className="overlay">
              <h1>{home.welcome}</h1>
              <div className="startTriangle" />
            </div>
          </div>
          <div className="contentContainer">
            {home.contents.map((info) => (
              <Link to={info.contentURL}>
                <h3>{info.heading}</h3>
                <p>{info.content}</p>
              </Link>
            ))}
          </div>
        </HomeStyles>
      ))}
    </>
  );
}

export const query = graphql`
  query {
    homepage: allSanityHomepage {
      nodes {
        id
        contents {
          content
          contentURL
          heading
        }
        image {
          asset {
            _id
          }
          ...ImageWithPreview
        }
        welcome
      }
    }
  }
`;
