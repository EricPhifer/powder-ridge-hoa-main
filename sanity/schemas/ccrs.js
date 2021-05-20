import { GrDocumentText as icon } from 'react-icons/gr';

export default {
  name: 'ccrs',
  title: 'Covenants, Conditions & Restrictions',
  type: 'document',
  icon,
  fields: [
    {
      name: 'ccr',
      title: 'CCR Title',
      type: 'string',
      description: 'What is the title for the CCR?',
    },
    {
      name: 'ccrContent',
      title: 'CCR Content',
      type: 'text',
      description: 'What is the CCR content?',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'ccr',
        maxLength: 100,
      },
    },
    {
      name: 'refIdDisplay',
      title: 'Document Reference to Display',
      type: 'string',
      description: 'What is the reference ID as it should be displayed?',
    },
    {
      name: 'refId',
      title: 'Document Reference',
      type: 'string',
      description: 'What is the reference ID as single decimal?',
    },
  ],
  preview: {
    select: {
      title: 'ccr',
      media: 'image',
      subtitle: 'refId',
    },
  },
};
