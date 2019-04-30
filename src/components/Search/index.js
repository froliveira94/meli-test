import React, { Component } from "react";
import { Link } from "react-router-dom";

//Libs
import { observer, inject } from "mobx-react";

//Style
import "./style.scss";

//Image
import logo from "./../../assets/img/Logo_ML.png";
@inject("search", "product")
@observer
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.search.searchTerm
    };
  }
  _handleClick = () => {
    const { searchTerm } = this.state;
    const {
      search: { setSearchTerm },
      product: { getAll }
    } = this.props;
    setSearchTerm(searchTerm);
    getAll(searchTerm);
    this.props.history.push(`/items?q=${searchTerm}`);
  };
  _handleChange = term => {
    this.setState({ searchTerm: term });
  };
  _keyPress = e => {
    if (e.keyCode == 13) {
      this._handleClick();
    }
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
            onChange={e => this._handleChange(e.target.value)}
            onKeyDown={this._keyPress}
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
