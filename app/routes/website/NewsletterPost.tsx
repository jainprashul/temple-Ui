import moment from 'moment'
import React, { useActionState } from 'react'
import newsletterService from 'services/newsletterService';
import { toast } from 'sonner';
import type { Newsletter } from 'types/Newsletter';

type Props = {}

const NewsletterPost = (_: Props) => {

  const [, formAction] = useActionState(onPost, null);

  async function onPost(_: unknown, formData: FormData) {
    const data : Newsletter = {
      date: formData.get('date') as string,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
    }

    console.log('onPost' , data)
    await newsletterService.post(data)

    toast.success('Newsletter post created')
  }
  

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-4xl text-center font-semibold'>Create Newsletter Post</h2>
      <form className='space-y-4' >
        <label className="form-control">
          <div className="label">
            <span className="label-text">Date</span>
          </div>
          <input name='date' defaultValue={moment().format('YYYY-MM-DD')} type="date" className="input input-bordered" />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input required name='title' type="text" className="input input-bordered" />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea required name='description' className="textarea h-24 textarea-bordered"></textarea>
        </label>

        <button type="submit" formAction={formAction} className="btn btn-primary">Create</button>
      </form>

    </div>
  )
}

export default NewsletterPost