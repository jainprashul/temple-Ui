import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto p-4">
        <Outlet />
        {props.children}
      </div>
    </div>
  )
}

export default Layout