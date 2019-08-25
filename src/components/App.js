import React from "react";
import "./App.css";
import Page from "./Page";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    );
  }
}

export default App;
