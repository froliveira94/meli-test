import React from "react";
import * as CurrencyFormat from "react-currency-format";

//Helper
import { getMask } from "./../../theme/helper";

//currency
import { currency } from "./../../theme/currency";

//dictionary
import { es } from "./../../theme/dictionary";

//Style
import "./style.scss";

//Components
import Button from "./../Button";

const ProductDetail = ({ product }) => (
  <div>
    <section className="product-detail">
      <div className="product-detail-left">
        <figure className="product-detail-image">
          <img src={product.picture} alt={product.title} />
        </figure>
        <div className="product-detail-description">
          <h3 className="product-detail-title">Descripcion del producto</h3>
          <p className="product-detail-text">{product.description}</p>
        </div>
      </div>
      <div className="product-detail-right">
        <span className="product-detail-quantity">
          {es[product.condition]} - {product.sold_quantity}{" "}
          {product.sold_quantity > 1 ? "vendidos" : "vendido"}
        </span>
        <h2 className="product-detail-main-title">{product.title}</h2>
        <span className="product-detail-price">
          <CurrencyFormat
            value={product.price.amount}
            displayType={"text"}
            thousandSeparator={true}
            format={`${currency[product.price.currency]}  ${getMask(
              product.price.amount
            )}`}
            renderText={value => (
              <p>
                {value}
                <span className="product-detail-decimal">
                  {product.price.decimal
                    ? product.price.decimal.toString()
                    : "00"}
                </span>
              </p>
            )}
          />
        </span>
        <Button text="Comprar" type="primary" />
      </div>
    </section>
  </div>
);

export default ProductDetail;
