import React from "react";

import './sideNav.css';
import Voltar from '../../assets/img/setaVoltar.jpg';
import Avanca from '../../assets/img/setaAvanca.jpg';

export default function SideNav(){
    return(
        <div className="sideNav">
            <div className="sideBackgroundBottom ">
                <p className="sidePages">1/2</p>
                <img className="setaVolta" src={Voltar} alt="volta page" />
                <img className="setaAvanca" src={Avanca} alt="avança page" />
            </div>
            <p className="linhaSide"></p>
            <p className="textSide">MORTAL KOMBAT</p>
        </div>
    )
}