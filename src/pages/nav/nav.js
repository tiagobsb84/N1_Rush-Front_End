import React, { useState } from "react";

import './nav.css';

import Shopping from '../../assets/img/shopping.jpg';
import Pesquisar from '../../assets/img/lupa.jpg';
import Contato from '../../assets/img/plane-paner.jpg';
import Hamburgue from '../../assets/img/tituloHamburguer.jpg';
import Titulo from '../../assets/svgs/titulo-principal.svg';

export default function Nav() {
    const [mostraMenu, setMostraMenu] = useState(false);

    function menu() {
        setMostraMenu(mostraMenu => !mostraMenu);
    }

    return (
        <>
            <div className="header">
                <p className="divisor2"></p>
                <p className="divisor1"></p>
            </div>
            <div className="navShopping">
                <p className="shopping2">2</p>
                <p className="shoppingCirculo"></p>
                <img className="shoppingIcon" src={Shopping} alt="icone shopping" />
            </div>
            <div className="navBuscar">
                <p className="buscar">BUSCAR</p>
                <img className="pesquisar" src={Pesquisar} alt="icone pesquisar" />
            </div>
            <div className="navContato">
                <p className="contato">CONTATO</p>
                <img className="contatoIcon" src={Contato} alt="icone contato" />
            </div>
            <div className="navTitulo">
                <div className="hamburgue">
                    <img className="hambuguerIcon" onClick={menu} src={Hamburgue} alt="icone hamburguer" />

                    <img className="titulo" src={Titulo} alt="Titulo" />
                </div>
            </div>
            {/*Menu Hamburguer*/}
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
        </>
    )
}