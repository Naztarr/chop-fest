import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationPin } from 'react-icons/fa6'
import FooterLogo from "../../assets/food-logo.png"

const Footer = () => {
  return (
    <div className='bg-gray-300 dark:bg-indigo-800'>
        <section className='max-w-[1200px] mx-auto'>
            <div className='grid md:grid-cols-3 py-5'>
                <div className='py-8 px-4 text-gray-800 dark:text-white'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 darK:text-gray-200'>
                        <img 
                        src={FooterLogo}
                        alt="Logo"
                        className='max-w-[50px]'/>
                        Chopfest
                    </h1>
                    <p>
                        Harmonizing tastiness and satisfaction
                    </p>
                    <br />
                    <div className='flex items-center gap-3'>
                        <FaLocationPin className='text-green-800 dark:text-gray-200'/>
                        <p className='text-green-800 dark:text-white'>Lagos, Nigeria</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaMobileAlt className='text-brown-500 dark:text-gray-200'/>
                        <p className='text-brown-500'>+234 9037136349</p>
                    </div>
                    {/*Social Handle*/}
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#">
                            <FaInstagram className='text-3xl bg-gradient-to-r from-purple-500 to-red-500 p-0.5 rounded-lg text-white'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl text-blue-700 dark:text-white'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl text-blue-900 dark:text-white'/>
                        </a>
                    </div>
                </div>
                        <div className='py-8 px-4 text-gray-800 dark:text-white'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3 darK:text-gray-200'>
                                Important Links
                            </h1>
                            <ul className={`grid grid-cols-2 gap-4`}>
                                <li className="cursor-pointer">Home</li>
                                <li className="cursor-pointer">About</li>
                                <li className="cursor-pointer">Careers</li>
                                <li className="cursor-pointer">Services</li>
                                <li className="cursor-pointer">Login</li>
                                <li className="cursor-pointer">FAQ</li>
                            </ul>
                        </div>
            </div>
            <div>
                <div className='text-center py-10 border-t-2 border-gray-400/50 text-gray-800 dark:text-white'>
                @copyright 2024 All rights reserved || Designed by Naztarr
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer