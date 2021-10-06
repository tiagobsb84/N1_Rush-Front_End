import React from "react";

import './footer.css';

import N1 from '../../assets/img/n1agencia.jpg'

export default function Footer(){
    return(
        <>
            <div className="background1">
                <img className="logo" src={N1} alt="logo da agência N1" />
            </div>
            <div className="background2">
                <p className="textoLogo">Agência N1 - Todos os direitos reservados</p>
            </div>
        </>
    );
}