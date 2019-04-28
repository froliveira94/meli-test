import React, { Component } from "react";
import { Link } from "react-router-dom";

//Style
import "./style.scss";

//Image
import logo from "./../../assets/img/Logo_ML.png";

class Search extends Component {
  render() {
    return (
      <section className="search-container">
        <Link to="/">
          <img src={logo} alt="Mercado Livre" />
        </Link>
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
