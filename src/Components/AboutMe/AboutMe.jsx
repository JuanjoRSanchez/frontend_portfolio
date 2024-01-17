import React from "react";
import '../SharedStyles/CommonCss.css'
import './aboutMe.css'
import Llave_izquierda from '../../Images/Key_left.svg'
import Llave_derecha from '../../Images/Key_rigth.svg'

function AboutMe(){
    return(
        <div className="main-box-about">
            <div className="box-about">
                <div className="box-about-left">
                    <div className="title">
                        <p className="left-text">Some about me</p>
                    </div>
                </div>
                <hr/>
                <div className="box-about-right">
                    <img className="key-about" src={Llave_izquierda} alt="Llave"/>
                    <div className="right-text">
                        <p>
                        My complete name is Juanjo Rubio Sánchez I was born in a town near to Barcelona and nowadays I'm living at Granada city. I'm a couriose person. I worked in logistic during a long time, after that I started a Certificate of Higher Education on Mecanical Design and I was working as a CAD designer for a few years. Recently I finished a new Certificate of Higher Education on Web Application Design and atually I'm excited to work in this sector. I consider myself a good team worker, I like to work in a healthy environment, for my is an important point.

                        </p>
                    </div>
                    <img className="key-about" src={Llave_derecha} alt="Llave"/>
                </div> 
            </div>  
        </div>
    )
}

export default AboutMe;