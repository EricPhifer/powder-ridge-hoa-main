import { AiOutlineHome as icon } from 'react-icons/ai';

export default {
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'welcome',
      title: 'Welcome Message',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Home Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
  ],
  preview: {
    select: {
      title: 'welcome',
      media: 'image',
    },
  },
};
