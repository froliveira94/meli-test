import React, { Component } from "react";

//Libs
import { observer, inject } from "mobx-react";

//Components
import Search from "./../../components/Search";
@inject("product")
@observer
class Home extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <Search history={this.props.history} />
      </div>
    );
  }
}

export default Home;
