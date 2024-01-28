import React from 'react'
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
import menu from "../../assets/menu.png"
import polo from "../../assets/polo-shirts.jpg"
const CartItem = () => {
    const openWindow = () => {
        console.log('TOmato grated');
    }
  return (
    <div className="w-40 h-56 m-2 gap-x-4 py-2 rounded border-black border-2 font-light relative">
        <button className='hover:bg-black'><img src={polo} className='w-96'/></button>
        <span className='text-base font-medium px-4 items-center flex'>Tomato 1000 gm</span>
        <span className='text-base font-medium px-16 items-center flex'>200৳</span>
        <button className='bg-lime-100 rounded-md mx-9 w-fit text-base font-medium flex
            hover:bg-lime-200' onClick={() => openWindow()}>Add to cart</button>
    </div>
  )
}

export default CartItem