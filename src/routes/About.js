import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import AboutContent from '../components/AboutContent'
import {BsCupHotFill} from "react-icons/bs"
const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="About." text={
        <p>I am a Front-End Developer who has had more tea in her life than meals just to keep herself awake at odd hours. <BsCupHotFill size={20} style={{color:"#fff",marginRight:"2rem"}}/></p>
      } />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
