import React from 'react'
import { HiCurrencyRupee } from 'react-icons/hi2'
import { useAuth } from '../context/authentication'
import { NavLink } from 'react-router-dom'

const DashboardRoutes= [
  {
    name: 'Buy',
    path: 'buy',
    icon: 'dashboard'
  },
  {
    name: 'Sell',
    path: 'sell',
    icon: 'dashboard'
  },
  {
    name: 'History',
    path: 'history',
    icon: 'dashboard'
  },
  {
    name: 'Account',
    path: 'account',
    icon: 'dashboard'
  },
]

export default function DashboardLayout() {
  const { logout } = useAuth()
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className='border-b flex items-center justify-between py-5 px-10'>
        <div className='flex items-center space-x-2 '>
          <HiCurrencyRupee size={25} color="blue" />
          <h1 className='text-black text-xl font-semibold'>Quick Exchange</h1>
        </div>
        <div>
          <button onClick={logout} className='bg-yellow-700 px-5 py-2 text-red-50 text-sm'>Signout</button>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="w-1/4 border-r">
          <div className='flex flex-col space-y-3 mx-10 my-5 '>
            {
              DashboardRoutes.map((route, index) => <NavLink 
              to={route.path}
              className={({isActive})=> isActive ? 'bg-yellow-600' : '' }
              key={index}>
              <p>{route.name}</p>
            </NavLink> )
            }
          </div>
        </div>
        <div className="flex-1">

        </div>
      </div>
    </div>
  )
}
