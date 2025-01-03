
import { AlertCircle, Key, LoaderCircle, LogInIcon, Mail } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'
import { authService } from 'services/authService'
import { HOME, LOGIN } from '~/constants'

type Props = {}

const Signup = (_: Props) => {
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()
  const [error, setError] = React.useState('')

  async function onSubmit(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      const form = new FormData(e.currentTarget)

      if(form.get('password') !== form.get('r-password')) {
        throw new Error('Passwords do not match')
        return
      }

      const payload = {
        email: form.get('email') as string,
        password: form.get('password') as string,
      }

      await authService.signup(payload.email, payload.password)

      navigate(HOME, {
        replace: true
      })
      
    } catch (error : any ) {
      console.error(error)
      setError(error.message)
    } finally {
      setLoading(false)
    }

    
  }

  return (
    <div className="max-w-md m-auto flex flex-col items-center justify-center flex-1 p-10">
      <h1 className="text-3xl font-bold mb-12">Register</h1>
      <form onSubmit={onSubmit} className="space-y-4 w-full flex flex-col justify-center">


        <label className='input input-bordered flex items-center gap-2'>
          <Mail />
          <input required type="email" name="email" placeholder="Email" />
        </label>


        <label className='input input-bordered flex items-center gap-2'>
          <Key />
          <input required type="password" name="password" placeholder="Password" />
        </label>

  
        <label className='input input-bordered flex items-center gap-2'>
          <Key />
          <input required type="password" name="r-password" placeholder="Repeat Password" />
        </label>

        {error &&  <div className='flex gap-1 justify-center text-red-500 p-2'>
          <AlertCircle /> <span>{error}</span>
        </div>}

        <button className='btn' type="submit" disabled={loading}>
          {
            loading ? <LoaderCircle className="animate-spin" /> : <LogInIcon />
          }

          <span>Signup</span>
        </button>

        <button className='btn btn-link' type="button" onClick={() => navigate(LOGIN)}>
          <span>Already have an account? Login</span>
        </button>



      </form>

    </div>
  )
}

export default Signup