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
      title: 'How often will the expense occur? Yearly, monthly, etc.',
      type: 'string',
    },
  ],
};
