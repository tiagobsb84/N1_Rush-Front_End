import React from "react";
import { Link } from "react-router-dom";

import './contato.css';

import N1 from '../../assets/img/n1agencia.jpg'

export default function Contato() {
    return (
        <>
            <div className="navegacao">
                <p className="tituloContato">Agência <span>N</span>1</p>
                <Link to="/" className="linkHome">SAIR</Link>
            </div>
            <div className="form">
                <p className="subTitulo">Deixe seu contato com sua opinião ou reclamação<br />e muito importante para nós.</p>
                <div className="inputs">

                    <div className="formDados">
                        <div className="topicosContato">
                            <label>Nome:</label>
                            <input type="text" placeholder="Digite o nome completo" required />
                        </div>
                        <div className="topicosContato">
                            <label>Telefone:</label>
                            <input type="text" placeholder="(xx)xxxx-xxxx" />
                        </div>
                        <div className="topicosContato">
                            <label>Celular:</label>
                            <input type="text" placeholder="(99)9 9999-9999" />
                        </div>
                        <div className="topicosContato">
                            <label>E-mail:</label>
                            <input type="email" placeholder="exemplo@.com" required />
                        </div>
                    </div>
                    <label className="labelTextArea">Deixe sua opinião</label>
                    <textarea rows="8" cols="66">Deixe sua opinião</textarea>
                    <button className="buttonEnviar" type="submit"><span className="buttonSpan">Enviar</span></button>

                </div>
                <div className="background5">
                    <img className="logoContato" src={N1} alt="logo da agência N1" />
                </div>
                <div className="background4">
                    <p className="textoLogoContato">Agência N1 - Todos os direitos reservados</p>
                </div>
            </div>
        </>
    )
}