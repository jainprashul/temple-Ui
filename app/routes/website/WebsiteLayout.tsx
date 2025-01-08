import React from 'react'
import NavigationHeader from './NavigationHeader'
import { NavigationFooter } from './NavigationFooter'
import { Outlet } from 'react-router'

type Props = {
  children ?: React.ReactNode
}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <NavigationHeader />
        <Outlet />
        {props.children}
        <NavigationFooter />
    </div>
  )
}

export default WebsiteLayout