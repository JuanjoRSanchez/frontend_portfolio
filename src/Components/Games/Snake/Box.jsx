import './snake.css'


export default function Box() {

    var length = 15;
    var box = [];
    for(let i = 0; i < length; i++ ){
        for(let x = 0; x < length; x++ ){
            box.push(i + ':' + x ); 
        }
    }
    
    
    return (
        <div  id='board' className='tablero-snake'>
           { box.map((aux) => {
                return ( <div id={aux} key={aux} className='cuadro'></div>)
            })
            }
        </div>
    )
}
