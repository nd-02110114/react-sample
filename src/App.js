import React, { Component } from "react";
// import { List, ListItem } from "material-ui/List";
import logo from "./logo.svg";
import SearchBox from "./component/SearchBox";
import "./App.css";

class App extends Component {
  render() {
    // let { count } = this.props.count;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Github Manage Page</h2>
        </div>
        <div className="App-body">
          <div className="App-left">
            <p className="App-intro">
              Put in UserName & SearchWord!!
            </p>
            <SearchBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
