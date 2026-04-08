import { RootState } from '../../app/store';

export const selectTransactions = (state: RootState) =>
  state.transactions.list;

export const selectTotals = (state: RootState) => {
  const list = state.transactions.list;

  const credit = list.reduce(
    (sum, t) => sum + (t.credit || 0), 0
  );

  const debit = list.reduce(
    (sum, t) => sum + (t.debit || 0), 0
  );

  return {
    credit,
    debit,
    balance: credit - debit,
  };
};