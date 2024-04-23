import React from 'react'
// import Navbar from './../Navbar/Navbar'
import Banner from '../Banner/Banner'
import ServicesSection from '../Services/Services'
import About from '../About/About'
import Footer from '../Footer/Footer'

const Landingpage = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Banner />
        <ServicesSection />
        <About />
        <Footer />
    </div>
  )
}

export default Landingpage