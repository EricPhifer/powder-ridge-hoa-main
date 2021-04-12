// import { AiOutlineClockCircle as icon } from 'react-icons/ai';

// export default {
//   name: 'minutes',
//   title: 'Board Minutes',
//   type: 'document',
//   icon,
//   fields: [
//     {
//       name: 'name',
//       title: 'Name of Organization',
//       type: 'string',
//     },
//     {
//       name: 'meetingStart',
//       title: 'Date & Time of Meeting Start',
//       type: 'datetime',
//       options: {
//         timeFormat: 'h:mmA',
//         dateFormat: 'dddd, MMMM Do YYYY',
//       },
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'meetingStart',
//         maxLength: 100,
//       },
//     },
//     {
//       name: 'members',
//       title: 'Members in Attendance',
//       type: 'array',
//       of: [
//         {
//           name: 'boardMembers',
//           title: 'Board Members Present',
//           type: 'reference',
//           to: [{ type: 'boardMembers' }],
//         },
//         {
//           name: 'OtherMembers',
//           title: 'Other Members Present',
//           type: 'OtherMembers',
//         },
//       ],
//     },
//     {
//       name: 'quorum',
//       title: 'Number of Members Present',
//       type: 'number',
//       /* What is required minimum? */
//     },
//     {
//       name: 'quorumReached',
//       title: 'Minimum Number Achieved?',
//       type: 'boolean',
//       description: 'Required minimum present is 3',
//       /* What is required minimum? */
//     },
//     {
//       name: 'addMotion',
//       title: 'Motion Made',
//       type: 'array',
//       of: [
//         {
//           type: 'MotionMade',
//         },
//       ],
//     },
//     {
//       name: 'endTime',
//       title: 'Time Meeting Ended',
//       type: 'datetime',
//       options: {
//         timeFormat: 'h:mmA',
//         dateFormat: 'dddd, MMMM Do YYYY',
//       },
//     },
//     {
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [
//         {
//           type: 'string',
//         },
//       ],
//       // TODO: add a line break in description
//       description: `Keywords for search field. Enter tags with comma & space between words.`,
//       options: {
//         layout: 'tags',
//       },
//     },
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       date: 'meetingStart',
//       media: 'image',
//     },
//     prepare(selection) {
//       const { date } = selection;
//       return {
//         title: `${date.split('-')[1]} / ${date.split('-')[2].slice(0, 2)} / ${
//           date.split('-')[0]
//         }`,
//       };
//     },
//   },
// };
