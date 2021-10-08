import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './nav.css';

import Shopping from '../../assets/img/shopping.jpg';
import Pesquisar from '../../assets/img/lupa.jpg';
import Contato from '../../assets/img/plane-paner.jpg';
import Hamburgue from '../../assets/img/tituloHamburguer.jpg';
import Titulo from '../../assets/svgs/titulo-principal.svg';

export default function Nav(props) {
    const [mostraMenu, setMostraMenu] = useState(false);

    function menu() {
        setMostraMenu(mostraMenu => !mostraMenu);
    }
    return (
        <>
            <div className="menuNavegacao">
                <div className="navTitulo">
                    <div className="hamburgue">
                        <img className="hambuguerIcon" onClick={menu} src={Hamburgue} alt="icone hamburguer" />
                        <img className="titulo" src={Titulo} alt="Titulo" />
                        {mostraMenu &&
                            <div className="itensHamburgue">
                                <div className="sombraItensHambugue"></div>

                                <dl className="lutaHamburgue">
                                    <dt className="tituloJogo">luta</dt>
                                    <dd className="jogosLuta">Mortal Kombat</dd>
                                    <dd className="jogosLuta">Smash Bros</dd>
                                    <dd className="jogosLuta">Killer Instict</dd>
                                    <dd className="jogosLuta">DBZ Kakarot</dd>
                                </dl>

                                <dl className="aventuraHamburgue">
                                    <dt className="tituloJogos">Ação / Aventura</dt>
                                    <dd className="jogosLuta">GTA V</dd>
                                    <dd className="jogosLuta">Tomb Raider</dd>
                                    <dd className="jogosLuta">HALO</dd>
                                    <dd className="jogosLuta">Call of Duty</dd>
                                </dl>

                                <dl className="CorridaHamburgue">
                                    <dt className="tituloJogos">Corrida</dt>
                                    <dd className="jogosLuta">NEED For SPEED</dd>
                                    <dd className="jogosLuta">Forza Horizon</dd>
                                </dl>

                                <div className="indicadoHamburgue">
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className="navegacoesMenu">
                    <div className="navContato">
                        <img className="icon" src={Contato} alt="icone contato" />
                        <Link to="/contato" className="contato">CONTATO</Link>
                    </div>
                    <div className="navBuscar">
                        <img className="icon" src={Pesquisar} alt="icone pesquisar" />
                        <p className="buscar">BUSCAR</p>
                    </div>
                    <div className="navShopping">
                        <img className="icon" src={Shopping} alt="iconShopping" />
                        <p className="shoppingCirculo">{props.vendidos}</p>
                    </div>
                </div>

                {/* <div className="header">
                    <p className="divisor2"></p>
                    <p className="divisor1"></p>
                </div> */}
            </div>
        </>
    )
}