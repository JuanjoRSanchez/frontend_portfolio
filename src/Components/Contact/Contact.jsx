import React from "react";
import './contact.css'
import '../Projects/project.css'
import '../SharedStyles/btnStyles.css'
import '../SharedStyles/CommonCss.css'
import copyImage from '../../Images/files.png'
import linkedinImage from '../../Images/LI-Logo.svg.original.svg'
import { Link } from "react-router-dom";

function Contact(){
    function myFunction() {
        // Get the text field
        var copyText = "juanjorsanchez81@gmail.com";
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);

    }
    
    return(
        <div className="main-box-projects">                
            <div className="box-title">
                <p className="title ">Contact</p>
            </div>
            <div className="box-introduction">
                <p></p>
            </div>
            <div className="box-projects">
                <div className="box-title-section"> 
                    <p className="title-section left">Email</p>
                </div>
                <div className="box-componentContact">  
                    <div className="box-componentContact-text">
                        <div className="contact-title">
                            <p  className="content"  >This is my usual email, please do not hesitate to contact me.</p>
                        </div>  
                        <a className="no-styles email" href="mailto: juanjorsanchez81@gmail.com" >juanjorsanchez81@gmail.com</a>
                    </div>
                    <div className="box-contact-img">
                        <button onClick={myFunction} className="no-styles copy" > 
                            <img src={copyImage} title="copy email" alt="copy icon"  className="img-contact"/>
                            <div className="box-copy">
                                copy email
                            </div>
                        </button>
                    </div>
                </div>             
            </div>
            <div className="box-projects">
                <div className="box-title-section">
                    <p className="title-section left">LinkedIn</p>
                </div>
                <div className="box-componentContact-2">  
                    <div className="box-componentContact-text-2">
                        <div className="contact-title-2">
                            <p  className="content"  >This is my LinkedIn, you can contact me from here too.</p>
                        </div>  
                        <Link  to="https://www.linkedin.com/in/juan-jos%C3%A9-rubio-s%C3%A1nchez-621034103/" className="contact-title-2"  target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImage}   alt="lofo LinkedIn" className="img-contact-2"/>
                        </Link>
                    </div>
                    
                </div> 
            </div>
        </div>  

    )

}

export default Contact;