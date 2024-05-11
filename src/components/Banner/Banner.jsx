import React from 'react'
import BiryaniImg from "../../assets/biryani5.png"
import Vector from "../../assets/vector3.png"
import { IoFastFood } from 'react-icons/io5';
import { GrSecure } from 'react-icons/gr';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      };
  return (
    <div className='min-h-[550px] bg-gradient-to-b from-gray-400 to-gray-200 dark:bg-gradient-to-b dark:from-dark dark:to-blue-950'>
        <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
            <div 
            data-aos="slide-up"
            data-aos-duration="300"
            className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Image section */}
                    <div>
                        <img
                        src={BiryaniImg}
                        alt="biryani img"
                        className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_#e8dfdf] my-auto spin'
                        />
                    </div>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl text-gray-700 sm:text-4xl font-bold dark:text-gray-100'>
                            <span className='text-green-700 dark:text-green-500'>"Reliable" </span>is the feel
                        </h1>
                        <p className='text-sm text-gray-700 tracking-wide leading-5 dark:text-gray-100'>
                            We're always at your service in fostering your comfortability with our system. 
                            <br/>
                            <br/>
                            Perfect order fulfillment - Reliable logistics for order delivery
                        </p>
                        <div className='flex gap-6'>
                            <div>
                                <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-300 dark:bg-violet-400 hover:scale-110 hover:-rotate-12 duration-200'/>
                            </div>
                            <div>
                                <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-300 dark:bg-orange-400 hover:scale-110 hover:-rotate-12 duration-200'/>
                            </div>
                            <div>
                                <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-500 dark:bg-green-400 hover:scale-110 hover:-rotate-12 duration-200'/>
                            </div>
                        </div>
                        <div>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md hover:scale-105 duration-200 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-green-600'>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner