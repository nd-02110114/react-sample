/*
Search 関連のreducer
*/

const initialState = { search_words: "", lists: [] };
const SearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "REQUEST_SEARCH":
      return Object.assign({}, state, {
        search_words: action.text,
        lists: []
      });
    case "RECEIVE_RESULTS":
      return Object.assign({}, state, {
        search_words: "",
        lists: action.results
      });
    default:
      return state;
  }
};

export default SearchReducer;
