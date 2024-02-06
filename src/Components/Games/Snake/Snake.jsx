import './snake.css'
import '../../SharedStyles/CommonCss.css'
import Box from './Box'
import { useEffect } from 'react';


export default function Snake() {

    var active = false;

    // Variable con la dirección actual del movimiento de la serpiente
    let direccion = 'arriba';
    let direccionPrevia = 'abajo';

    // Cantidad de columnas y filas de la cuadricula
    let cuadros = 15;

    // Velocidad del juego
    let velocidad = 200;
    /* Objeto que representa la serpiente 
        El cuerpo son las posiciones que ocupa la serpiente 
        La longitud es la logitud total de la serpiente
        El color es el color de la serpiente
    */
    let serpiente = {
        cabeza: '1:1',
        cuerpo: [],
        color: 'white',
        longitud: 1,
    };
    var salida = serpiente.cabeza;
    var puntoObjetivo = {
        posicion: '',
    };

    window.addEventListener("keydown", function (event) {
        switch (event.key) {
            case '1':
                direccion = 'izquierda';
                break;
            case '5':
                direccion = 'arriba';
                break;
            case '3':
                direccion = 'derecha';
                break;
            case '2':
                direccion = 'abajo';
                break;
            default:
                break;
        }
    });


    function pintarSerpiente() {
        let contador = 0;
        try {
            document.getElementById(serpiente.cabeza).className = 'serpiente';
        } catch (error) {
            final('You went off the board!');
            clearInterval(movimiento);
        }


        if (serpiente.cuerpo.length > serpiente.longitud) {
            var cantidad = serpiente.cuerpo.length - serpiente.longitud;
            document.getElementById(serpiente.cuerpo[0]).className = 'cuadro';
            while (cantidad) {
                serpiente.cuerpo.splice(0, cantidad);
                cantidad--;
            }
            if(contador === 0){
                document.getElementById(salida).className = 'cuadro';
                contador++;
            }
        }
    }

    // evalua si la serpiente a atrapado un objetivo
    function evaluarPunto() {
        if (serpiente.cabeza === puntoObjetivo.posicion) {
            serpiente.longitud++;
            movimientoObjetivo();
        }
        evaluarCruce();
    }

    // evaluar si la serpiente se pisa a si misma
    function evaluarCruce() {
        for (let i = serpiente.cuerpo.length - 2; i > 0; i--) {
            if (serpiente.cabeza === serpiente.cuerpo[i]) {
                final('You have stepped on yourself. You have lost!');
            }
        }
    }

    // evaluar si se ha ganado la partida
    function evaluarVictoria() {
        if (serpiente.cuerpo.length === (cuadros * cuadros)) {
            ganar();

        }
    }

    // Evalua si la serpiente se sale del mapa 
    function evaluarPosicion() {
        var posx = serpiente.cabeza.split(':')[0];
        var posy = serpiente.cabeza.split(':')[1];
        if (posx > cuadros || posx < 0 || posy > cuadros || posy < 0) {
            final('You went off the board!');
            clearInterval(movimiento);
        }

    }
    // Grupo de funciones encargadas del movimiento
    var movimiento;
    // Función de control del movimiento de la serpiente
    function avance() {
        if(!active){
            pintarSerpiente();
            movimientoObjetivo();
            movimiento = setInterval(function () {
                evaluarPosicion();
                switch (direccion) {
                    case 'izquierda':
                        if (direccionPrevia !== 'derecha') {
                            moverIzquierda()
                        } else {
                            moverDerecha();
                        }
                        break;
                    case 'derecha':
                        if (direccionPrevia !== 'izquierda') {
                            moverDerecha();
                        } else {
                            moverIzquierda()
                        }
                        break;
                    case 'arriba':
                        if (direccionPrevia !== 'abajo') {
                            moverArriba();
                        } else {
                            moverAbajo();
                        }
                        break;
                    case 'abajo':
                        if (direccionPrevia !== 'arriba') {
                            moverAbajo();
                        } else {
                            moverArriba();
                        }
                        break;
                    default:
                        break;
                }
            }, velocidad);
            active = true
        }
        
       
    }

    // Función que en caso de que se pulse la flecha derecha cambiará el movimiento a la derecha
    function moverDerecha() {
        let y = parseInt(serpiente.cabeza.split(':')[1]) + 1;
        serpiente.cabeza = serpiente.cabeza.split(':')[0] + ':' + y;
        serpiente.cuerpo.push(serpiente.cabeza);
        evaluarVictoria();
        evaluarPosicion();
        evaluarPunto();
        pintarSerpiente();
        direccionPrevia = 'derecha';
    }
    // Función que en caso de que se pulse la flecha izquierda cambiará el movimiento a la izquierda
    function moverIzquierda() {
        let y = parseInt(serpiente.cabeza.split(':')[1]) - 1;
        serpiente.cabeza = serpiente.cabeza.split(':')[0] + ':' + y;
        serpiente.cuerpo.push(serpiente.cabeza);
        evaluarVictoria()
        evaluarPosicion();
        evaluarPunto();
        pintarSerpiente();
        direccionPrevia = 'izquierda';
    }
    // Función que en caso de que se pulse la flecha arriba cambiará el movimiento a la arriba
    function moverArriba() {
        let x = parseInt(serpiente.cabeza.split(':')[0]) - 1;
        serpiente.cabeza = x + ':' + serpiente.cabeza.split(':')[1];
        serpiente.cuerpo.push(serpiente.cabeza);
        evaluarVictoria()
        evaluarPosicion();
        evaluarPunto();
        pintarSerpiente();
        direccionPrevia = 'arriba';
    }
    // Función que en caso de que se pulse la flecha abajo cambiará el movimiento a la abajo
    function moverAbajo() {
        let x = parseInt(serpiente.cabeza.split(':')[0]) + 1;
        serpiente.cabeza = x + ':' + serpiente.cabeza.split(':')[1];
        serpiente.cuerpo.push(serpiente.cabeza);
        evaluarVictoria()
        evaluarPosicion();
        evaluarPunto();
        pintarSerpiente();
        direccionPrevia = 'abajo';
    }

    function final(mensa) {
        document.getElementById('box-alert').classList.replace('box-hide', 'box-alert');
        document.getElementById('content-mesaje').innerHTML = mensa;
        clearInterval(movimiento);
    }

    // Para la partida y muestra el mensaje de que se ha ganado
    function ganar() {
        var mensajeSalida = "You win!";
        document.getElementById('box-alert').classList.replace('box-hide', 'box-alert');

        document.getElementById('content-mesaje').innerHTML = mensajeSalida;
        clearInterval(movimiento);
    }

    // Esta función le da una nueva ubicación al punto que será el objetivo de la serpiente
    function posicionObjetivo() {
        let casillas;
        let posiciones = [];
        try {
            casillas = document.getElementsByClassName('cuadro');
            if (casillas.length > 0) {
                for (let i = 0; i < casillas.length; i++) {
                    posiciones.push(casillas[i].getAttribute('id'));
                }
                var rand = Math.floor(Math.random() * posiciones.length);
                puntoObjetivo.posicion = posiciones[rand];

                let evaluar = false;
                serpiente.cuerpo.forEach(element => {
                    if (element === puntoObjetivo.posicion) {
                        evaluar = true;
                    }
                });
                return evaluar;
            }
        } catch (error) {
            console.log(error)
            ganar();
        }
    }
    // Función que llama a la nueva ubicación del objetivo y le da el color adecuado
    function movimientoObjetivo() {
        while (posicionObjetivo()) {
            posicionObjetivo();
        };
        try {
            document.getElementById(puntoObjetivo.posicion).setAttribute('class', 'puntoObjetivo');
        } catch (error) {
            console.log(error);
        }
    }

    function btnFinal() {
        window.location.reload();
    }

    useEffect(() => {
        function btnStart(){
            if(!active){
                document.getElementById('inicio').style.display = 'block'
            }else{
                document.getElementById('inicio').style.display = 'none'
    
            }
        }
        btnStart()
        return () => clearInterval(movimiento);
    },[movimiento, active])

    return (
        <div className='box-game'>
            <div className='box-title'>
                <p className='title'> Snake</p>
            </div>
            
            <div className='game-instructions'>
                <p>
                    To move you should use the next keys, key 1: left, key 3: right, key 5: up, key 2: down.
                </p>
                <p>
                    Be careful, you can't get out of the board.
                </p>
            </div>
            <div id="snake-box">
                <Box />
                <div className="btns-inicio">
                    <button className="btn-partida" id="inicio" onClick={avance}  >Start game</button>               
                </div>
                <div id="box-alert" className='box-hide '>
                    <div id="content-mesaje"></div>
                    <div>
                        <button className="btnFinal" id='btnFin' onClick={btnFinal} >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

