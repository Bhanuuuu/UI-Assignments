import { Transaction } from '../features/transactions/types';

export const loadTransactions = (): Transaction[] => {
  try {
    const data = localStorage.getItem('transactions');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveTransactions = (data: Transaction[]): void => {
  localStorage.setItem('transactions', JSON.stringify(data));
};