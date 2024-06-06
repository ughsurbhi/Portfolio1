import "./Footer.css"
import React from 'react'
import { FaBook } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer">
        <div className="foot-container">
            <div className="left">
                <div className="college">
                    <FaBook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                    <p>KIIT University</p>
                    <p>Bhubaneswar</p>
                    </div>
                </div>
                <div className="mail">
                <IoIosMail  size={20} style={{color:"#fff",marginRight:"2rem"}} />
                <div>
                    <p>kumarisurbhi301@gmail.com</p>
                </div>
                </div>
            </div>

            <div className="right"></div>
        </div>
      
    </div>
  )
}

export default Footer
