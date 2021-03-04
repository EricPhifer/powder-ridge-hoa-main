import dotenv from 'dotenv';

dotenv.config({ path: '.env ' });

export default {
  siteMetadata: {
    title: 'Powder Ridge HOA',
    siteUrl: 'https://www.powderridgegrandmesa.com',
    description:
      'We help the Powder Ridge community in Grand Junction, CO remain ordered. We live life, together.',
  },
  plugins: [
    [
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: '1oaoktsj',
          dataset: 'production',
          watchMode: true,
          token: process.env.SANITY_TOKEN,
        },
      },
    ],
    [
      {
        resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
        options: {
          // Fields to index
          fields: [`meetingStart`, `tags`],
          // How to resolve each field`s value for a supported node type
          resolvers: {
            // For any node of type MarkdownRemark, list how to resolve the fields` values
            MarkdownRemark: {
              title: (node) => node.frontmatter.title,
              tags: (node) => node.frontmatter.tags,
              path: (node) => node.frontmatter.path,
            },
          },
        },
      },
    ],
  ],
};
