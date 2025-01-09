import React, { useEffect } from 'react'
import { ArrowLeftCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchLedger } from 'store/context/bookingSlice';
import type { Ledger } from 'types/Ledger';
import DateSelector from '~/components/DateSelectors';
import { ledgerService } from 'services/ledgerService';
import type { Route } from './+types/Ledger';
import LedgerTable from './LedgerTable';


export function meta(_: Route.MetaArgs) {
  return [
    { title: "Ledger" },
    { name: "description", content: "Ledger details" },
  ];
}


const LedgerPage = (_: Route.ComponentProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { end, start } = useAppSelector(state => state.utility.time);
  useEffect(() => {
    // Fetch Ledger
    dispatch(fetchLedger({
      from: start,
      to: end
    }))
  }, [dispatch, end, start]);

  const data = useAppSelector(state => state.booking.ledger);

  const [selected, setSelected] = React.useState<Ledger | null>(null);


  return (
    <div>
      <div className="flex gap-1 items-center">
        <button onClick={() => navigate(-1)} className="btn btn-circle btn-link"> <ArrowLeftCircle /> </button>
        <h1 className='text-2xl font-semibold'>Donation Ledger</h1>
      </div>

      <hr className='py-2' />

      <LedgerTable data={data} setSelected={setSelected}>
        <DateSelector />
      </LedgerTable>

      <dialog className="modal" id='modal' >
        <div className='modal-box'>
          <h1>Are you sure you want to delete this record id {selected?.id}?</h1>
          <form method="dialog" className='modal-action'>
            <button className='btn btn-primary' onClick={async () => {
              // Delete the record
              await ledgerService.delete(selected?.id as string)
              dispatch(fetchLedger({
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

export default LedgerPage;
