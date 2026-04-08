export interface Transaction {
  id: string;
  date: string;
  header: string;
  credit?: number;
  debit?: number;
}

export interface TransactionsState {
  list: Transaction[];
}