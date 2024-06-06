//import { Link } from "react-router-dom"
import "./AbouContent.css"
import React from 'react'
//import { Link } from "react-router-dom"
import react1 from "../assets/react.jpeg"
import react2 from "../assets/wevdev.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Surbhi Singh</h1>
        
        <p>I'm an aspiring full-stack developer with a love for crafting captivating user experiences and bringing designs to life through code. With a foundation in front-end technologies and a hunger for knowledge, I'm eager to embark on the exhilarating journey of mastering the entire web development stack.</p>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="top">
                <img src={react1} className="img" alt="react1" />
            </div>
            <div className="bottom">
                <img src={react2} className="img" alt="react2" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
