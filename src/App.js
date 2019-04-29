import React from "react";
import "./App.css";

import { Provider } from "mobx-react";

//Store
import Store from "./store";

//Navigation
import Navigation from "./navigation";

const store = new Store();

function App() {
  return (
    <Provider {...store}>
      <Navigation />
    </Provider>
  );
}

export default App;
