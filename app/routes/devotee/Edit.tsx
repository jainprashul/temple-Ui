import React, { useActionState, useEffect, useState } from 'react'
import type { Route } from './+types/Create';
import { devoteeService } from 'services/devoteeService';
import { type Devotee } from 'types/Devotee';
import Loading from '~/components/Loading';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { DEVOTEES } from '~/constants';
import { ArrowLeftCircle } from 'lucide-react';


export function meta(_: Route.MetaArgs) {
  return [
    { title: "Create Devotee" },
    { name: "description", content: "Create a new devotee" },
  ];
}

interface Data {
  name: string;
  phone: string;
  address: string;
}


const EditDevotee = ({ params } : Route.ComponentProps) => {

  const { id } = params;
  const navigate = useNavigate();

  const [devotee, setDevotee] = useState<Devotee | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    devoteeService.get(id).then((devotee) => {
      setDevotee(devotee);
    });
  }, [id]);


  async function saveDevotee(_: unknown, formData: FormData) {
    if (!id) {
      return;
    }
    const data : Data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
    }
    console.log(data);
    await devoteeService.update(id,  data);
    toast.success('Devotee updated successfully');

    setTimeout(() => {
      navigate(DEVOTEES);
    }, 3000);
    
} 


  const [, formAction] = useActionState(saveDevotee, null);

  if (!devotee) {
    return <Loading />;
  }


  return (
    <div>
      <div className="flex gap-1 items-center">
        <button onClick={() => navigate(-1)} className="btn btn-circle btn-link"> <ArrowLeftCircle/> </button>
      <h1 className='text-2xl font-semibold'>Update Devotee Details</h1>
      </div>

      <form className="form-control">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label htmlFor="name" className="label">Name</label>
            <input defaultValue={devotee.name} type="text" name="name" id="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label htmlFor="phone" className="label">Phone</label>
            <input defaultValue={devotee.phone} type="tel" name="phone" id="phone" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label htmlFor="address" className="label">Address</label>
            <textarea defaultValue={devotee.address} name="address" id="address" className="textarea textarea-bordered"></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button type='submit' formAction={formAction}  className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditDevotee