/*
Search 関連のreducer
*/

// const initialState = [{ repo_name: "", repo_url: "" }];
const initialState = { search_words: "", lists: [] };
const SearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "REQUEST_SEARCH":
      // console.log(action);
      return Object.assign({}, state, {
        search_words: action.text,
        lists: []
      });
    case "RECEIVE_RESULTS":
      // console.log(action);
      return Object.assign({}, state, {
        search_words: "",
        lists: action.results
      });
    default:
      return state;
  }
};

export default SearchReducer;
