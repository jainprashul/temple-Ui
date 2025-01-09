import { type ColumnDef } from '@tanstack/react-table';
import { Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router'
import { bookingService } from 'services/bookingService';
import { toast } from 'sonner';
import { fetchParticulars } from 'store/context/bookingSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { Particulars } from 'types/Particulars';
import { formatCurrency } from 'utils/numbers';
import Table from '~/components/Table'
import {  PARTICULARS_CREATE } from '~/constants'


type Props = {}

const ParticularList = (_: Props) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.booking.particulars);
  const [index, setIndex] = useState(-1)

  const [selected, setSelected] = useState<Particulars | null>(null)

  useEffect(() => {
    dispatch(fetchParticulars())
  }, [dispatch])


  const columns = [
    {
      header: 'Particular',
      accessorKey: 'particular',
    },
    {
      header: 'Description',
      accessorKey: 'description'
    },
    {
      header: 'Charge',
      accessorKey: 'amount',
      cell: ({ getValue }) => <span>{formatCurrency(getValue() as any)}</span>
    },
    {
      header: "Actions",
      accessorKey: 'id',
      cell: ({ row }) => (
        <div className="join">
          <button className="btn btn-sm btn-circle btn-link text-red-600" onClick={() => {
            setIndex(row.index as number);
            (document.getElementById('modal') as HTMLDialogElement)?.showModal()
          }}>
            <Trash2Icon />
          </button>          
        </div>
      )
    }

  ] satisfies ColumnDef<typeof data[0]>[]

  return (
    <div>
      <h1 className='text-2xl font-semibold' > 
        Particulars List
      </h1>
      <hr className='mb-2' />

      <div className="flex justify-end">
      </div>

      <Table columns={columns} data={data} selectedIndex={index} onRowClick={(row) => {
        setSelected(row.original)
      }}>
        <NavLink to={PARTICULARS_CREATE} className="btn btn-sm"> New Particular </NavLink>
      </Table>

      <dialog className="modal" id="modal">
        <div className="modal-box">
          <p>Are you sure you want to delete this devotee?</p>
          <div>
            <form method="dialog" className='modal-action'>
            <button className="btn btn-error" onClick={async ()=> {
              // delete the devotee
              await bookingService.deleteParticular(selected?.id!);
              await dispatch(fetchParticulars())
              toast.error('Particular deleted')
              // close the modal
              setIndex(-1)
            }}>Delete</button>
              {/* if there is a button, it will close the modal */}
              <button className="btn" onClick={() => setIndex(-1)}>Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default ParticularList