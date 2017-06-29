import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { count } = this.props.count;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={e => {
            this.props.dispatch({ type: "PLUS2" });
          }}
        >
          INC: {count}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.reducer };
}

export default connect(mapStateToProps)(App);
