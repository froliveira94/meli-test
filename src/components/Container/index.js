import React from "react";

//Style
import "./style.scss";

const Container = ({ children }) => (
  <main role="main" className="container">
    {children}
  </main>
);

export default Container;
