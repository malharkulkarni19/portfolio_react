import React from 'react'
import Footer from '../components/Footer'
import Forms from '../components/Forms'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact" text="Contact me from information below"/>
      <Forms />
      <Footer />
    </div>
  )
}

export default Contact