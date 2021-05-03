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
        apiVersion: '2021-04-30',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        useCdn: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: '1oaoktsj',
        dataset: 'production',
      },
    },
  ],
};
