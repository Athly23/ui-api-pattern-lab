// import React from "react";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characterPics: []
    };
  }

  componentDidMount() {
    let URL = "https://rickandmortyapi.com/api/character/";
  }
  render() {
    return <div></div>;
  }
}

export default App;
