export default {
  name: 'MotionMade',
  title: 'Motion Made',
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
};
