import React, { Component } from "react";

//Components
import Search from "./../../components/Search";
import Breadcrumb from "./../../components/Breadcrumb";
import Container from "./../../components/Container";
import ProdcutDetailComponent from "./../../components/ProductDetail";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Search />
        <Container>
          <Breadcrumb />
          <ProdcutDetailComponent />
        </Container>
      </div>
    );
  }
}

export default ProductDetail;
