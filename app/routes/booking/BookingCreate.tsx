
import Autocomplete from "~/components/AutoCompletion";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useActionState, useEffect, useState } from "react";
import { fetchDevotees } from "store/context/devoteeSlice";
import { useLocation, useNavigate } from "react-router";
import { ArrowLeftCircle } from "lucide-react";
import moment from "moment";
import type { Devotee } from "types/Devotee";
import { toast } from "sonner";
import { fetchParticulars } from "store/context/bookingSlice";
import type { Booking } from "types/Booking";
import { bookingService } from "services/bookingService";
import type { Route } from "../website/+types/Homepage";


export function meta(_: Route.MetaArgs) {
  return [
    { title: "Bookings" },
    { name: "description", content: "Bookings" },
  ];
}

const BookingCreate = (_: Route.ComponentProps) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const devoteeId = searchParams.get('devoteeId');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch devotees
    dispatch(fetchDevotees());
    dispatch(fetchParticulars());
  }, [dispatch]);


  const devoteeList = useAppSelector((state) => state.devotee.devotees);
  const suggestions = devoteeList.map((devotee) => devotee.name);
  const particulars = useAppSelector((state) => state.booking.particulars);

  const [selectedDevotee, setSelectedDevotee] = useState<Devotee | null>();

  function onNameChange(value: string, index: number) {
    const devotee = devoteeList[index];
    setSelectedDevotee(devotee);
  }

  const [, formAction] = useActionState(onDeposit, null);

  useEffect(() => {
    if (devoteeId) {
      const devotee = devoteeList.find((devotee) => devotee.id === Number(devoteeId));
      console.log(devotee);
      setSelectedDevotee(devotee);
    }
  }, [devoteeId, devoteeList]);


  async function onDeposit(_: unknown, formData: FormData) {
    if (!selectedDevotee) {
      return;
    }
    const data: Booking = {
      date: formData.get('date') as string,
      particular : Number(formData.get('particular')),
      amount: Number(formData.get('amount')),
      description: formData.get('details') as string,
      devoteeId: selectedDevotee.id!,
      status: 'Payment Pending'
    }

    await bookingService.create(data);

    toast.success('Booking successfully for ' + selectedDevotee.name);
    navigate(-1);
  }

  return (
    <div>
      <div className="flex gap-1 items-center">
        <button onClick={() => navigate(-1)} className="btn btn-circle btn-link"> <ArrowLeftCircle /> </button>
        <h1 className='text-2xl font-semibold'>Booking</h1>
      </div>
      <hr />
      <div className="">
        <form className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <>
            {devoteeId ? <>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Devotee</span>
                </div>
                <input type="text" value={selectedDevotee?.name} readOnly className="input input-bordered" />
              </label>
            </> :
              <Autocomplete defaultValue={selectedDevotee?.name} onValueChange={onNameChange} name="name" title="Devotee name" placeholder="Search Devotee Names" suggestions={suggestions} />
            }
            <label className="form-control">
              <div className="label">
                <span className="label-text">Date</span>
              </div>
              <input name='date' defaultValue={moment().format('YYYY-MM-DD')} type="date" className="input input-bordered" />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Particulars</span>
              </div>
              <select name="particular" className="select select-bordered">
                {
                  particulars.map((particular) => (
                    <option key={particular.id} value={particular.id}>{particular.particular}</option>
                  ))
                }
              </select>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Amount</span>
              </div>
              <input required name='amount' type="number" className="input input-bordered" />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <textarea name='details' className="textarea h-24 textarea-bordered"></textarea>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Status</span>
              </div>
              <select name="status" className="select select-bordered">
                <option value="Payment Pending">Payment Pending</option>
                <option value="Payment Done">Payment Done</option>
              </select>
            </label>

            <button type="submit" formAction={formAction} className="btn btn-primary">Deposit</button>
          </>



        </form>
      </div>
    </div>
  )
}

export default BookingCreate
