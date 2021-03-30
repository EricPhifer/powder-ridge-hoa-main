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
    // {
    //   resolve: 'gatsby-plugin-local-search',
    //   options: {
    //     // A unique name for the search index. This should be descriptive of
    //     // what the index contains. This is required.
    //     name: 'pages',

    //     // Set the search engine to create the index. This is required.
    //     // The following engines are supported: flexsearch, lunr
    //     engine: 'lunr',

    //     // Provide options to the engine. This is optional and only recommended
    //     // for advanced users.
    //     //
    //     // Note: Only the flexsearch engine supports options.
    //     engineOptions: 'speed',

    //     // GraphQL query used to fetch all data for the search index. This is
    //     // required.
    //     query: `
    //       {
    //         allMarkdownRemark {
    //           nodes {
    //             id
    //             frontmatter {
    //               path
    //               title
    //             }
    //             rawMarkdownBody
    //           }
    //         }
    //       }
    //     `,

    //     // Field used as the reference value for each document.
    //     // Default: 'id'.
    //     ref: 'id',

    //     // List of keys to index. The values of the keys are taken from the
    //     // normalizer function below.
    //     // Default: all fields
    //     index: ['title', 'body'],

    //     // List of keys to store and make available in your UI. The values of
    //     // the keys are taken from the normalizer function below.
    //     // Default: all fields
    //     store: ['id', 'path', 'title'],

    //     // Function used to map the result from the GraphQL query. This should
    //     // return an array of items to index in the form of flat objects
    //     // containing properties to index. The objects must contain the `ref`
    //     // field above (default: 'id'). This is required.
    //     normalizer: ({ data }) =>
    //       data.allMarkdownRemark.nodes.map((node) => ({
    //         id: node.id,
    //         path: node.frontmatter.path,
    //         title: node.frontmatter.title,
    //         body: node.rawMarkdownBody,
    //       })),
    //   },
    // },
  ],
};
