import "./Footer.css"
import React from 'react'
import { FaBook, FaGithub } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    const linkedinUrl="https://www.linkedin.com/in/surbhi-singh-59ba82201/";
    const githubUrl="https://github.com/ughsurbhi";
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

            <div className="right">
                <h4>Let's connect!</h4>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
