import './componentCurriculum.css'


function ComponentCurriculum(props){
    console.log(props)
    console.log(props.content.image)

    return(
        <div className="box-componenTech">  
            <div className="box-componenTech-text-one">
                <div className='we-title '>
                    <p className="content" >{props.content.name}</p>  
                </div >
                <hr className='hr-curriculum'/>
                <div className='we'>
                    <p className="content" >{props.content.explanation}</p>  
                </div >
            </div>
            <div className="box-componenTech-text-two">
                <div className='we'>
                    <p className="content" >{props.content.date}</p>  
                </div >
                <div className='we'>
                    <p className="content" >Location: {props.content.where}</p>  
                </div>
            </div>
        </div>
    )
}

export default ComponentCurriculum;
