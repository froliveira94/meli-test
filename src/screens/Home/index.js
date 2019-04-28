import React, { Component } from "react";

//Style
import "./style.scss";

//Components
import Search from "./../../components/Search";
import Container from "./../../components/Container";
import ListProduct from "./../../components/ListProduct";
import ProductDetail from "./../../components/ProductDetail";

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <Container>
          {/* <ListProduct /> */}
          <ProductDetail />
        </Container>
      </div>
    );
  }
}

export default Home;
