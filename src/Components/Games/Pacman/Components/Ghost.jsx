import '../pacman.css'
import '../estilosFantasmas.css'

export default function Fantasma(props) {

    return (
        <div id={props.id} className={ props.clase } ></div>
    );
}