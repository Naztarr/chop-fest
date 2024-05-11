import React, {useState}from 'react'
import Img1 from "../../assets/biryani3.png"
import Img2 from "../../assets/biryani5.png"
import Img3 from "../../assets/biryani2.png"
import Vector from "../../assets/vector3.png"

const ImageList = [
    {
        id: 1,
        img: Img1,
    },
    {
        id: 2,
        img: Img2,
    },
    {
        id: 3,
        img: Img3,
    },
];

const Hero = () => {
    const [imageId, setImageId] = useState(Img1);

    const bgStyling = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    }
    return (
        <div className='min-h-[550px] sm:min-h-[600px] bg-purple-100 flex justify-center items-center dark:bg-blue-950 dark:text-gray-200 duration-200' 
        style={bgStyling}>
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                    <div
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl text-blue-900 font-bold dark:text-indigo-600'>Hey!{" "}
                        <span class='bg-clip-text text-transparent bg-gradient-to-b from-primary to-indigo-600'>
                            Foodie
                        </span>
                        </h1>
                        <p className='text-sm text-indigo-700 dark:text-gray-200'>
                            You definitely wanna rejuvenate your taste buds with our unique blend of tantalizing delicacies
                            </p>
                        <div>
                            <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full dark:bg-gradient-to-r dark:from-indigo-600 dark:to-green-600'>
                                Order Now
                                </button>
                        </div>
                    </div>
                    {/* Image section */}
                    <div className='min-h-[450] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                        <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>
                            <img
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            data-aos-once="true"
                            src={imageId}
                            alt="biryani img"
                            className='w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin'/>
                        </div>
                        <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/20 rounded-full'>
                            {ImageList.map((item) => (
                                <img key={item.id}
                                data-aos="zoom-in"
                                data-aos-duration="400"
                                data-aos-once="true"
                                src={item.img}
                                alt="biryani img"
                                onClick={() => {
                                    setImageId(item.img)
                                }}
                                className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-125 duration-200'/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero