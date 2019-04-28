import React, { Component } from "react";

//Style
import "./style.scss";

//Components
import Button from "./../Button";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <section className="product-detail">
          <div className="product-detail-left">
            <figure className="product-detail-image">
              <img
                src="https://http2.mlstatic.com/mochila-bolsa-masculino-impermeavel-escolar-trabalho-viagem-D_NQ_NP_975692-MLB29626212739_032019-F.webp"
                alt=""
              />
            </figure>
            <div className="product-detail-description">
              <h3 className="product-detail-title">Descripcion del producto</h3>
              <p className="product-detail-text">
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos. Lorem
                Ipsum sobreviveu não só a cinco séculos, como também ao salto
                para a editoração eletrônica, permanecendo essencialmente
                inalterado. Se popularizou na década de 60, quando a Letraset
                lançou decalques contendo passagens de Lorem Ipsum, e mais
                recentemente quando passou a ser integrado a softwares de
                editoração eletrônica como Aldus PageMaker.
              </p>
            </div>
          </div>
          <div className="product-detail-right">
            <span className="product-detail-quantity">
              nuevo - 234 vendidos
            </span>
            <h2 className="product-detail-main-title">
              Deco Reverse Sobrero Oxford
            </h2>
            <span className="product-detail-price">$ 1.000</span>
            <Button text="Comprar" type="primary" />
          </div>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
