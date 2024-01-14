import React, { useState } from 'react'
import logo from '../../assets/left-chevron.png'

const Scrollbar = ({isOpen}: any) => {

const [open, setOpen] = useState(false);
  return (
    <div className='flex'>
        <div className={`${isOpen? 'w-72' : 'w-0'} duration-300 h-screen bg-lime-100 relative`}></div>
        <div className='p-7 text-2xl font-semibold h-screen'>
            <h1>Home page</h1>
        </div>
    </div>
  )
}

export default Scrollbar