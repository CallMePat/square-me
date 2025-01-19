export interface Transaction {
    id: string;
    amount: number;
    type: 'Transfer' | 'Withdrawal' | 'Deposit' | 'Request';
    date: string;
    time: string;
    status: 'Processed' | 'Failed';
  }
  
  