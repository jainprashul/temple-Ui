export interface Ledger {
  id?: string;
  date: string;
  devoteeId: number;
  amount: number;
  /* type: 'credit' | 'debit'; */
  type: string; 
  /*
   mode: 'cash' | 'online'; 
   */
  mode : string;
  description: string;

  // Extra 
  name ?: string;
}


