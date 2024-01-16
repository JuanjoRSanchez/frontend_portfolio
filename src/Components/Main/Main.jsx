import "./main.css"
import "./main-mediaQueries.css"
import React from 'react';
import Llave_izquierda from '../../Images/Key_left.svg'
import Llave_derecha from '../../Images/Key_rigth.svg'

function Main() {

    return(
        <div className="box-home">
            <div className="main-box">
                <div className="box-left">
                    <div className="name-box"> 
                        <div className="bbb">
                            <div className="zz"><p className="zz_text">My name is </p></div>
                            <div className="zzz"><p className="zzz_text">Juanjo Rubio Sánchez</p></div>
                        </div>
                    </div>  
                    <div className="name-box"> 
                        <div className="bbb">
                            <div className="zz"><p className="zz_text">I'm </p></div>
                            <div className="zzz"><p className="zzz_text">Junior Web Developer</p></div>
                        </div>
                    </div>  
                    <div className="name-box"> 
                        <div className="bbb">
                            <div className="zz"><p className="zz_text">welcome to my</p></div>                          
                            <div className="zzz"><p className="zzz_text">Portfolio</p></div>
                        </div>
                    </div> 
                </div>
                <hr/>
                <div className="box-right">
                    <img className="key" src={Llave_izquierda} alt="Llave"/>
                    <div className="name-box_A">
                        <p>Nowadays I’m looking for a job and I’m open to offers. If you are interested please contact me.</p>
                    </div>
                    <img className="key" src={Llave_derecha} alt="Llave"/>
                </div> 
            </div>
            <div className="bar-link">
                <div className="name-box_B">
                    <div className="area-1 ">
                        <p>You might be interested in</p>
                    </div>
                </div>
                <div className="name-box_C">
                    <div className="area-2"><div>More about me</div> </div>
                    <div className="area-3">Projects </div>
                    <div className="area-4">Tech stack and education</div>
                    <div className="area-5">Experience </div>
                    <div className="spacer"></div>
                </div>
            </div>  
            
        </div>
    );
}

export default Main;
