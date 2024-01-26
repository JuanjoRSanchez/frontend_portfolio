import './headerGames.css'

export default function HeaderGames(props) {

    return (
        <>
            <header className='headerJuegos'>
                {props.titulo}
            </header>
        </>
    )
}