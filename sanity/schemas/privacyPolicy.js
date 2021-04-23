import { TiDocumentText as icon } from 'react-icons/ti';

export default {
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'contents',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'content',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      title: 'Order to Display',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'order',
    },
  },
};
