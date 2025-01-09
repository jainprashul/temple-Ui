import React, { useEffect } from 'react'
import { ArrowLeftCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchExpenses } from 'store/context/bookingSlice';
import DateSelector from '~/components/DateSelectors';
import type { Route } from './+types/Ledger';
import type { Expense } from 'types/Expense';
import { expenseService } from 'services/expenseService';
import ExpenseTable from './ExpenseTable';


export function meta(_: Route.MetaArgs) {
  return [
    { title: "Expense List" },
    { name: "description", content: "Expense List" },
  ];
}


const ExpenseLedgerPage = (_: Route.ComponentProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { end, start } = useAppSelector(state => state.utility.time);
  useEffect(() => {
    // Fetch Ledger
    dispatch(fetchExpenses({
      from: start,
      to: end
    }))
  }, [dispatch, end, start]);

  const data = useAppSelector(state => state.booking.expenses);

  const [selected, setSelected] = React.useState<Expense | null>(null);


  return (
    <div>
      <div className="flex gap-1 items-center">
        <button onClick={() => navigate(-1)} className="btn btn-circle btn-link"> <ArrowLeftCircle /> </button>
        <h1 className='text-2xl font-semibold'>Expense Ledger</h1>
      </div>

      <hr className='py-2' />

      <ExpenseTable data={data} setSelected={setSelected}>
        <DateSelector />
      </ExpenseTable>

      <dialog className="modal" id='modal' >
        <div className='modal-box'>
          <h1>Are you sure you want to delete this record id {selected?.id}?</h1>
          <form method="dialog" className='modal-action'>
            <button className='btn btn-primary' onClick={async () => {
              // Delete the record
              await expenseService.delete(selected?.id as string)
              dispatch(fetchExpenses({
                from: start,
                to: end
              }))
            }}
            >Yes</button>
            <button className='btn'>No</button>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default ExpenseLedgerPage;
