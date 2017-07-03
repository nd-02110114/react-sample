import React from "react";
import { List, ListItem } from "material-ui/List";
import TextField from "material-ui/TextField";
import Divider from "material-ui/Divider";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { fetchSubscribeSearch } from "../action/SubscribeAction";
import "../App.css";

class SubscribeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: ""
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.searchSubcribeRepository = this.searchSubcribeRepository.bind(this);
  }

  searchSubcribeRepository() {
    const { onSearch } = this.props;
    onSearch(this.state.user_name);
  }

  handleUserNameChange(event) {
    this.setState({
      user_name: event.target.value
    });
  }

  render() {
    const { lists, onSearch } = this.props;
    return (
      <div className="App-search">
        <div className="search-field">
          <TextField
            floatingLabelText="User Name"
            id="search-field"
            value={this.state.user_name}
            onChange={this.handleUserNameChange}
          />
          <div className="search-btn">
            <RaisedButton
              label="Confirm a watch list"
              primary={true}
              onTouchTap={() => this.searchSubcribeRepository()}
            />
          </div>
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
  return { lists: state.SubsribeSearchReducer.lists };
}

const mapDispatchToProps = dispatch => ({
  onSearch(user_name) {
    dispatch(fetchSubscribeSearch(user_name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeBox);
