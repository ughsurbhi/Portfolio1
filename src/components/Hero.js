import "./Hero.css"
import React from 'react'
import Intro from "../assets/intro.jpg"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro" src={Intro} alt="Intro" />
      </div>
      <div className="content">
        <h1>Hi, I'm Surbhi Singh.</h1>
        {/* <h1>Web Developer</h1> */}
        <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
