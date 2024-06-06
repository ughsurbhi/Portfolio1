import "./Workcard.css"
import React from 'react'
// import ProjectCardData from './WorkCardData'
import { NavLink } from "react-router-dom"
const Workcard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="calculator"/>
            <h2 className="project-title">{props.title}</h2>
            <div className="details">
                <p>{props.text}</p>
                <div className="pro-btn">
                    <NavLink to={props.view} className="btn">View</NavLink>
                </div>
                <div className="pro-btn">
                    <NavLink to={props.source} className="btn">Source</NavLink>
                </div>
            </div>
        </div>
  )
}

export default Workcard
