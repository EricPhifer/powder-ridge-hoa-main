import { MdFace as icon } from 'react-icons/md';
// import PhoneNumberDiff from '../components/PhoneNumberDiff';

export default {
  name: 'boardMembers',
  title: 'Board Members',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Board Members Name',
      type: 'string',
      description: 'Name of the Board Member',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'position',
      title: 'Position in HOA',
      type: 'string',
      description: 'What is the Board Members position in the HOA?',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this person.',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'Email Address for Board Member',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      //   inputComponent: PhoneNumberDiff,
      description: 'Phone Number for Board Member',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'position',
    },
  },
};

const boardMembers = 'boardMembers';

export { boardMembers };
