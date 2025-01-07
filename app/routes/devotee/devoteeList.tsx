import { type ColumnDef } from '@tanstack/react-table';
import { Edit2, HandCoins, Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router'
import { devoteeService } from 'services/devoteeService';
import { toast } from 'sonner';
import { fetchDevotees } from 'store/context/devoteeSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { Devotee } from 'types/Devotee';
import Table from '~/components/Table'
import { DEVOTEE_CREATE, PAYMENT } from '~/constants'


type Props = {}

const DevoteeList = (_: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.devotee.devotees);
  const [index, setIndex] = useState(-1)

  const [selected, setSelected] = useState<Devotee | null>(null)

  useEffect(() => {
    dispatch(fetchDevotees())
  }, [dispatch])


  const columns = [
    {
      header: 'नाम',
      accessorKey: 'name',
      cell: ({ row, getValue }) => <button className={'btn btn-link btn-sm'} onClick={() => {
        navigate(`/devotee/${row.original.id}`)
      }}>{getValue() as any}</button>
    },
    {
      header: 'मोबाइल नंबर',
      accessorKey: 'phone'
    },
    {
      header: 'पता',
      accessorKey: 'address'
    },
    {
      header: "Actions",
      accessorKey: 'id',
      cell: ({ row, getValue }) => (
        <div className="join">
           <button onClick={() => navigate(`/devotee-edit/${getValue()}`)} title='Edit' className="btn btn-sm btn-circle btn-link"><Edit2/> </button>
          <button className="btn btn-sm btn-circle btn-link text-red-600" onClick={() => {
            setIndex(row.index as number);
            (document.getElementById('modal') as HTMLDialogElement)?.showModal()
          }}>
            <Trash2Icon />
          </button>
          <button onClick={() => navigate(`${PAYMENT}?devoteeId=${getValue()}`)} title='Ledger' className="btn btn-sm btn-circle btn-link"><HandCoins/> </button>
          
        </div>
      )
    }

  ] satisfies ColumnDef<typeof data[0]>[]

  return (
    <div>
      <h1 className='text-2xl font-semibold' > दानदाता सूची </h1>
      <hr className='mb-2' />

      <div className="flex justify-end">
      </div>

      <Table columns={columns} data={data} selectedIndex={index} onRowClick={(row) => {
        setSelected(row.original)
      }}>
        <NavLink to={DEVOTEE_CREATE} className="btn btn-sm btn-primary"> नया दानदाता</NavLink>
      </Table>

      <dialog className="modal" id="modal">
        <div className="modal-box">
          <p>Are you sure you want to delete this devotee?</p>
          <div>
            <form method="dialog" className='modal-action'>
            <button className="btn btn-error" onClick={async ()=> {
              // delete the devotee
              await devoteeService.delete(selected?.id!);
              await dispatch(fetchDevotees())
              toast.error('Devotee deleted successfully')
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

export default DevoteeList