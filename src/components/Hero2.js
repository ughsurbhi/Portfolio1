import "./Hero2.css"
import React, { Component } from 'react'
import Hero from "../assets/hero2.jpg"
class Hero2 extends Component{
  render(){
    return (
      <div className="hero">
          <div className="mask">
          <img src={Hero} alt="Hero" className="intro" />    
          </div>
        <div className="content">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  };
  
}

export default Hero2
