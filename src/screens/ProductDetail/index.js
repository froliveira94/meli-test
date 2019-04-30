import React, { Component } from "react";

//Components
import Search from "./../../components/Search";
import Breadcrumb from "./../../components/Breadcrumb";
import Container from "./../../components/Container";
import ProdcutDetailComponent from "./../../components/ProductDetail";

//Libs
import { observer, inject } from "mobx-react";
@inject("product")
@observer
class ProductDetail extends Component {
  componentDidMount() {
    const {
      product: { getById },
      match: {
        params: { id }
      }
    } = this.props;
    getById(id);
  }
  render() {
    const {
      history,
      product: { categories, isFetchingById, product }
    } = this.props;
    return (
      <div>
        <Search history={history} />
        <Container>
          <Breadcrumb categories={categories} />
          {!isFetchingById && !!product.id ? (
            <ProdcutDetailComponent product={product} />
          ) : (
            <div>Loading...</div>
          )}
        </Container>
      </div>
    );
  }
}

export default ProductDetail;
