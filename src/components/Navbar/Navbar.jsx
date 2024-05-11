import React from 'react'
import Logo from '../../assets/food-logo.png'
import DarkMode from './DarkMode'
import { FaCartShopping } from 'react-icons/fa6'

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
]
const Navbar = () => {
  return (
    <>
    <div className='shadow-md bg-gray-200 dark:bg-indigo-800 text-blue-900 dark:text-gray-200 duration-200 '>
        <div className='container py-3 sm:py-0'>
           <div className='flex justify-between items-center'>
            <div>
                <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={Logo} alt='logo' className='w-10'/>
                    Chopfest
                </a>
            </div>
            <div className='flex justify-between items-center gap-4'>
              <div>
                <DarkMode/>
              </div>
              <ul className='flex sm:flex-col items-center gap-2'>
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a href={menu.link} className='hidden inline-block sm:px-1 hover:text-orange-400'>
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-green-600'>
                Order
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
              </button>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Navbar