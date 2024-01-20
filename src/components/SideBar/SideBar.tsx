import React, { useState } from 'react'
import { BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson  } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { GiFruitBowl, GiFruiting } from "react-icons/gi";
import { AiOutlineFileText, AiOutlineBarChart, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";

const SideBar = ({isOpen}: any) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState({id: 0, isActive: false});
    const menus = [
        {id: 1, title: "Offers"},
        {id: 2, title: "Daily Deals"},
        {id: 3, title: "Flash Sales"},
        {id: 4, title: "Popular", icon : <IoHeartSharp />},
        {id: 5, title : "Favourites", icon : <AiOutlineFileText/>},
        {id: 6, title: "Media", spacing : true, icon: <BsFillImageFill/>},
        {   id: 7,
            title : "Fruits",
            icon: <GiFruitBowl />,
            submenu: true,
            isActive: false,
            submenuItems: [
                {title: "All Fruit Items"},
                {title: "Seasonal Fruits"},
                {title: "Regular Fruits"},
            ]
        },
        {   id: 8,
            title : "Vegetables",
            icon: <GiFruiting />,
            submenu: true,
            isActive: false,
            submenuItems: [
                {title: "All Vegetable Items"},
                {title: "Seasonal Vegetables"},
                {title: "Regular Vegetable"},
            ]
        },
        {id: 9, title: "Analytics", icon:<AiOutlineBarChart/>},
        {id: 10, title : "Inbox", icon: <AiOutlineMail/>},
        {id: 11, title: "Profile", spacing : true, icon: <BsPerson/>},
        {id: 12, title: "Setting", icon: <AiOutlineSetting/>},
        {id: 13, title: "Logout", icon: <AiOutlineLogout/>},
    ];

  return (
    <div className={`${isOpen? 'w-72 px-2' : 'w-0'} duration-300 h-screen bg-lime-100 relative`}>
        <div className={`flex items-center rounded-md bg-lime-200 mt-6 px-4 py-2 ${!isOpen && "scale-0"}`} >
            <BsSearch className={`text-black text-lg block float-left cursor-pointer`}/>
            <input type={'search'} placeholder='Search' className={`text-base bg-transparent w-full text-black focus:outline-none ${!isOpen && "scale-0"}`}/>
        </div>
        <ul className={`pt-2 ${!isOpen && "scale-0"}`}>
            {menus.map((menu, index) => (
                <>
                    <li key={index} className={`text-gray-950 text-sm flex 
                    items-center gap-x-4 cursor-pointer p-2
                    hover:bg-lime-200 rounded-md mt-2 ${menu.spacing? 'mt-9' : 'mt-2'}`}>
                        <span className='text-2xl block float-left'>
                            {menu.icon? menu.icon : <RiDashboardFill/>}
                        </span>
                        <span className='text-base font-medium flex-1'>{menu.title}</span>
                        {menu.submenu && isOpen && (
                            <BsChevronDown className={`${menuOpen.isActive && menuOpen.id === menu.id && "rotate-180"} duration-300`} onClick={() => setMenuOpen({id: menu.id, isActive :!menu.isActive})}/>
                        )}
                    </li>
                    {menu.submenu && menuOpen.isActive && menuOpen.id === menu.id && isOpen &&(
                        <ul>
                            {menu.submenuItems?.map((submenuItem, index) => (
                                <li key={index} className={`text-gray-950 text-sm flex 
                                items-center gap-x-4 cursor-pointer p-2 px-5
                                hover:bg-lime-200 rounded-md`}>
                                    {submenuItem.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ))}
        </ul>
    </div>

  )
}

export default SideBar