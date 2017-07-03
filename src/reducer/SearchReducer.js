/*
Search 関連のreducer
*/

const initialState = { search_words: "", lists: [] };
const RepoSearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "REPO_REQUEST_SEARCH":
      return Object.assign({}, state, {
        search_words: action.text,
        lists: []
      });
    case "REPO_RECEIVE_RESULTS":
      return Object.assign({}, state, {
        search_words: "",
        lists: action.results
      });
    default:
      return state;
  }
};

const SubsribeSearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SUB_REQUEST_SEARCH":
      return Object.assign({}, state, {
        search_words: action.text,
        lists: []
      });
    case "SUB_RECEIVE_RESULTS":
      return Object.assign({}, state, {
        search_words: "",
        lists: action.results
      });
    default:
      return state;
  }
};

export { RepoSearchReducer, SubsribeSearchReducer };
