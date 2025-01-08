import React, { useMemo } from 'react'
import { useNavigate } from 'react-router';
import type { Booking } from 'types/Booking';
import type { ColumnDef } from '@tanstack/react-table';
import Table from '~/components/Table';
import { Trash2 } from 'lucide-react';


type Props = {
  setSelected: (booking: Booking | null) => void
  children?: React.ReactNode
  data: Booking[]
  hideActions?: boolean
}

const BookingTable = ({ setSelected, data, children, hideActions = false}: Props) => {


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
      header: "Booking ID",
      accessorKey: 'id',
    },
    {
      header: 'Particulars',
      accessorKey: 'particular',
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
      header: 'Description',
      accessorKey: 'description',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ] satisfies ColumnDef<Booking>[], [data.length, navigate]);

  if(hideActions) {
    columns.push(
      {
        header: 'Action',
        accessorKey: 'id',
        cell: () => <>
          <button className="btn btn-sm btn-circle btn-link text-red-600" onClick={() => {
            (document.getElementById('modal') as HTMLDialogElement)?.showModal();
          }}>
            <Trash2 />
          </button>
        </>
      } as any
    )
  }


  return (
    <>
    <Table columns={columns} data={data} onRowClick={(row) => {
      setSelected(row.original)
    }}>
      {children}
    </Table>
    </>
  )
}

export default BookingTable