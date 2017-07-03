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
              Search Repository
              <p className="App-info">
                When you put in RepositoryName, Start a search
              </p>
            </div>
            <RepoSearch />
          </div>
          <div className="App-right">
            <div className="App-intro">
              Confirm your watch list
              <p className="App-info">
                When you put in UserName, show a watch list
              </p>
            </div>
            <SubscribeBox />
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
