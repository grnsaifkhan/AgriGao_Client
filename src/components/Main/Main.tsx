import React from 'react'
import Search from '../Search/Search'
import CartItem from '../CartItem/CartItem'

const Main = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
        <Search></Search>
        <CartItem></CartItem>
    </div>
  )
}

export default Main