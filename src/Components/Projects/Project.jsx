// import { Link } from 'react-router-dom';
// import './projects.css'
import './project.css'

import '../SharedStyles/btnStyles.css'
import { Link } from 'react-router-dom'


function Project(props){
    let twoLinkCode = null;
    const tech = props.techStack;
    const newArray = [];
    for (const property in tech) {
        newArray.push(tech[property])

    }

    props.title === 'Filmoteca' ? twoLinkCode = true : twoLinkCode = false;
    function CodeLinks(){
        return(
            <div className="box-project-text">
                <p className="text-center"> {props.text} </p>
                <a href={props.linkCode} className="btn btn-two-codes" target="_blank" rel="noopener noreferrer">View my Front code</a>
                <a href={props.linkCode} className="btn btn-two-codes" target="_blank" rel="noopener noreferrer">View my Back code</a>
            </div>
        )
    }

    function CodeLink(){
        return(
            <div className="box-project-text">
                <p className="text-center"> {props.text} </p>
                <a href={props.linkCode} className="btn " target="_blank" rel="noopener noreferrer">View my code</a>
            </div>
        )
    }
    return(
        <div className="box-project">
            <div className="box-project-img">
                <img className="img-game" src={props.imageProject} alt="Imagen del logo " />
                <Link to={props.link}   className="btn ">{props.textLink}</Link>
            </div>
            <hr className="projects-hr"/>
                {
                    twoLinkCode 
                    ?
                    <CodeLinks />
                    :
                    <CodeLink />
                }                
            <hr className="projects-hr"/>
            <div className="box-project-tech">
                <p className="" >Tech Stack</p>    
                <div className="box-logos">
                    {newArray.map((obj, index) => {
                        return(<img src={ obj[0] } alt={ obj[1] } key={index} className="img-logo"/>)
                    })
                    }
                    
                </div>
            </div>
        </div>
    )

}

export default Project;


