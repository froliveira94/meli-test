import React, { Component } from "react";
import { Link } from "react-router-dom";

//Style
import "./style.scss";

//Image
import logo from "./../../assets/img/Logo_ML.png";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }
  _handleClick = () => {
    const { searchTerm } = this.state;
    this.props.history.push(`/items?q=${searchTerm}`);
  };
  render() {
    const { searchTerm } = this.state;
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
            value={searchTerm}
            onChange={e => this.setState({ searchTerm: e.target.value })}
          />
          <button
            className="search-box-button"
            onClick={() => this._handleClick()}
          />
        </div>
      </section>
    );
  }
}

export default Search;
