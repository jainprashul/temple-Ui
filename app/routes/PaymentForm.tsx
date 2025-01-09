import type { Route } from "./+types/DepositForm";
import { useAppDispatch } from "store/hooks";
import { useActionState, useEffect } from "react";
import { fetchDevotees } from "store/context/devoteeSlice";
import { useNavigate } from "react-router";
import { ArrowLeftCircle } from "lucide-react";
import moment from "moment";
import { toast } from "sonner";
import { printComponent } from "utils/print";
import type { Expense } from "types/Expense";
import { expenseService } from "services/expenseService";
import PaymentVoucher from "~/components/PaymentVoucher";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Payment" },
    { name: "description", content: "Deposit money" },
  ];
}

const PaymentForm = (_: Route.ComponentProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch devotees
    dispatch(fetchDevotees());
  }, [dispatch]);

  const [, formAction] = useActionState(onSubmit, null);

  async function onSubmit(_: unknown, formData: FormData) {
 
    const data: Expense = {
      date: formData.get('date') as string,
      mode: formData.get('mode') as string,
      amount: Number(formData.get('amount')),
      description: formData.get('details') as string,
      to : formData.get('to') as string,
      from : formData.get('from') as string,
    }

    console.log(data);

    await expenseService.create(data);

    printComponent(<PaymentVoucher data={data} />);

    toast.success('Amount deposited successfully for ' + data.to);
  }

  return (
    <div>
      <div className="flex gap-1 items-center">
        <button onClick={() => navigate(-1)} className="btn btn-circle btn-link"> <ArrowLeftCircle /> </button>
        <h1 className='text-2xl font-semibold'>Payment Voucher Create</h1>
      </div>
      <hr />
      <div className="space-y-2 lg:w-1/3">
        <form >
          <div className="flex flex-col space-y-2">

            <label className="form-control">
              <div className="label">
                <span className="label-text">Date</span>
              </div>
              <input name='date' defaultValue={moment().format('YYYY-MM-DD')} type="date" className="input input-bordered" />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">To</span>
              </div>
              <input type="text" name='to' className="input input-bordered" required />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">From</span>
              </div>
              <input type="text" name='from' className="input input-bordered" />
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

            <button type="submit" formAction={formAction} className="btn btn-primary">Create Voucher</button>
          </div>



        </form>
      </div>
    </div>
  )
}

export default PaymentForm
