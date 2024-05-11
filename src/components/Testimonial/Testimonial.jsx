import React from 'react'
import Slider from 'react-slick';

const testimonialData = [
    {
      id: 1,
      name: "Mary Lynda",
      text: "I had the pleasure of dining at chopfest recently, and I must say, it wasan unforgettable experience! The food was absolutely delicious",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Jude Moore",
      text: "Chopfest exceeded all my expectations! The menu offered a wonderful variety of options, and every dish I tried was exquisite",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Chima Stanley",
      text: "I recently celebrated a milestone birthday at chopfest, and it was an evening to remeber! Whether you're looking for a romantic dinner for two or a memorable celebration with friends and family, chopfest is the perfect choice",
      img: "https://picsum.photos/103/103",
    },
  ];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    }
  return (
    <div data-aos="fade-up" data-aos-duration="300" className='py-10 bg-gradient-to-b from-gray-300 to-purple-200 dark:bg-gradient-to-b dark:from-gray-500 dark:to-dark'>
        <div className='container'>
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-orange-400'>
                    What our customers say
                </p>
                <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-300'>
                    Testimonial
                </h1>
                <p className='text-xs text-gray-700 dark:text-gray-300'>
                See what some of our customers have to say about us
                </p>
            </div>
            <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
                <Slider {...settings}>
                {testimonialData.map((data) => {
                        return (
                            <div className='my-6'>
                                <div key={data.id}
                                className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 rounded-xl dark:bg-gradient-to-b dark:from-cyan-900 dark:to-indigo-900 bg-gradient-to-b from-primary to-secondary/20 relative'>
                                    <img
                                    src={data.img}
                                    alt=""
                                    className='rounded-full block mx-auto'
                                    />
                                    <p className='text-gray-700 text-sm dark:text-gray-300'>  {data.text} </p>
                                    <h1 className='text-xl font-bold text-gray-800 dark:text-gray-400'> {data.name} </h1>
                                    <p className='text-black/20 text-9xl font-serif absolute top-16 right-0 dark:text-gray-400'>"</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial