import React, { useMemo } from 'react'
import {  PrinterIcon, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { ColumnDef } from '@tanstack/react-table';
import Table from '~/components/Table';
import DateSelector from '~/components/DateSelectors';
import type { Expense } from 'types/Expense';

type Props = {
  children?: React.ReactNode
  data : Expense[]
  setSelected: (Expense: Expense | null) => void
}

const ExpenseTable = ({ data, setSelected }: Props) => {
  const navigate = useNavigate();

    const columns = useMemo(() => [
  
      {
        header: 'Date',
        accessorKey: 'date'
      },
      {
        header: 'Name',
        accessorKey: 'to',
      },
      {
        header: "Voucher",
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
        header: 'Mode',
        accessorKey: 'mode',
        cell: ({ getValue }) => <span>{(getValue() as string)?.toUpperCase()}</span>
      },
      {
        header: 'Actions',
        accessorKey: 'id',
        cell: ({ getValue }) =>
          <div className='join'>
            <button className='btn btn-link join-item btn-circle btn-sm' onClick={() => {
              navigate(`/app/payment-slip/${getValue()}`)
            }}>
              <PrinterIcon />
            </button>
            <button className="btn btn-sm btn-circle btn-link text-red-600" onClick={() => {
              setSelected(data.find(d => d.id === getValue() as string) || null);
              (document.getElementById('modal') as HTMLDialogElement)?.showModal()
            }}>
              <Trash2 />
            </button>
          </div>
      },
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ] satisfies ColumnDef<Expense>[], [data.length, navigate]);

  return (
    <Table data={data} columns={columns} onRowClick={(row) => {
      setSelected(row.original)
    }}>
      <DateSelector />
    </Table>
  )
}

export default ExpenseTable