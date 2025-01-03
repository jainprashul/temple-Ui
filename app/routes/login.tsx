
import { Key, LoaderCircle, LogInIcon, Mail, User } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';
import { authService } from 'services/authService';
import { HOME, REGISTER } from '~/constants';
import type { Route } from './+types/home';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type Schema = {
  email: string;
  password: string;
}

type Props = {}

const Login = (_: Props) => {

  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const navigate = useNavigate()


  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      const form = new FormData(e.currentTarget)
      const payload: Schema = {
        email: form.get('email') as string,
        password: form.get('password') as string
      }
      console.log(payload)
      const session = await authService.login(payload.email, payload.password);
      console.log(session)

      navigate(HOME, {
        replace: true
      })

    } catch (error: any) {
      setError(error.message)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto flex flex-col items-center justify-center flex-1 p-10">
      <h1 className="text-3xl font-bold mb-12">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4 w-full flex flex-col justify-center">

        <label className="input input-bordered flex items-center gap-2">
          <Mail className="h-4 w-4 opacity-70" />
          <input required name='email' type="text" className="grow" placeholder="Email" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <Key className="h-4 w-4 opacity-70" />
          <input required name='password' type="password" className="grow" placeholder="Password" />
        </label>

        {error && <p className="text-center text-red-500 text-sm p-2">{error}</p>}

        <button className='btn' type="submit" disabled={loading}>
          {
            loading ? <LoaderCircle className="animate-spin" /> : <LogInIcon />
          }

          <span>Login</span>
        </button>
      </form>

      <div className='flex gap-2 justify-center  mt-4'>
        <button onClick={() => navigate(REGISTER)} className="btn btn-link mt-4">
          Don't have an account?<span>Register</span>
        </button>

      </div>
    </div>
  )
}

export default Login