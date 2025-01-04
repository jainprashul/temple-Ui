import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import supabase from "./supabase"
import { authActions } from "store/context/authSlice"
import Loading from "~/components/Loading"
import { LOGIN } from "~/constants"

"use client"

const withAuth = (Component: React.ComponentType) => {
  return (props: any) => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = React.useState(true)

    const isAuthenticated = useAppSelector((state) => !!state.auth.session)

    useEffect(() => {
      
      supabase.auth.getSession().then((data) => {
        dispatch(authActions.setSession(data.data.session))
        if (data.data.session) {
          dispatch(authActions.setUser(data.data.session.user!))
        }
      }).finally(() => {
        setLoading(false)
      })

      supabase.auth.onAuthStateChange((event, session) => {
        dispatch(authActions.setSession(session))
        if (event === 'SIGNED_IN' && session) {
          dispatch(authActions.setUser(session.user!))
        }
        if (event === 'SIGNED_OUT')
          dispatch(authActions.setUser(null))
      })
    }, [])

    if (loading) {
      return <Loading />
    }
    
    if (!isAuthenticated) {
      window.location.href = LOGIN
      
    }

    return <Component {...props} />
  }
}

export default withAuth