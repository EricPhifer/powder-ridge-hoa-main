import { AiOutlineClockCircle as icon } from 'react-icons/ai';

export default {
  name: 'minutes',
  title: 'Board Minutes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of Organization',
      type: 'string',
    },
    {
      name: 'dateTime',
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
        source: 'dateTime',
        maxLength: 100,
      },
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
          name: 'otherMembers',
          title: 'Other Members Present',
          type: 'string',
        },
      ],
    },
    {
      name: 'quorum',
      title: 'Number of Members Present',
      type: 'number',
      /* What is required minimum? */
    },
    {
      name: 'quorumReached',
      title: 'Minimum Number Achieved?',
      type: 'boolean',
      description: 'Required minimum present is 3',
      /* What is required minimum? */
    },
    {
      name: 'addMotion',
      title: 'Motion Made',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'motionName',
              title: 'Motion Made',
              type: 'string',
              description: 'Title of motion',
            },
            {
              name: 'motionPerson',
              title: 'Person Calling for Motion',
              type: 'string',
              description: 'Who called for the motion?',
            },
            {
              name: 'motionDescription',
              title: 'Explanation of Motion Made',
              type: 'string',
              description: 'Description of what the motion entails',
            },
            {
              name: 'debateAccount',
              title: 'Account of Debate',
              type: 'text',
              description: 'A brief account of any debates',
            },
            {
              name: 'approvedDenied',
              title: 'Approved or Denied?',
              type: 'boolean',
              description: 'Toggle right if approved, left if denied',
            },
            {
              name: 'abstainersDissenters',
              title: 'Who abstained/dissented?',
              type: 'string',
              description: 'Names of those who abstained or dissented',
            },
            {
              name: 'documents',
              title: 'Documents',
              type: 'file',
              description: 'Documents introduced with this motion',
            },
            {
              name: 'actionSteps',
              title: 'Future Action Steps',
              type: 'text',
              description: 'What action steps will occur next?',
            },
          ],
        },
      ],
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
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      // TODO: add a line break in description
      description: `Keywords for search field. Enter tags with comma & space between words.`,
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'dateTime',
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
