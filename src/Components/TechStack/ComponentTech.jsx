import './componentTech.css'


function ComponentTech(props){
    console.log(props)
    console.log(props.content.image)

    return(
        <div className="box-componenTech">  
            <div className="box-componenTech-text">
                <p className="content" >{props.content.text}</p>    
            </div>
            <div className="box-componenTech-img">
                <div className="technology-title">
                    <p>{props.content.name}</p>
                </div>
                <div className='box-img'>
                    <img className="img-componenTech" src={props.content.image} alt={props.content.alt} />

                </div>
            </div>
        </div>
    )

}

export default ComponentTech;


