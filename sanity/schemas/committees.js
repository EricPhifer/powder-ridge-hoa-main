import { HiUserGroup as icon } from 'react-icons/hi';
// import PhoneNumberDiff from '../components/PhoneNumberDiff';

export default {
  name: 'committees',
  title: 'Committees',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of Committee',
      type: 'string',
    },
    {
      name: 'chairman',
      title: 'Name of Chairman',
      type: 'string',
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
      name: 'members',
      title: 'Members',
      description: 'Names of Members',
      type: 'array',
      of: [
        {
          name: 'members',
          type: 'string',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this committee.',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'Email Address for Committee Contact',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      //   inputComponent: PhoneNumberDiff,
      description: 'Phone Number for Committee Contact',
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
