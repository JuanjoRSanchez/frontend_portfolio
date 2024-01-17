import React from "react"
import { Link } from "react-router-dom";
import "./header.css"
import HomeLogo from "../../Images/homeIcon.png"

function Header(){

    return(
        <div className="header-box">
            <div className="header-left">
                <Link to='/'><img className="home-logo" src={HomeLogo} alt="Home icon"/></Link>
            </div>
            <div className="header-right">
                <Link to='/contact' className="contact-box"><p>Contact</p></Link>
            </div>
        </div>
    )
}

export default Header;