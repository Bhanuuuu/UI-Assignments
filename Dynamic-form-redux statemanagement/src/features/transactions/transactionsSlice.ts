import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { TransactionsState, Transaction } from './types';
import { loadTransactions, saveTransactions } from '../../utils/localStorage';

const initialState: TransactionsState = {
  list: loadTransactions(),
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: {
      reducer(state, action: PayloadAction<Transaction>) {
        state.list.push(action.payload);
        saveTransactions(state.list);
      },
      prepare(txn: Omit<Transaction, 'id'>) {
        return {
          payload: {
            id: nanoid(),
            ...txn,
          },
        };
      },
    },
    removeTransaction(state, action: PayloadAction<string>) {
      state.list = state.list.filter(t => t.id !== action.payload);
      saveTransactions(state.list);
    },
  },
});

export const { addTransaction, removeTransaction } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
