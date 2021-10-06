import React, { useState } from 'react';

import './modal.css';

import Fechar from '../../assets/img/fechar.jpg';

export default function Modal() {

    const [fecharModal, setFecharModal] = useState(true);

    function fechar() {
        setFecharModal(fecharModal => !fecharModal);
    }

    return (
        <>
            {fecharModal &&
                <div className="backgroundModal">
                    <div className="pedidoSucesso">
                        <img className="fechar" onClick={fechar} src={Fechar} alt="fechar" />
                        <span className="mario"></span>
                        <p className="textoModal">Pedido realizado com sucesso!</p>
                    </div>
                </div>}
        </>
    )
}