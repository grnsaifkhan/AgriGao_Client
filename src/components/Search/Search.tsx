import React from 'react'
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className={`flex h-12 items-center rounded-md bg-lime-100 m-2 px-2 border border-black border-2`} >
        <BsSearch className={`text-black text-lg cursor-pointer m`}/>
        <input type={'search'} placeholder='Search' className={`text-base bg-transparent w-full ml-4 text-black focus:outline-none`}/>
    </div>
  )
}

export default Search