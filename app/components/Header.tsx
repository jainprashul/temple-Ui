import { LogOut, MenuIcon, User, UserIcon } from 'lucide-react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { useAppSelector } from 'store/hooks'
import type { MenuItem } from 'types/Menu'
import supabase from 'utils/supabase'
import { APP_TITLE, DEVOTEES, HOME, PROFILE } from '~/constants'

type Props = {}

const Header = (props: Props) => {
  const navigate = useNavigate()
  console.log('Header props:', props )
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <MenuLeft />

        <NavLink to={HOME} className="btn btn-ghost text-xl">
          {APP_TITLE}
        </NavLink>
      </div>
      {/* <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div> */}
      <div className="navbar-end">
        <AvatarMenu />
      </div>
    </div>
  )
}

export default Header


function AvatarMenu(){

  const navigate = useNavigate();
  const user = useAppSelector(s => s.auth.user)


  const menuList : MenuItem[] = [
    {
      name: 'Profile',
      icon: <UserIcon size={16} />,
      onClick: () => navigate(PROFILE)
    },
    {
      name: 'Logout',
      icon: <LogOut size={16} />,
      onClick: () => supabase.auth.signOut()
    },
  ]

  

  return (
    <div className='dropdown dropdown-end z-10'>
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Avatar"
          src={`https://api.multiavatar.com/${user?.email}.png`} />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="p-4 menu dropdown-content bg-base-200 rounded-box shadow-lg">
    
        <div className="p-2 bg-base-400 block">
          <p className="text-base font-bold">
            {user?.user_metadata.name}
          </p>
          <p className="text-sm text-base-content">
          {user?.email}
          </p>
        </div>

        {menuList.map((item, index) => (
          <li key={index}>
            <a onClick={item.onClick} className="flex items-center gap-2">
              {item.icon}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MenuLeft(){

  const navigate = useNavigate();

  const menuList : MenuItem[] = [
    {
      name: 'Dashboard',
      onClick: () => navigate(HOME)
    },
    {
      name: 'दानदाता',
      onClick: () => navigate(DEVOTEES)
    },
  ]

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <MenuIcon size={24} />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {menuList.map((item, index) => (
          <li key={index}>
            <a onClick={item.onClick} className="flex items-center gap-2">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}