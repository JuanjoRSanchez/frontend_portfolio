import './conecta.css'
import './conectaGame.css'
import '../../SharedStyles/CommonCss.css'
import '../../SharedStyles/btnStyles.css'

export default function Conecta() {

    let activeUser = '';
    let mm1 = '';
    let mm2 = '';
    let mm = '';

    function mostrarRegistro() {
        document.querySelector('label').textContent = 'Introduce the name of the first player'
        document.getElementById('usuario').style.display = "flex";
    }

    function saveUser() {
        let userName = document.getElementById('userName');
        if (activeUser.length === 0) {
            console.log(userName.value)
            localStorage.setItem('UserName_1', userName.value);
            userName.value = ' ';
            activeUser = 'first'
            mm1 = userName.value;
            document.querySelector('label').textContent = 'Introduce the name of the second player'

        } else {
            document.querySelector('label').textContent = 'Introduce the name of the second player'
            localStorage.setItem('UserName_2', userName.value);
            activeUser = '';
            mm2 = userName.value
            mm = mm1 + '-' + mm2
            console.log(mm)
            window.location.href = '/conecta4Game';
        }
    }


    return (
        <div className='main-box'>
            <div className='box-title'>
                <p className='title'> Connecta 4</p>
            </div>
            <button className="btn" id='btn-inicio' onClick={mostrarRegistro}>Start game</button>     
            <div className="usuario" id='usuario'>
                <div className="cl">
                    <label ></label>
                    <input type="text" name="nombre2" id="userName" />
                    <button className="btnGuardar" onClick={saveUser} id='btn-guardar'>Save user </button>
                </div>
            </div>
        </div>
    )
}

