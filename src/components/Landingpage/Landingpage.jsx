import React from 'react'
import Banner from '../Banner/Banner'
import ServicesSection from '../Services/Services'
import About from '../About/About'
import Footer from '../Footer/Footer'
import './landingpage.css'
const Landingpage = () => {
  return (
    <div>
      <Banner />
      <ServicesSection />
      <About />
      <Footer />
    </div>
  )
}

export default Landingpage