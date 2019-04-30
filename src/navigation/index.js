import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Screens
import Home from "./../screens/Home";
import SearchResult from "./../screens/SearchResult";
import ProductDetail from "./../screens/ProductDetail";

const Navigation = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/items" component={SearchResult} />
    <Route exact path="/items/:id" component={ProductDetail} />
  </Router>
);

export default Navigation;
