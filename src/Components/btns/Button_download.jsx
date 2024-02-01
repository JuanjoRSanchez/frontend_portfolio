import '../SharedStyles/btnStyles.css'
import pdfUrl from '../../Content/Curriculum_JuanjoRubioSanchez.pdf'

function Button_download(props){

    return(
             <a href={pdfUrl} target='_blank' rel='noreferrer'><button  type='button' className="btn-download">{props.content.title}</button></a>
        )
}

export default Button_download;
