import React, { useMemo } from 'react'
import { useNavigate } from 'react-router';
import type { Booking } from 'types/Booking';
import type { ColumnDef } from '@tanstack/react-table';
import Table from '~/components/Table';
import { Trash2 } from 'lucide-react';
import { formatCurrency } from 'utils/numbers';


type Props = {
  setSelected: (booking: Booking | null) => void
  children?: React.ReactNode
  data: Booking[]
  hideActions?: boolean
}

const BookingTable = ({ setSelected, data, children, hideActions = false}: Props) => {


  const navigate = useNavigate();

  const columns = useMemo(() => {
    const cols = [
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
      cell: ({ getValue }) => <span>{ formatCurrency(getValue() as any) }</span>
    },
    {
      header: 'Description',
      accessorKey: 'description',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
  ] satisfies ColumnDef<Booking>[]
  
  // eslint-disable-next-line react-hooks/exhaustive-deps

  if(!hideActions) {
    cols.push(
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

  return cols

}, [hideActions, navigate]);



  return (
    <>
    <Table hideHeader={hideActions} columns={columns} data={data} onRowClick={(row) => {
      setSelected(row.original)
    }}>
      {children}
    </Table>
    </>
  )
}

export default BookingTable