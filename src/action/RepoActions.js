/*
Action関連
*/

import TOKEN from "../local.config";

const REPO_REQUEST_SEARCH = "REPO_REQUEST_SEARCH";
const requestSearch = text => {
  return {
    type: REPO_REQUEST_SEARCH,
    text: text
  };
};

const REPO_RECEIVE_RESULTS = "REPO_RECEIVE_RESULTS";
const receiveSearch = results => {
  return {
    type: REPO_RECEIVE_RESULTS,
    results: results
  };
};

const fetchRepoSearch = search_word => {
  let searchUrl =
    "https://api.github.com/search/repositories?q=" + search_word + "&access_token=" + TOKEN.ACCESS_TOKEN;

  return function(dispatch) {
    dispatch(requestSearch(search_word));

    return fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(function(json) {
        let results = {};
        if (json.items !== undefined) {
          Object.keys(json.items).forEach(function(key) {
            results = [
              ...results,
              {
                repo_name: json.items[key].full_name,
                repo_url: json.items[key].html_url
              }
            ];
          });
        }

        return results;
      })
      .then(function(results) {
        dispatch(receiveSearch(results));
      });
  };
};

export { fetchRepoSearch };
