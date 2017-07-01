import React from "react";
import { List, ListItem } from "material-ui/List";
import TextField from "material-ui/TextField";
import Divider from "material-ui/Divider";
import { connect } from "react-redux";
import { fetchSearch } from "../action/Actions";
import "../App.css";

class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      user_name: "",
      search_word: ""
    };
  }

  handleUserNameChange = event => {
    this.setState({
      user_name: event.target.value
    });
  };

  handleSearchWordChange = event => {
    const { onSearch } = this.props;
    onSearch(this.state.user_name, event.target.value);

    this.setState({
      search_word: event.target.value
    });
  };

  render() {
    const { lists } = this.props;
    return (
      <div className="App-search">
        <div className="search-field">
          <TextField
            floatingLabelText="User Name"
            id="search-field"
            value={this.state.user_name}
            onChange={this.handleUserNameChange}
          />
          <TextField
            floatingLabelText="RepositoryName"
            id="search-field"
            value={this.state.search_word}
            onChange={this.handleSearchWordChange}
          />
        </div>
        <div className="search-result">
          <p>
            Results
          </p>
          <Divider insert={true} />
          <List>
            {Object.keys(lists).map(function(key, index) {
              return (
                <ListItem
                  id={"list-" + index}
                  primaryText={lists[key].repo_name}
                  href={lists[key].repo_url}
                  target="_blank"
                />
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { lists: state.SearchReducer.lists };
}

const mapDispatchToProps = dispatch => ({
  onSearch(user_name, search_word) {
    dispatch(fetchSearch(user_name, search_word));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
