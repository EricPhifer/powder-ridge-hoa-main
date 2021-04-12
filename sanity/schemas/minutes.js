import { AiOutlineClockCircle as icon } from 'react-icons/ai';

export default {
  name: 'minutes',
  title: 'Board Minutes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of Person that Called the Meeting to Order',
      type: 'array',
      of: [
        {
          name: 'boardMembers',
          title: 'Board member calling to order',
          type: 'reference',
          to: [{ type: 'boardMembers' }],
        },
        {
          name: 'OtherMembers',
          title: 'Other member calling to order',
          type: 'OtherMembers',
        },
      ],
    },
    {
      name: 'meetingStart',
      title: 'Date & Time of Meeting Start',
      type: 'datetime',
      options: {
        timeFormat: 'h:mmA',
        dateFormat: 'dddd, MMMM Do YYYY',
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'meetingStart',
        maxLength: 100,
      },
    },
    {
      name: 'teleconference',
      title: 'Via Video Chat?',
      type: 'boolean',
    },
    {
      name: 'members',
      title: 'Members in Attendance',
      type: 'array',
      of: [
        {
          name: 'boardMembers',
          title: 'Board Members Present',
          type: 'reference',
          to: [{ type: 'boardMembers' }],
        },
        {
          name: 'OtherMembers',
          title: 'Other Members Present',
          type: 'OtherMembers',
        },
      ],
    },
    {
      name: 'oldBusiness',
      title: 'Old Business Notes',
      type: 'text',
    },
    {
      name: 'newBusiness',
      title: 'New Business Notes',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: `Keywords for search field. Enter tags with comma & space between words.`,
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'endTime',
      title: 'Time Meeting Ended',
      type: 'datetime',
      options: {
        timeFormat: 'h:mmA',
        dateFormat: 'dddd, MMMM Do YYYY',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'meetingStart',
      media: 'image',
    },
    prepare(selection) {
      const { date } = selection;
      return {
        title: `${date.split('-')[1]} / ${date.split('-')[2].slice(0, 2)} / ${
          date.split('-')[0]
        }`,
      };
    },
  },
};
