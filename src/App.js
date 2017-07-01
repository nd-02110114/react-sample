import React, { Component } from "react";
import logo from "./logo.svg";
import SearchBox from "./component/SearchBox";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Github Manage Page</h2>
        </div>
        <div className="App-body">
          <div className="App-left">
            <div className="App-intro">
              Put in UserName & RepositoryName!!
              <p className="App-info">
                When you put in RepositoryName, Start a search
              </p>
            </div>
            <SearchBox />
          </div>
          <div className="App-right">
            TEST
          </div>
        </div>
        <div className="app-footer">
          made by @nissy
        </div>
      </div>
    );
  }
}

export default App;
