import "./NavStyle.css"

import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";
//import { useEffect } from "react";

const Navbar = () => {

  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);


  const[color,setColor]=useState(false);
  const changeColor=()=>{
    if(window.scrollY>=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };

useEffect(()=>{
  window.addEventListener("scroll",changeColor);
  return()=>{
    window.removeEventListener("scroll", changeColor);
  };
},[])

  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio!</h1>
      </Link>
      <ul className={click ? "nav active" : "nav"}>
        <li>
            <Link to="/" onClick={handleClick}>Home</Link>
        </li>
        <li>
            <Link to="/projects" onClick={handleClick}>Projects</Link>
        </li>
        <li>
            <Link to="/about" onClick={handleClick}>About</Link>
        </li>
        <li>
            <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>
      <div className="burger" onClick={handleClick}>
        {click? (
        <FaTimes size={20} style={{color:'#fff'}} />):( <FaBars size={20} style={{color:'#fff'}} />)}
      </div>
    </div>
  )
}

export default Navbar
