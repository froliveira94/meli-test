import React from "react";

//Style
import "./style.scss";

//Components
import ListProductItem from "./ListProductItem";

const ListProduct = ({ data }) => (
  <div>
    <section className="list-product">
      <ListProductItem data={data} />
    </section>
  </div>
);

export default ListProduct;
