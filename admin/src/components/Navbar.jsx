import React from 'react'
import {assets} from '../assets/admin_assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between px-4'>
        <img className='w-40' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-red-600 hover:bg-red-500 duration-200 cursor-pointer text-white rounded-full border-none px-4 p-2 text-lg'>Logout</button>
    </div>
  )
}

export default Navbar