import React, { useState } from 'react';

import BannerPrincipal from '../../assets/img/principal_banner_desktop.jpg';

import OutRiders from '../../assets/img/outriders.jpg';
import CyberPunk from '../../assets/img/cyberPunk.jpg';
import DonkeyKong from '../../assets/img/donkeyKong.jpg';

import Nav from '../nav/nav';
import Produto from '../produtos/produto';
import Footer from '../footer/footer';
// import SideNav from '../sideNav/sideNav';

import './desktop.css';

export default function Desktop() {

    const [fecharModal, setFecharModal] = useState(false);



    const api = [
        {
            "id": "1",
            "titulo": "Outriders",
            "preco": "R$ 200.0",
            "imagem": OutRiders,
            "vendido": false
        },
        {
            "id": "2",
            "titulo": "CyberPunk",
            "preco": "R$ 200.0",
            "imagem": CyberPunk,
            "vendido": false
        },
        {
            "id": "3",
            "titulo": "DonkeyKong",
            "preco": "R$ 200.0",
            "imagem": DonkeyKong,
            "vendido": false
        }
    ]

    const [apiProduto, setApiProduto] = useState(api);

    function fechar() {
        setFecharModal(fecharModal => !fecharModal);
    }

    function quantidadeProdutosVendidos() {
        const quandidade = apiProduto.filter(prod => prod.vendido === true)
        return quandidade.length

    }

    function venderProduto(produto) {
        setFecharModal(fecharModal => !fecharModal);

        if (produto) {

            produto.vendido = true;
            console.log(apiProduto)
        }

    }

    return (
        <>
            <div className="container">
                <header>
                    <div className="centralInfo">
                        <div className="nav">
                            <Nav
                                vendidos={quantidadeProdutosVendidos()}
                            />
                        </div>

                        <div className="banner">
                            <p className="mortal-Kombat">MORTAL KOMBAT</p>
                            <p className="primeiro-preco">R$ 299, <span>99</span></p>
                            <p className="description-mortalKombat">Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
                        </div>

                        {/* <div className="navSide">
                            <SideNav />
                        </div> */}

                        <div className="banner-section">
                            <div className="banner-card">
                                <div className="banner-card-body">
                                    <img className="zelda-banner" src="" alt="" />
                                </div>
                                <div className="banner-card-footer">
                                    The Legend of Zelda - Breath of th wild
                                    <span className="card-footer-line"></span>
                                </div>
                            </div>

                            <div className="banner-card">
                                <div className="banner-card-body">
                                    <img className="sekira-banner" src="" alt="" />
                                </div>
                                <div className="banner-card-footer">
                                    SEKIRO - Shadows die twice
                                    <span className="card-footer-line"></span>
                                </div>
                            </div>

                            {/* <div className="banner-container2">
                                <p className="rectangle12"></p>
                                <img className="sekira-banner" src="" alt="" />
                                <p className="rectangle13"></p>
                                <p className="line5"></p>
                                <p className="line5-description">SEKIRO - Shadows die twice</p>
                            </div> */}
                        </div>
                    </div>
                </header>

                <section>
                    <div className="produtosDestaque">
                        <Produto
                            apiProduto={apiProduto}
                            venderProduto={venderProduto}
                            fechar={fechar}
                            fecharModal={fecharModal}
                        />
                    </div>
                </section>

                <footer>
                    <div className="footer">
                        <Footer />
                    </div>
                </footer>
            </div>
        </>
    )
}