import React, { Component } from "react";

//Style
import "./style.scss";

//Components
import Breadcrumb from "./../Breadcrumb";
import ListProductItem from "./ListProductItem";

class ListProduct extends Component {
  render() {
    return (
      <div>
        <Breadcrumb />
        <section className="list-product">
          <ListProductItem />
          <ListProductItem />
          <ListProductItem />
          <ListProductItem />
        </section>
      </div>
    );
  }
}

export default ListProduct;
