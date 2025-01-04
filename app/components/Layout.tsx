import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import  withAuth from 'utils/withAuth'

type Props = {
  children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto p-4">
        <Outlet />
        {props.children}
      </div>
    </>
  )
}

export default withAuth(Layout)