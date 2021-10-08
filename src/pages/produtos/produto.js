import React from 'react';

import './produto.css';
import '../modal/modal.css';

import Fechar from '../../assets/img/fechar.jpg';



export default function Produto(props) {



    return (
        <>
            <div className="produtos-destaque">
                <div className="novePontos">
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

            <div className="cardProduto" >
                {props.apiProduto.map((produto) => (
                    <div className="card" key={produto.id}>
                        <div className="imagem">
                            <img className="imagemProduto" src={produto.imagem} alt="jogo Out Riders" />
                        </div>
                        <p className="divisoria"></p>
                        <div className="tabelaPreco">
                            <p className="tituloProduto">{produto.titulo}</p>
                            <p className="preco">{produto.preco}</p>
                            {produto.vendido === false ?
                                <button className="botaoProduto" onClick={() => props.venderProduto(produto)}><span className="spanComprar">comprar</span></button>
                                :
                                <button className="botaoProdutoComprado "><span className="spanComprar">comprado</span></button>

                            }

                        </div>
                    </div>))}
            </div>

            {/*Modal*/}
            {props.fecharModal &&
                <div className="backgroundModal">
                    <div className="pedidoSucesso">
                        <img className="fechar" onClick={props.fechar} src={Fechar} alt="fechar" />
                        <span className="mario"></span>
                        <p className="textoModal">Pedido realizado com sucesso!</p>
                    </div>
                </div>}
        </>
    )
}

