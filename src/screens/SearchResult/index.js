import React, { Component } from "react";

//Components
import Search from "./../../components/Search";
import Breadcrumb from "./../../components/Breadcrumb";
import Container from "./../../components/Container";
import ListProduct from "./../../components/ListProduct";

//Libs
import { observer, inject } from "mobx-react";
@inject("product", "search")
@observer
class SearchResult extends Component {
  componentDidMount() {
    const {
      product: { data, getAll },
      search: { setSearchTerm }
    } = this.props;

    if (!data.lengh) {
      const term = this.props.location.search.substr(
        3,
        this.props.location.search.length
      );
      setSearchTerm(term);
      getAll(term);
    }
  }
  render() {
    const {
      history,
      product: { data, isFetchingAll, categories }
    } = this.props;
    return (
      <div>
        <Search history={history} />
        <Container>
          <Breadcrumb categories={categories} />
          {!isFetchingAll && data.length !== 0 ? (
            <ListProduct data={data} />
          ) : (
            <div>Loading...</div>
          )}
        </Container>
      </div>
    );
  }
}

export default SearchResult;
