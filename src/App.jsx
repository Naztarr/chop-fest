import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import AppStore from './components/AppStore/AppStore.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import Footer from './components/Footer/Footer.jsx';
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100
    })
  }, [])

  return (
    <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <AppStore/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default App