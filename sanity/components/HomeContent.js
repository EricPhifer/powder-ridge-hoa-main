export default {
  name: 'HomeContent',
  title: 'Home Page Content',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'contentURL',
      title: 'Link to URL',
      type: 'url',
    },
  ],
};
