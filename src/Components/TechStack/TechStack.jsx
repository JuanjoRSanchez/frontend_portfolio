import React from "react";
import '../Projects/project.css'
import '../SharedStyles/btnStyles.css'
import '../SharedStyles/CommonCss.css'

function TechStack(){
    return(
        <div className="main-box-projects">                
            <div className="box-title">
                <p className="title ">Tech Stack</p>
            </div>
            <div className="box-introduction">
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className="box-projects">
                <div className="box-title-section">
                    <p className="title-section left">BackEnd</p>
                </div>
                           
            </div>
            <div className="box-projects">
                <div className="box-title-section"> 
                    <p className="title-section left">FrontEnd</p>
                </div>
                
            </div>
            <div className="box-projects">
                <div className="box-title-section"> 
                    <p className="title-section left">Others technologies</p>
                </div>

            </div>
        </div>  

    )
}

export default TechStack;