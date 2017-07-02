// import React from "react";
// import { List, ListItem } from "material-ui/List";
// import TextField from "material-ui/TextField";
// import Divider from "material-ui/Divider";
// import { connect } from "react-redux";
// import { fetchRepoSearch } from "../action/Actions";
// import "../App.css";
//
// class SubscribeBox extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user_name: ""
//     };
//   }
//
//   handleSearchWordChange = event => {
//     const { onSearch } = this.props;
//     onSearch(searchUrl, event.target.value);
//
//     this.setState({
//       user_name: event.target.value
//     });
//   };
//
//   render() {
//     const { lists } = this.props;
//     return (
//       <div className="App-search">
//         <div className="search-field">
//           <TextField
//             floatingLabelText="User Name"
//             id="search-field"
//             value={this.state.user_name}
//             onChange={this.handleUserNameChange}
//           />
//         </div>
//         <div className="search-result">
//           <p>
//             Results
//           </p>
//           <Divider insert={true} />
//           <List>
//             {Object.keys(lists).map(function(key, index) {
//               return (
//                 <ListItem
//                   id={"list-" + index}
//                   primaryText={lists[key].repo_name}
//                   href={lists[key].repo_url}
//                   target="_blank"
//                 />
//               );
//             })}
//           </List>
//         </div>
//       </div>
//     );
//   }
// }
//
// function mapStateToProps(state) {
//   return { lists: state.SearchReducer.lists };
// }
//
// const mapDispatchToProps = dispatch => ({
//   onSearch(searchUrl, search_word) {
//     dispatch(fetchRepoSearch(searchUrl, search_word));
//   }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(SubscribeBox);
