import { ledgerService } from 'services/ledgerService';
import type { Route } from './+types/DevoteeView';
import { devoteeService } from 'services/devoteeService';
import { bookingService } from 'services/bookingService';
import BookingTable from '../booking/BookingTable';
import React from 'react';
import type { Ledger } from 'types/Ledger';
import LedgerTable from '../ledger/LedgerTable';
import type { Booking } from 'types/Booking';
import { formatCurrency } from 'utils/numbers';

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Devotee" },
    { name: "description", content: "Devotee details" },
  ];
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  if (!params.id) return null;
  const devotee = await devoteeService.get(params.id)
  const ledger = await ledgerService.listByDevotee(params.id)
  const bookings = await bookingService.listByDevotee(params.id)
  return { devotee, ledger, bookings }
}


const DevoteeView = ({ loaderData }: Route.ComponentProps) => {

  const [, setSelectedBooking] = React.useState<Booking | null>(null);
  const [, setSelectedLedger] = React.useState<Ledger | null>(null);

  if (!loaderData) return null;
  const { devotee, ledger, bookings } = loaderData;

  const pendingAmount = ledger.reduce((acc, item) => {
    if (item.type === 'credit') {
      return acc + item.amount
    }
    return acc
  }, 0) - bookings.reduce((acc, item) => { return acc + item.amount }, 0)


  return (
    <div>
      <h3 className="text-2xl font-semibold">Devotee - {devotee.name}</h3>
      <hr className="my-4" />
      <div className="space-y-2 ">
        <div className="shadow-md bg-base-200 p-4 rounded-lg mb-2">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <div className="text-sm text-gray-500">Mobile</div>
              <div className="text-lg">{devotee.phone}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Address</div>
              <div className="text-lg">{devotee.address}</div>
            </div>

            <div>
              <div className="text-sm text-gray-500">Pending Amount</div>
              <div className="text-lg">{formatCurrency(pendingAmount)}</div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold">Bookings</h3>
      <hr className="my-4" />
      <BookingTable data={bookings} setSelected={setSelectedBooking} />

      <h3 className="text-2xl font-semibold">Ledger</h3>
      <hr className="my-4" />
      <LedgerTable data={ledger} setSelected={setSelectedLedger} />
    </div>
  )
}

export default DevoteeView