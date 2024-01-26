import './pacman.css'
import './ghostStyles.css'
import '../../SharedStyles/CommonCss.css'
import Board from './Components/Board.jsx'

export default function Pacman() {

////// manejar botón de reinicio //////////////
    function reiniciarPartida() {
        window.location.reload();
        return false;
    }
    
    return (
        <div className="main-box">
            <div className='box-title'>
                <p className='title'>Pacman</p>
            </div>
            <div className='game-instructions'>
                <p>
                    To move you should use the next keys, key 1: left, key 3: right, key 5: up, key 2: down.<br/>
                </p>
            </div>
            <Board />
            <div id="box-alert" className='box-hide'>
                <div id="content-mesaje">
                </div>
                <button type='button' onClick={reiniciarPartida} id='btnMesage' className='btnFinal'>Close and restart</button>
            </div>
        </div>
    )
}