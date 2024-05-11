import React from 'react'
import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";


const ServicesData = [
    {
        id: 1,
        img: Img,
        name: "Biryani",
        description: "Indulge in the rich and aomatic flavors of our signature Biryani, crafted with the finest ingrdients and perfecte over generations. Each bite is a symphony of flavors that create an unforgettable dinning experience."
    },
    {
        id: 2,
        img: Img2,
        name: "Chicken Kari",
        description: "relish the warmth and comfort of our chicken kari, a timeless classic that captures the essence of home-cooked goodness."
    },
    {
        id: 3,
        img: Img3,
        name: "Cold coffee",
        description: "Cool off in the vevelty goodness of our refreshing cold coffee, a delightful blend of smooth espresso, creamy milk, and a touch of sweetness, served over ice."
    }
]

const Services = () => {
    return (
        <div className='py-10 bg-gradient-to-b from-purple-100 to-gray-400 dark:bg-gradient-to-b dark:from-light dark:to-dark'>
            <div className='container'>
                <div className='text-center mb-20 max-w-[400px] mx-auto'>
                    <p className='text-md bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary font-bold text-gray-700 dark:text-indigo-300'>
                        Our Services
                    </p>
                    <h1 className='bg-clip-text text-3xl font-bold text-transparent bg-gradient-to-b from-secondary to-indigo-900 dark:bg-gradient-to-b dark:from-secondary dark:to-white'>
                        Services
                    </h1>
                    <p className='text-xs text-gray-700 dark:text-white'>
                        We serve you the finests available. Take a glance at our services well curated for our customers' satisfaction
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {ServicesData.map((services) => (
                        <div 
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        key={services.id}
                        className='rounded-2xl text-blue-900 bg-white dark:bg-blue-950 hover:bg-primary dark:text-white dark:hover:bg-indigo-500 hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                            <div className='h-[100px]'>
                                <img
                                    src={services.img}
                                    alt=""
                                    className='max-w-[170px] block mx-auto transform -translate-y-14 group-hover:scale-125 group-hover:rotate-12 duration-300' />
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>
                                    {services.name}
                                </h1>
                                <p className='text-indigo-700 dark:text-gray-100 group-hover:text-white duration-high text-sm line-clamp-2'>
                                    {services.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services