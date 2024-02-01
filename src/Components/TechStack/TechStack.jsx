import React from "react";
import '../Projects/project.css'
import '../SharedStyles/btnStyles.css'
import '../SharedStyles/CommonCss.css'

import reactImage from '../../Images/Logos/png-transparent-react-react-native-logos-brands-in-colors-icon.png'
import javascriptImage from '../../Images/Logos/JavaScript-logo.png'
import axiosImage from '../../Images/Logos/logo_axios_00.png'
import sqlImage from '../../Images/Logos/logo_sql.png'
import springBootImage from '../../Images/Logos/logo_spring.png'
import javaImage from '../../Images/Logos/logo_java.png'
import vueImage from '../../Images/Logos/logo_vue.png'
import jpaImage from '../../Images/Logos/logo_jpa.png'
import dockerImage from '../../Images/Logos/logo_docker.png'
import ComponentTech from "./ComponentTech";

function TechStack(){

    const axios = {
        name: 'Axios',
        image: axiosImage, 
        alt: 'Logo Axios',
        text: "I've worked with Axios to consume my API REST i some of my projects."
    }

    const vue = {
        name: 'Vue',
        image: vueImage, 
        alt: 'Logo Vue',
        text: "I've used Vue in my final project at academy as framework."
    }

    const react = {
        name: 'React',
        image: reactImage, 
        alt: 'Logo React',
        text: "React is the library that I have used more in my frontEnd projects."
    }

    const javascript = {
        name: 'Javascript',
        image: javascriptImage, 
        alt: 'Logo Javascript',
        text: "I learned Javascript during my studies, and I used in all my projects."
    }

    const java = {
        name: 'Java',
        image: javaImage, 
        alt: 'Logo java',
        text: "Java was the main language during my studies, after that I've been working with Java majorly creating API REST."
    
    }

    const springBoot = {
        name: 'Spring Boot',
        image: springBootImage, 
        alt: 'Logo SpringBoot',
        text: "I use Spring Boot JPA in order to manage my data."
    
    }
    const springBootJpa = {
        name: 'Spring Boot JPA',
        image: jpaImage, 
        alt: 'Logo JPA',
        text: "I use Spring Boot to develop my API REST."
    
    }

    const sql = {
        name: 'SQL',
        image: sqlImage, 
        alt: 'Logo SQL',
        text: "I've used SQL lenguage, and I still learning."
    
    }

    const docker = {
        name: 'Docker',
        image: dockerImage, 
        alt: 'Logo Docker',
        text: "I've been using docker to deploy some of my projects."
    
    }

    return(
        <div className="main-box-projects">                
            <div className="box-title">
                <p className="title ">Tech Stack</p>
            </div>
            <div className="box-introduction">
                <p>These are some technologies wich I've been working on my education and personal projects projects during this last years leraning Web Development.</p>
            </div>
            <div className="box-projects">
                <div className="box-title-section"> 
                    <p className="title-section left">BackEnd</p>
                </div>
                <ComponentTech content={java}/> 
                <ComponentTech content={springBoot}/>             
                <ComponentTech content={springBootJpa}/> 
                <ComponentTech content={sql}/>        
                <ComponentTech content={docker}/>                  
            </div>
            <div className="box-projects">
                <div className="box-title-section">
                    <p className="title-section left">FrontEnd</p>
                </div>
                <ComponentTech content={javascript}/>
                <ComponentTech content={react}/>
                <ComponentTech content={axios}/>
                <ComponentTech content={vue}/>              
            </div>
        </div>  

    )
}

export default TechStack;