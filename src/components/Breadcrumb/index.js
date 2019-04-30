import React, { Component } from "react";

import "./style.scss";

class Breadcrumb extends Component {
  render() {
    const { categories } = this.props;
    return (
      <section className="breadcrumb">
        {categories.map(item => (
          <span key={item} className="breadcrumb-item">
            {item}
          </span>
        ))}
      </section>
    );
  }
}

export default Breadcrumb;
