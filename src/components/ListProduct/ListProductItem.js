import React from "react";
import { Link } from "react-router-dom";
import * as CurrencyFormat from "react-currency-format";

//Helper
import { getMask } from "./../../theme/helper";

//Currency
import { currency } from "./../../theme/currency";

//Image
import free_shipping from "./../../assets/img/ic_shipping.png";

//Style
import "./style.scss";

const ListProductItem = ({ data }) =>
  data.map(item => (
    <Link key={item.id} to={`/items/${item.id}`} className="list-product-item">
      <figure className="item-image">
        <img src={item.picture} alt={item.title} />
      </figure>
      <div className="item-content">
        <div className="item-price">
          <span className="item-value">
            <CurrencyFormat
              value={item.price.amount}
              displayType={"text"}
              thousandSeparator={true}
              format={`${currency[item.price.currency]}  ${getMask(
                item.price.amount
              )}`}
              renderText={value => (
                <p>
                  {value}
                  <span className="item-decimal">
                    {item.price.decimal ? item.price.decimal.toString() : "00"}
                  </span>
                </p>
              )}
            />
          </span>
          {item.free_shipping && <img src={free_shipping} alt="Frete Grátis" />}
        </div>
        <p className="item-short-description">{item.title}</p>
      </div>
      <span className="item-location">{item.state_name}</span>
    </Link>
  ));

export default ListProductItem;
