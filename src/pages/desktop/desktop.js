import React from 'react';

import BannerPrincipal from '../../assets/img/principal_banner_desktop.jpg';

import Nav from '../nav/nav';
import Produto from '../produtos/produto';
import Footer from '../footer/footer';
import SideNav from '../sideNav/sideNav';
import Modal from '../modal/modal';

import './desktop.css';

export default function Desktop() {
    return (
        <>
            <img className="banner-mortalKombat" src={BannerPrincipal} alt="imagemPrincipal" />

            <div className="nav">
                <Nav />
            </div>

            <div className="banner-zelda">
                <p className="rectangle10"></p>
                <img className="zelda-banner" src="" alt="" />
                <p className="rectangle11"></p>
                <p className="line4"></p>
                <p className="line4-description">The Legend of Zelda - Breath of th wild</p>
            </div>
            <div className="banner-sekira">
                <p className="rectangle12"></p>
                <img className="sekira-banner" src="" alt="" />
                <p className="rectangle13"></p>
                <p className="line5"></p>
                <p className="line5-description">SEKIRO - Shadows die twice</p>
            </div>

            <div className="banner-info">
                <p className="description-mortalKombat">Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
                <p className="primeiro-preco">R$ 299</p>
                <p className="segundo-preco">,99</p>
                <p className="mortal-Kombat">MORTAL KOMBAT</p>
            </div>

            <div className="navSide">
                <SideNav />
            </div>

            <div className="produtosDestaque">
                <Produto />
            </div>

            <div className="footer">
                <Footer />
            </div>

            <div className="modal">
                <Modal />
            </div>
        </>
    )
}