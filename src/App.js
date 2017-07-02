import React, { Component } from "react";
import RepoSearch from "./component/RepoSearch";
import SubscribeBox from "./component/SubscribeSearch";
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
              Put in RepositoryName!!
              <p className="App-info">
                When you put in RepositoryName, Start a search
              </p>
            </div>
            <RepoSearch />
          </div>
          <div className="App-right">
            <div className="App-intro">
              Put in UserName!!
              <p className="App-info">
                When you put in UserName, Confirm a watch repository
              </p>
            </div>
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
