import React, { Component } from "react";

//Components
import Search from "./../../components/Search";
class Home extends Component {
  render() {
    return (
      <div>
        <Search history={this.props.history} />
      </div>
    );
  }
}

export default Home;
