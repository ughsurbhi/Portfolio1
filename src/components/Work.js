import "./Workcard.css"
import React from 'react'
// import calculator from '../assets/calculator.png'
// import { NavLink } from "react-router-dom"
import Workcard from "./Workcard"
import WorkCardData from "./WorkCardData"
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val,ind)=>{
            return (
                <Workcard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work
