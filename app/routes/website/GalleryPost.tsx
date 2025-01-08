import React, { useActionState } from 'react'
import { imageUploadService } from 'services/imageUploadService';
import { toast } from 'sonner';

type Props = {}

const GalleryPost = (_: Props) => {
  const [loading, setLoading] = React.useState(false);

  const [, formAction] = useActionState(onPost, null);

  async function onPost(_: unknown, formData: FormData) {

    try {
      setLoading(true)

      const data = formData.getAll('images') as unknown as File[]

      const images = data.map((file) =>
        imageUploadService.compressAndUploadImage(file))

      await Promise.all(images)

      toast.success('Images uploaded successfully')

      console.log('onPost', data)
    } catch (error: any) {
      console.error(error)
      toast.error('Error uploading images. Please try again')
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-4xl text-center font-semibold'>Create Gallery Post</h2>
      <form className='space-y-4' >


        <label className="form-control">
          <div className="label">
            <span className="label-text">Upload Image</span>
          </div>
          <input name='images' type="file" multiple pattern=".*\.(gif|jpe?g|tiff?|png|webp|bmp)"
            className="file-input file-input-bordered w-full max-w-xs" />
        </label>



        <button disabled={loading} type="submit" formAction={formAction} className="btn btn-primary">
          {
            loading ? 'Uploading...' : 'Upload'
          }
        </button>
      </form>

    </div>
  )
}

export default GalleryPost