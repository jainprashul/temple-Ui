
import { Key, Loader } from "lucide-react"
import React from "react"
import { authService } from "services/authService"
import { toast } from "sonner"

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

export function PasswordUpdateDialog({ open, setOpen }: Props) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      setLoading(true)
      setError('')
      const data = new FormData(e.currentTarget)

      const password = data.get('password') as string
      const rPassword = data.get('r-password') as string

      if (password !== rPassword) {
        throw new Error('Passwords do not match')
      }

      await authService.updateUserPassword(password)
      toast.success('Password updated successfully')
      setOpen(false)
    } catch (error: any) {
      console.error(error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => (document?.getElementById('my_modal_3') as HTMLDialogElement)?.showModal()}>open modal</button> */}
      <dialog open={open} id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={()=> setOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Update password</h3>
          <p>Make changes to password here. Click save when you're done.</p>
          <br />
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <Key className="h-4 w-4 opacity-70" />
              <input required name='password' type="password" className="grow" placeholder="Password" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <Key className="h-4 w-4 opacity-70" />
              <input required name='r-password' type="password" className="grow" placeholder="Re-enter Password" />
            </label>
            {
              error && <p className="text-red-500 my-2">{error}</p>
            }

            <button className='btn btn-primary w-full' type="submit" disabled={loading}>
              {loading ? <Loader className="animate-spin" size={16} />
                : 'Save changes'}
            </button>
          </form>
        </div>
      </dialog>
     
    </>
  )
}
