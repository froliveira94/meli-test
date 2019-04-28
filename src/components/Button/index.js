import React from "react";

//Style
import "./style.scss";

const Button = ({ text, type }) => (
  <button className={`btn btn-${type}`}>{text}</button>
);

export default Button;
