import '../pacman.css'
import '../ghostStyles.css'

export default function Casilla(props) {
   
   
    return (
        <div id={props.id}  className={ props.clase } ></div>
    );
}