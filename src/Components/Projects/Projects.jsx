import React from "react";
import { Link } from "react-router-dom";
import './projects.css'
import '../SharedStyles/btnStyles.css'
import ImagePacman from '../../Images/Packman_Logo.png';
import { pacmanCodeLink } from "../../URLFile";
import ImageConnecta from '../../Images/Connecta4/Conecta_Logo.png'
import { conecta4CodeLink } from "../../URLFile";
import ImageSnake from '../../Images/Snake/Snake_Logo.png'
import { snakeCodeLink } from  "../../URLFile";
import LogoReact from '../../Images/Logos/png-transparent-react-react-native-logos-brands-in-colors-icon.png'
import LogoJavascript from '../../Images/Logos/JavaScript-logo.png'
import LogoHtmal from '../../Images/Logos/HTML5_logo_and_wordmark.svg.png'

function Projects(){

    
    var linkToPacmanCode = pacmanCodeLink;

    return(
        <div className="main-box-projects">                
            <div className="box-title">
                <p className="title ">Some of my projects</p>
            </div>
            <div className="box-projects">
                    <div className="box-title-section">
                        <p className="title-section left">Game projects</p>
                    </div>
                    <div className="box-project">
                        <div className="box-project-img">
                            <img className="img-game" src={ImageSnake} alt="Imagen del logo del juego Pacman " />
                            <Link to={'/snake'} className="btn ">Play game</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-text">
                            <p className="text-center"> I've develope de Pacman game, in order to improve my logic as a developer. </p>
                            <Link to={snakeCodeLink} className="btn">View my code</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-tech">
                            <p className="" >Tech Stack</p>    
                            <div className="box-logos">
                                <img src={LogoReact} alt="Logo react" className="img-logo"/>
                                <img src={LogoJavascript} alt="Logo Javascript" className="img-logo"/>
                                <img src={LogoHtmal} alt="Logo html" className="img-logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="box-project">
                        <div className="box-project-img">
                            <img className="img-game" src={ImageConnecta} alt="Imagen del logo del juego Pacman " />
                            <Link to={'/conecta4'} className="btn ">Play game</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-text">
                            <p className="text-center"> I've develope de Pacman game, in order to improve my logic as a developer. </p>
                            <Link to={conecta4CodeLink} className="btn">View my code</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-tech">
                            <p className="" >Tech Stack</p>    
                            <div className="box-logos">
                                <img src={LogoJavascript} alt="Logo Javascript" className="img-logo"/>
                                <img src={LogoHtmal} alt="Logo react" className="img-logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="box-project">
                        <div className="box-project-img">
                            <img className="img-game" src={ImagePacman} alt="Imagen del logo del juego Pacman " />
                            <Link to={'/pacman'} className="btn ">Play game</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-text">
                            <p className="text-center"> I've develope de Pacman game, in order to improve my logic as a developer. </p>
                            <Link to={linkToPacmanCode} className="btn">View my code</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-tech">
                            <p className="" >Tech Stack</p>    
                            <div className="box-logos">
                                <img src={LogoReact} alt="Logo react" className="img-logo"/>
                                <img src={LogoJavascript} alt="Logo react" className="img-logo"/>
                                <img src={LogoHtmal} alt="Logo react" className="img-logo"/>
                            </div>
                        </div>
                    </div>
                
                <div className="spacer"></div>
            </div>
            <div className="box-projects">
                    <div className="box-title-section"> 
                        <p className="title-section left">API projects</p>
                    </div>
                    <div className="box-project">
                        <div className="box-project-img">
                            <img className="img-game" src={ImagePacman} alt="Imagen del logo del juego Pacman " />
                            <Link to={'/pacman'} className="btn ">Play game</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-text">
                            <p className="text-center"> I've develope de Pacman game, in order to improve my logic as a developer. </p>
                            <Link to={linkToPacmanCode} className="btn">View my code</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-tech">
                            <p className="" >Tech Stack</p>    
                            <div className="box-logos">
                                <img src={LogoReact} alt="Logo react" className="img-logo"/>
                                <img src={LogoJavascript} alt="Logo react" className="img-logo"/>
                                <img src={LogoHtmal} alt="Logo react" className="img-logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="box-project">
                        <div className="box-project-img">
                            <img className="img-game" src={ImagePacman} alt="Imagen del logo del juego Pacman " />
                            <Link to={'/pacman'} className="btn ">Play game</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-text">
                            <p className="text-center"> I've develope de Pacman game, in order to improve my logic as a developer. </p>
                            <Link to={linkToPacmanCode} className="btn">View my code</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-tech">
                            <p className="" >Tech Stack</p>    
                            <div className="box-logos">
                                <img src={LogoReact} alt="Logo react" className="img-logo"/>
                                <img src={LogoJavascript} alt="Logo react" className="img-logo"/>
                                <img src={LogoHtmal} alt="Logo react" className="img-logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="box-project">
                        <div className="box-project-img">
                            <img className="img-game" src={ImagePacman} alt="Imagen del logo del juego Pacman " />
                            <Link to={'/pacman'} className="btn ">Play game</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-text">
                            <p className="text-center"> I've develope de Pacman game, in order to improve my logic as a developer. </p>
                            <Link to={linkToPacmanCode} className="btn">View my code</Link>
                        </div>
                        <hr className="projects-hr"/>
                        <div className="box-project-tech">
                            <p className="" >Tech Stack</p>    
                            <div className="box-logos">
                                <img src={LogoReact} alt="Logo react" className="img-logo"/>
                                <img src={LogoJavascript} alt="Logo react" className="img-logo"/>
                                <img src={LogoHtmal} alt="Logo react" className="img-logo"/>
                            </div>
                        </div>
                    </div>
                
                <div className="spacer"></div>
            </div>
        </div>  
    )
}

export default Projects;