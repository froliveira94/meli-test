import React, { Component } from "react";

//Components
import Search from "./../../components/Search";
import Breadcrumb from "./../../components/Breadcrumb";
import Container from "./../../components/Container";
import ListProduct from "./../../components/ListProduct";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: []
    };
  }

  componentDidMount() {
    const items = [];
    fetch(`http://localhost:3002/items?q=iphone`).then(function(response) {
      if (response.ok) {
        return response.json().then(data => {
          return data;
        });
        console.log("response", response);
      }
    });
    this.setState({ items: items });
  }

  render() {
    const { items } = this.state;
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
