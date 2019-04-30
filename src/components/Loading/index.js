import React from "react";

//Style
import "./style.scss";

//Svg
import svg_loading from "./../../assets/img/loading.svg";

const Loading = () => (
  <div className="loading">
    <img src={svg_loading} alt="loading" />
  </div>
);

export default Loading;
