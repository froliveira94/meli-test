import React, { Component } from "react";

//Style
import "./style.scss";

//Components
import ListProductItem from "./ListProductItem";

class ListProduct extends Component {
  render() {
    return (
      <div>
        <section className="list-product">
          <ListProductItem />
        </section>
      </div>
    );
  }
}

export default ListProduct;
