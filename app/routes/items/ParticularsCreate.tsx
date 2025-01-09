import React, { useActionState } from 'react'
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { ArrowLeftCircle } from 'lucide-react';
import type { Route } from './+types/ParticularsCreate';
import type { Particulars } from 'types/Particulars';
import { bookingService } from 'services/bookingService';


export function meta(_: Route.MetaArgs) {
  return [
    { title: "Create Particulars" },
    { name: "description", content: "Create a new Particulars" },
  ];
}


const CreateDevotee = (_ : Route.ComponentProps) => {
  const navigate = useNavigate();
  async function saveDevotee(_: unknown, formData: FormData) {
    const data : Particulars = {
      particular: formData.get('particular') as string,
      amount: Number(formData.get('amount')),
      description: formData.get('description') as string
    }
    console.log(data);
    await bookingService.createParticular(data);

    toast.success('Particular created successfully');
    navigate(-1);
} 


  const [, formAction] = useActionState(saveDevotee, null);


  return (
    <div>
      <div className="flex gap-1 items-center">
        <button onClick={() => navigate(-1)} className="btn btn-circle btn-link"> <ArrowLeftCircle/> </button>
      <h1 className='text-2xl font-semibold'>Create New Particular</h1>
      </div>
      <form className='space-y-4 mt-4 lg:w-1/3'>
        <div className="space-y-2">
          <div className="form-control">
            <label htmlFor="name" className="label">Particular</label>
            <input type="text" name="particular" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label htmlFor="amt" className="label">Amount</label>
            <input type="number" name="amount" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label htmlFor="description" className="label">Description</label>
            <textarea name="description" id="description" className="textarea textarea-bordered"></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button type='submit' formAction={formAction}  className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateDevotee