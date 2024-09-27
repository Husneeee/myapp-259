import React from 'react'
import { FaAffiliatetheme } from "react-icons/fa";

export const Header = () => {
  return (
    <div className='bg-success text-bg-light d-flex  align items-center  menu'>
      <FaAffiliatetheme className=' m-3 ms-5 fs-2' />
     
      <p className='m-3 fs-3' >Home </p>
      <p className='m-3 fs-3'>Users</p>
      <p className='m-3 fs-3'>Todos</p>

    </div>
  )
}


