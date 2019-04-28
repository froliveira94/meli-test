import React, { Component } from "react";

//Components
import Search from "./../../components/Search";
import Breadcrumb from "./../../components/Breadcrumb";
import Container from "./../../components/Container";
import ListProduct from "./../../components/ListProduct";

class SearchResult extends Component {
  render() {
    return (
      <div>
        <Search />
        <Container>
          <Breadcrumb />
          <ListProduct />
        </Container>
      </div>
    );
  }
}

export default SearchResult;
