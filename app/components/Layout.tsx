import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import  withAuth from 'utils/withAuth'
import Footer from './Footer'

type Props = {
  children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header></Header>
      <div className="container mx-auto p-4 flex-grow overflow-auto">
        <Outlet />
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default withAuth(Layout)