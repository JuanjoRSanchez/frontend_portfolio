import '../SharedStyles/btnStyles.css'
import './curriculum.css'
import '../SharedStyles/btnStyles.css'
import ButtonDownload from '../btns/Button_download'
import ComponentCurriculum from "./ComponentCurriculum";

function Curriculum(){

    const vocationalTraining_01 = {
        name: 'Vocational Training DAW (Development of Web Applications)',
        date: "2020 to 2022",
        where: 'Instituto FOC (Granada)',
        explanation: 'I started the course while I was working, in order to make a change in my career. I choose this course because is two years long and I considered that touch the main points of developing. '
    }

    const vocationalTraining_02 = {
        name: 'Vocational Training Mechanical Fabrication Design ',
        date: "2011 to 2013",
        where: 'Escola del Treball (Barcelona)',
        explanation: 'I did this course because I like the technical drawing, and as an attempt to improve my working situation.'
    }

    const vocationalTraining_03 = {
        name: 'Course of sheet iron cutting and forming',
        date: "2013 to 2014",
        where: 'ASCAMM (Barcelona)',
        explanation: 'This course is a specialization in sheet metal die design.'
    }

    const practice = {
        name: "Practice from my Vocational Trainig at Center's Auto",
        date: "2022 March to June",
        where: "Granada",
        explanation: 'Majorly I did design change in the web page and help with a web scraper made in C#.'
    }

    const sider = {
        name: 'CAD Designer at Sider',
        date: "2016 to 2019",
        where: 'Sabadell (Barcelona)',
        explanation: "I worked in the engineering department, designing the fabrication process with CAD toole 'CATIA'."
    }

    const general = {
        name: 'Logystic in diferents roles',
        date: "2001 to 2016",
        where: 'Sabadell (Barcelona)',
        explanation: 'I worked in different roles, the last role was group coordinator in an automated warehouse. '
    }

    const button = {
        title: 'Download curriculum PDF',

    }

    return(
        <div className="main-box-projects">                
            <div className="box-title">
                <p className="title ">Experience and curriculum</p>
            </div>
            <div className="box-introduction">
                <p>My background until now didn't had direct relation with the web development sector, that's why I didn't put all past jobs or estudies, only those that I've considered most important. If you are interested please to watch my linkedIn or ask to me.</p>
                <ButtonDownload content={button} />
            </div>        
            <div className="box-introduction">
                <p></p>
            </div>
            <div className="box-projects">
                <div className="box-title-section">
                    <p className="title-section left">Estudies</p>
                </div>
                <ComponentCurriculum content={vocationalTraining_01}/> 
                <ComponentCurriculum content={vocationalTraining_03}/>
                <ComponentCurriculum content={vocationalTraining_02}/>
            </div>
            <div className="box-projects">
                <div className="box-title-section"> 
                    <p className="title-section left">Experience</p>
                </div>
                <ComponentCurriculum content={practice}/>    
                <ComponentCurriculum content={sider}/>    
                <ComponentCurriculum content={general}/>    

            </div>
        </div>  
    )
}

export default Curriculum;