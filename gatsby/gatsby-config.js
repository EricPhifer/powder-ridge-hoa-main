import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Powder Ridge HOA',
    siteUrl: 'https://www.powderridgegrandmesa.com',
    description:
      'We help the Powder Ridge community in Grand Junction, CO remain ordered. We live life, together.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '1oaoktsj',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: '1oaoktsj',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'currentPageSearch',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          {
            allSanityCcrs {
              nodes {
                id
                refId
                ccr
                ccrContent
                slug {
                  current
                }
              }
            }
            allSanityFaq {
              nodes {
                id
                question
                answer
                slug {
                  current
                }
              }
            }
            allSanityMinutes {
              nodes {
                members {
                  ... on SanityBoardMembers {
                    name
                  }
                  ... on SanityOtherMembers {
                    newMember
                  }
                }
                name
                meetingStart
                id
                tags
                slug {
                  current
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['all fields'],
        store: ['all fields'],
        // TODO: create an array of arrays (of query categories) & flatten them into one using .flat()
        normalizer: ({ data }) =>
          data.allSanityMinutes.nodes.map((node) => ({
            id: node.id,
            path: node.slug.current,
            title: node.members,
            content: node.tags,
          })),
      },
    },
  ],
};
