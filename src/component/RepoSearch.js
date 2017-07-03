import React from "react";
import { List, ListItem } from "material-ui/List";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import Divider from "material-ui/Divider";
import { connect } from "react-redux";
import { fetchRepoSearch } from "../action/RepoActions";
import "../App.css";

class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      search_word: ""
    };
  }

  handleSearchWordChange = event => {
    const { onSearch } = this.props;
    onSearch(event.target.value);

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
            floatingLabelText="Repository Name"
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
  return { lists: state.RepoSearchReducer.lists };
}

const mapDispatchToProps = dispatch => ({
  onSearch(search_word) {
    dispatch(fetchRepoSearch(search_word));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
