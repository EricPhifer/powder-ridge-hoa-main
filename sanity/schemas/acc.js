import { BiBuildingHouse as icon } from 'react-icons/bi';
// import PhoneNumberDiff from '../components/PhoneNumberDiff';

export default {
  name: 'acc',
  title: 'Architectural Control Committee',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Chairman Name',
      type: 'string',
      description: 'Name of the Chairman',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about the committee & what they do.',
    },
    {
      name: 'members',
      title: 'Members of ACC',
      type: 'array',
      of: [
        {
          name: 'AccMembers',
          title: 'Members of ACC',
          type: 'AccMembers',
        },
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'Email Address to Contact ACC',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      //   inputComponent: PhoneNumberDiff,
      description: 'Phone Number for ACC',
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
