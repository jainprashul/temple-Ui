import React, { useEffect } from 'react'
import type { Route } from '../+types/booking'
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchBookings } from 'store/context/bookingSlice';
import type { Booking } from 'types/Booking';
import { BOOKING_CREATE } from '~/constants';
import { bookingService } from 'services/bookingService';
import DateSelector from '~/components/DateSelectors';
import BookingTable from './BookingTable';


export function meta(_: Route.MetaArgs) {
  return [
    { title: "Booking List" },
    { name: "description", content: "Booking List" },
  ];
}

const BookingList = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { end, start } = useAppSelector(state => state.utility.time);
  const data = useAppSelector(state => state.booking.bookings);

  const [selected, setSelected] = React.useState<Booking | null>(null);

  useEffect(() => {
    // Fetch BookingS
    dispatch(fetchBookings({
      from: start,
      to: end
    }))

  }, [dispatch, end, start]);


  return (
    <div>
      <h3 className="text-2xl font-semibold">Booking List</h3>
      <hr className='my-4' />
      <div >
        <BookingTable setSelected={setSelected}  data={data} >
          <div className='flex gap-1 justify-between'>
            <DateSelector />
            <button className='btn btn-sm' onClick={() => {
              navigate(BOOKING_CREATE)
            }}>Create Booking</button>
          </div>

        </BookingTable>
      </div>


      <dialog className="modal" id='modal' >
        <div className='modal-box'>
          <h1>Are you sure you want to delete this booking id {selected?.id} </h1>
          <form method="dialog" className='modal-action'>
            <button className='btn btn-primary' onClick={async () => {
              // Delete the record
              await bookingService.delete(selected?.id as string)
              dispatch(fetchBookings({
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

export default BookingList