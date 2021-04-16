import FormatMoney from './FormatMoney';

export default {
  name: 'Expenses',
  title: 'Expenses',
  type: 'object',
  fields: [
    {
      name: 'nameOfExpense',
      title: 'Name of Expense',
      type: 'string',
    },
    {
      name: 'dayOfExpense',
      title: 'Date of Expense',
      type: 'date',
    },
    {
      name: 'amountOfExpense',
      title: 'Amount of Expense',
      type: 'number',
      inputComponent: FormatMoney,
    },
    {
      name: 'timeframe',
      title: 'How often does the expense occur? Choose one.',
      type: 'array',
      of: [
        {
          name: 'yearly',
          title: 'Yearly',
          type: 'boolean',
        },
        {
          name: 'monthly',
          title: 'Monthly',
          type: 'boolean',
        },
        {
          name: 'oneTime',
          title: 'One Time',
          type: 'boolean',
        },
      ],
    },
  ],
};
