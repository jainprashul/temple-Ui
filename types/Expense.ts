export interface Expense {
  id ?: string;
  date : string;
  to : string;
  from : string;
  amount : number;
  description : string;
  mode : string;
}