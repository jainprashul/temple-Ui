import Autocomplete from "~/components/AutoCompletion";
import type { Route } from "./+types/DepositForm";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useActionState, useEffect, useState } from "react";
import { fetchDevotees } from "store/context/devoteeSlice";
import { useLocation, useNavigate } from "react-router";
import { ArrowLeftCircle, PlusCircle } from "lucide-react";
import moment from "moment";
import type { Devotee } from "types/Devotee";
import type { Ledger } from "types/Ledger";
import { devoteeService } from "services/devoteeService";
import { toast } from "sonner";
import { printComponent } from "utils/print";
import DepositSlip from "~/components/DepositSlip";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Deposit" },
    { name: "description", content: "Deposit money" },
  ];
}

const DepositForm = (_: Route.ComponentProps) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const devoteeId = searchParams.get('devoteeId');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch devotees
    dispatch(fetchDevotees());
  }, [dispatch]);


  const devoteeList = useAppSelector((state) => state.devotee.devotees);
  const suggestions = devoteeList.map((devotee) => devotee.name);

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
    const data: Ledger = {
      date: formData.get('date') as string,
      mode: formData.get('mode') as string,
      amount: Number(formData.get('amount')),
      description: formData.get('details') as string,
      devoteeId: selectedDevotee.id!,
      type: 'credit'
    }

    await devoteeService.deposit(data);

    const printData = {
      ...data,
      devotee: selectedDevotee
    }

    printComponent(<DepositSlip ledger={printData} />);
    toast.success('Amount deposited successfully for ' + selectedDevotee.name);
  }

  return (
    <div>
      <div className="flex gap-1 items-center">
        <button onClick={() => navigate(-1)} className="btn btn-circle btn-link"> <ArrowLeftCircle /> </button>
        <h1 className='text-2xl font-semibold'>Deposit</h1>
      </div>
      <hr />
      <div className="space-y-2 lg:w-1/3">
        <form >
          <div className="flex flex-col space-y-2">

            {devoteeId ? <>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input type="text" value={selectedDevotee?.name} readOnly className="input input-bordered" />
              </label>
            </> :<div className="flex gap-2 items-end">
              <Autocomplete defaultValue={selectedDevotee?.name} onValueChange={onNameChange} name="name" title="Name" placeholder="Search Devotee Names" suggestions={suggestions} />
              <button type="button" onClick={() => navigate('/app/devotee-new')} className="btn btn-sm btn-link btn-circle btn-primary mb-2 "><PlusCircle/></button>
              </div>
            }
            <label className="form-control">
              <div className="label">
                <span className="label-text">Date</span>
              </div>
              <input name='date' defaultValue={moment().format('YYYY-MM-DD')} type="date" className="input input-bordered" />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Mode</span>
              </div>
              <select name="mode" className="select select-bordered">
                <option value="cash">Cash</option>
                <option value="online">Online</option>
              </select>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Amount *</span>
              </div>
              <input required name='amount' type="number" className="input input-bordered" />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <textarea name='details' className="textarea h-24 textarea-bordered"></textarea>
            </label>

            <button type="submit" formAction={formAction} className="btn btn-primary">Deposit</button>
          </div>



        </form>
      </div>
    </div>
  )
}

export default DepositForm
