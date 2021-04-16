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
      type: 'string',
    },
    {
      name: 'meetingStart',
      title: 'Date & Time of Meeting Start',
      type: 'datetime',
      options: {
        timeFormat: 'h:mmA',
        dateFormat: 'dddd, MMMM Do YYYY',
        timeZone: 'America/Denver',
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
      name: 'contributors',
      title: 'Number of People who Contributed Proxy Information',
      type: 'number',
    },
    {
      name: 'insertReport',
      title: 'Treasurers Report',
      type: 'reference',
      to: [
        {
          type: 'treasurersReport',
        },
      ],
    },
    {
      name: 'oldBusiness',
      title: 'Old Business Notes',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'newBusiness',
      title: 'New Business Notes',
      type: 'array',
      of: [{ type: 'text' }],
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
      description: `Enter tags with comma & space between keyword phrases.`,
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
