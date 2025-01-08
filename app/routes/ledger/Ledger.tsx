import React, { useEffect, useMemo } from 'react'
import { ArrowLeftCircle, PrinterIcon, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchLedger } from 'store/context/bookingSlice';
import type { Ledger } from 'types/Ledger';
import type { ColumnDef } from '@tanstack/react-table';
import Table from '~/components/Table';
import DateSelector from '~/components/DateSelectors';
import { ledgerService } from 'services/ledgerService';
import type { Route } from './+types/Ledger';


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

  const [selected , setSelected] = React.useState<Ledger | null>(null);



  const columns = useMemo(() => [

    {
      header: 'Date',
      accessorKey: 'date'
    },
    {
      header: 'Name',
      accessorKey: 'name',
      cell: ({ row, getValue }) => <button className={'btn btn-link btn-sm'} onClick={() => {
        navigate(`/devotee/${row.original.devoteeId}`)
      }
      }>{getValue() as any}</button>
    },
    {
      header: "Receipt",
      accessorKey: 'id',
    },
    {
      header: 'Amount',
      accessorKey: 'amount',
      cell: ({ getValue }) => <span>{
        new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR'
        }).format(getValue() as any)
      }</span>
    },
    {
      header: 'Type',
      accessorKey: 'type',
      cell: ({ getValue }) => <span>{(getValue() as string)?.toUpperCase()}</span>
    },
    {
      header: 'Mode',
      accessorKey: 'mode',
      cell: ({ getValue }) => <span>{(getValue() as string)?.toUpperCase()}</span>
    },
    {
      header: 'Actions',
      accessorKey: 'id',
      cell: ({getValue}) =>
        <div className='join'>
          <button className='btn btn-link join-item btn-circle btn-sm' onClick={() => {
            navigate(`/app/deposit-slip/${getValue()}`)
          }}>
            <PrinterIcon />
          </button>
          <button className="btn btn-sm btn-circle btn-link text-red-600" onClick={() => {
            (document.getElementById('modal') as HTMLDialogElement)?.showModal()
          }}>
            <Trash2 />
          </button>
        </div>
    },

  ] satisfies ColumnDef<Ledger>[] , [navigate]);

  return (
    <div>
      <div className="flex gap-1 items-center">
        <button onClick={() => navigate(-1)} className="btn btn-circle btn-link"> <ArrowLeftCircle /> </button>
        <h1 className='text-2xl font-semibold'>Ledger</h1>
      </div>

      <hr className='py-2' />

      <Table data={data} columns={columns} onRowClick={(row) => {
        setSelected(row.original)
      }}>
        <DateSelector />
      </Table>

      <dialog className="modal" id='modal' >
        <div className='modal-box'>
          <h1>Are you sure you want to delete this record?</h1>
            <form method="dialog" className='modal-action'>
              <button className='btn btn-primary' onClick={() => {
                // Delete the record
                ledgerService.delete(selected?.id as string)
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
