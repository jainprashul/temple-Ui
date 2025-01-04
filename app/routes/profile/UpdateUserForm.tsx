
import { Loader } from "lucide-react"
import React from "react"
import { authService } from "services/authService"
import { toast } from "sonner"
import { authActions } from "store/context/authSlice"
import { useAppDispatch, useAppSelector } from "store/hooks"

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

export function ProfileForm({ open, setOpen }: Props) {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)
  const [loading, setLoading] = React.useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const data = new FormData(e.currentTarget)
      const updatedUser = await authService.updateUserData({
        name: (data.get('name') as string) || user?.user_metadata.name,
        phone: (data.get('phone') as string) || user?.user_metadata.phone,
      })
      dispatch(authActions.setUser(updatedUser.user))
      toast.success('Profile updated successfully')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
    <dialog open={open} id="user-form" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button onClick={()=> setOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-xl">Update profile</h3>
        <p>Make changes to your profile here. Click save when you're done.</p>
        

        <br />
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="input input-bordered flex items-center gap-2">
            <input defaultValue={user?.user_metadata.name} required name='name' type="text" className="grow" placeholder="Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input defaultValue={user?.user_metadata.phone} required name='phone' type="text" className="grow" placeholder="Phone" />
          </label>
          <button type="submit" className="btn btn-primary w-full">
            {loading ? <Loader className="animate-spin" size={16} /> : 'Save changes'}
          </button>
        </form>

      </div>
    </dialog>
    </>
  )
}
