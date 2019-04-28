import React, { Component } from "react";

//Style
import "./style.scss";

//Image
import logo from "./../../assets/img/Logo_ML.png";

class Search extends Component {
  render() {
    return (
      <section className="search-container">
        <a
          href="http://www.mercadolivre.com.br"
          title="Mercado Livre"
          target="_blank"
        >
          <img src={logo} alt="Mercado Livre" />
        </a>
        <div className="search-box">
          <input
            type="text"
            className="search-box-input"
            placeholder="Nunca dejes de buscar"
          />
          <button className="search-box-button" />
        </div>
      </section>
    );
  }
}

export default Search;
