import React from "react";

//Style
import "./style.scss";

const ListProductItem = () => (
  <div className="list-product-item">
    <img
      className="item-image"
      src="http://mla-s2-p.mlstatic.com/699369-MLA29856491152_042019-I.jpg"
      alt=""
    />
    <div className="item-content">
      <div className="item-price">
        <span className="item-currency">$</span>
        <span className="item-value">1.980</span>
      </div>
      <p className="item-short-description">
        Apple Iphone Se 64gb 12mpx 4 Originales + Garantía Apple
      </p>
    </div>
    <span className="item-location">Capital Federal</span>
  </div>
);

export default ListProductItem;
