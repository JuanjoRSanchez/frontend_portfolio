import React from "react";
import './projects.css'
import '../SharedStyles/btnStyles.css'

import ImagePacman from '../../Images/Packman_Logo.png';
import { pacmanCodeLink } from "../../URLFile";
import ImageConnecta from '../../Images/Connecta4/Conecta_Logo.png'
import { conecta4CodeLink } from "../../URLFile";
import ImageSnake from '../../Images/Snake/Snake_Logo.png'
import { snakeCodeLink } from  "../../URLFile";

import ImageFilmoteca from '../../Images/Filmoteca/LogoFilmoteca00.png'
import ImageRickAndMorty from '../../Images/RickAndMorty/Rick-and-Morty.png'

import reactImage from '../../Images/Logos/png-transparent-react-react-native-logos-brands-in-colors-icon.png'
import javascriptImage from '../../Images/Logos/JavaScript-logo.png'
import htmlImage from '../../Images/Logos/HTML5_logo_and_wordmark.svg.png'
import axiosImage from '../../Images/Logos/logo_axios.png'
import sqlImage from '../../Images/Logos/logo_sql.png'
import springBootImage from '../../Images/Logos/logo_spring.png'
import javaImage from '../../Images/Logos/logo_java.png'
import vueImage from '../../Images/Logos/logo_vue.png'
import jpaImage from '../../Images/Logos/logo_jpa.png'

import Project from './Project.jsx'

function Projects(){


    const react = [reactImage, 'Logo React']
    
    const javascript = [javascriptImage, 'Logo javascript']
    
    const html =  [htmlImage, 'Logo html']

    const axios =  [axiosImage, 'Logo axios']

    const mysql =  [sqlImage, 'Logo SQL']

    const springBoot =  [springBootImage, 'Logo springBoot']

    const java =  [javaImage, 'Logo java']

    const vue =  [vueImage, 'Logo VUE']

    const jpa =  [jpaImage, 'Logo JPA']


    const projectPacman = {
        title : 'Pacman',
        imageProject : ImagePacman,
        linkCode: pacmanCodeLink,
        link: '/pacman',
        text: "I've develope the Pacman game, I've created all the code, besides I've made the graphic elements with Ilustrator.",
        textLink: 'Play game',
        techStack: {javascript, react, html}
    };

    const projectSnake = {
        title : 'Snake',
        imageProject : ImageSnake,
        linkCode: snakeCodeLink,
        link: '/snake',
        text: "I've develope the classic Snake game, feel free to try it. I made it totally by my own.",
        textLink: 'Play game',
        techStack: {javascript, react, html}
    };

    const projectConnecta = {
        title : 'Connecta',
        imageProject : ImageConnecta,
        linkCode: conecta4CodeLink,
        link: '/conecta',
        text: "I've created the Connecta4 game, wich can by played by two players.",
        textLink: 'Play game',
        techStack: {javascript, react, html}
    };

    const projectFilmoteca = {
        title : 'Filmoteca',
        imageProject : ImageFilmoteca,
        linkCode: pacmanCodeLink,
        link: 'https://filmoteca.psycode.es/',
        text: "Filmoteca is the project I did for my developer studies. In this project I used differebt technologies, since frameworks in the front and the back to Data Bases and Docker for the deployment ",
        textLink: 'Visit page',
        techStack: {javascript, react, mysql, springBoot, java, vue, jpa}
    };

    const projectRick = {
        title : 'RickAndMorty',
        imageProject : ImageRickAndMorty,
        linkCode: snakeCodeLink,
        link: 'https://rickymorty.psycode.es/',
        text: "This is my first React aplicationan I did that consumes a the Rick & Morty API using Axios. It shows all the series characters and it gives you information about them.",
        textLink: 'Visit page',
        techStack: {javascript, react, axios}
    };

    return(
        <div className="main-box-projects">                
            <div className="box-title">
                <p className="title ">Some of my projects</p>
            </div>
            <div className="box-introduction">
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className="box-projects">
                <div className="box-title-section">
                    <p className="title-section left">Game projects</p>
                </div>
                <Project  {...projectPacman} />
                <Project  {...projectSnake} />
                <Project  {...projectConnecta} />               
            </div>
            <div className="box-projects">
                <div className="box-title-section"> 
                    <p className="title-section left">API projects</p>
                </div>
                <Project  {...projectFilmoteca} />
                <Project  {...projectRick} />
            </div>
        </div>  
    )
}

export default Projects;

