import React, { useMemo } from 'react'
import {  PrinterIcon, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Ledger } from 'types/Ledger';
import type { ColumnDef } from '@tanstack/react-table';
import Table from '~/components/Table';
import DateSelector from '~/components/DateSelectors';
import { formatCurrency } from 'utils/numbers';

type Props = {
  children?: React.ReactNode
  data : Ledger[]
  setSelected: (ledger: Ledger | null) => void
}

const LedgerTable = ({ data, setSelected }: Props) => {
  const navigate = useNavigate();

    const columns = useMemo(() => [
  
      {
        header: 'Date',
        accessorKey: 'date'
      },
      {
        header: 'Name',
        accessorKey: 'name',
        cell: ({ row, getValue }) => <button className={'btn btn-link btn-sm'} onClick={() => {
          navigate(`/app/devotee/${row.original.devoteeId}`)
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
        cell: ({ getValue }) => <span>{formatCurrency(getValue() as any)}</span>
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
        cell: ({ getValue }) =>
          <div className='join'>
            <button className='btn btn-link join-item btn-circle btn-sm' onClick={() => {
              navigate(`/app/deposit-slip/${getValue()}`)
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
    ] satisfies ColumnDef<Ledger>[], [data.length, navigate]);

  return (
    <Table data={data} columns={columns} onRowClick={(row) => {
      setSelected(row.original)
    }}>
      <DateSelector />
    </Table>
  )
}

export default LedgerTable