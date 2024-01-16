import React from "react"
import "./header.css"
import HomeLogo from "../../Images/homeIcon.png"

function Header(){

    return(
        <div className="header-box">
            <div className="header-left">
                <img className="home-logo" src={HomeLogo} alt="Home icon"/>
            </div>
            <div className="header-right">
                <div className="contact-box"><p>Contact</p></div>
            </div>
        </div>
    )
}

export default Header;