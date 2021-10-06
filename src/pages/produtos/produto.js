import React, { useState } from 'react';

import './produto.css';

import OutRiders from '../../assets/img/outriders.jpg';
import CyberPunk from '../../assets/img/cyberPunk.jpg';
import DonkeyKong from '../../assets/img/donkeyKong.jpg';

export default function Produto() {
    const [compraFinalizada, setCompraFinalizada] = useState(false);

    function finalizarCompra() {
        setCompraFinalizada = (compraFinalizada => !compraFinalizada);
    }

    return (
        <>
            <div className="produtos-destaque">
                <div>
                    <p className="rectangle23"></p>
                    <p className="rectangle22"></p>
                    <p className="rectangle21"></p>
                    <p className="rectangle20"></p>
                    <p className="rectangle19"></p>
                    <p className="rectangle18"></p>
                    <p className="rectangle17"></p>
                    <p className="rectangle16"></p>
                    <p className="rectangle15"></p>
                </div>
                <p className="produtos-em-destaque">Produtos em destaque</p>
            </div>
            <div className="produtos">
                <div className="card1">
                    <img className="imgProduto" src={OutRiders} alt="jogo Out Riders" />
                    <p className="linhaProduto"></p>
                    <div className="tabalaPreco">
                        <p className="precoProduto">R$ 200,00</p>
                        <p className="tituloProduto">Outriders</p>
                        <div onClick={finalizarCompra} className="backgroundCompra">
                            <p className="comprar">comprar</p>
                        </div>
                    </div>
                    <p className="backgroundPreco"></p>
                </div>
                <div className="card2">
                    <img className="imgProduto" src={CyberPunk} alt="jogo CyberPunk 2077" />
                    <p className="linhaProduto"></p>
                    <div className="tabalaPreco">
                        <p className="precoProduto">R$ 200,00</p>
                        <p className="tituloProduto">CYBERPUNK 2077</p>
                        <div className="backgroundCompra">
                            <p className="comprar">comprar</p>
                        </div>
                    </div>
                    <p className="backgroundPreco"></p>
                </div>
                <div className="card3">
                    <img className="imgProduto" src={DonkeyKong} alt="jogo Donkey Kong" />
                    <p className="linhaProduto"></p>
                    <div className="tabalaPreco">
                        <p className="tituloProduto">Donkey Kong Country </p>
                        <p className="precoProduto">R$ 200,00</p>
                        <div className="backgroundCompra">
                            <p className="comprar">comprar</p>
                        </div>
                    </div>
                    <p className="backgroundPreco"></p>
                </div>
            </div>


        </>
    )
}

