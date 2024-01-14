import React, { useState } from 'react'
import Scrollbar from '../components/Scrollbar/Scrollbar';
import logo from '../assets/menu.png'
import close from '../assets/close.png'

const Home = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
<nav className="flex items-center justify-between flex-wrap bg-emerald-500 p-6">
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-10">
        {open ? <img src={close} className={`absolute cursor-pointer w-7 border-dark-purple ${open && "rotate-90"}`} onClick={() => {setOpen(!open)}}/> : <img src={logo} className={`absolute cursor-pointer w-7 border-dark-purple ${open && "rotate-90"}`} onClick={() => {setOpen(!open)}}/>}
    </div>
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight text-white-700">AgriGao</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-neutral-950 mr-4">
        Docs
      </a>
      <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-neutral-950 mr-4">
        Examples
      </a>
      <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-neutral-950">
        Blog
      </a>
    </div>
    <div>
      <a href="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
    </div>
  </div>
</nav>
<Scrollbar isOpen={open}></Scrollbar>
    </div>
  )
}

export default Home;