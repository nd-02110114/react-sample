/*
Action関連
*/

const REQUEST_SEARCH = "REQUEST_SEARCH";
const requestSearch = text => {
  return {
    type: REQUEST_SEARCH,
    text: text
  };
};

const RECEIVE_RESULTS = "RECEIVE_RESULTS";
const receiveSearch = results => {
  return {
    type: RECEIVE_RESULTS,
    results: results
  };
};

const fetchSearch = (user_name, search_word) => {
  let searchUrl = "https://api.github.com/search/repositories?q=" + search_word + "+user:" + user_name;

  return function(dispatch) {
    dispatch(requestSearch(search_word));

    return fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(function(json) {
        let results = {};
        Object.keys(json.items).forEach(function(key) {
          results = [
            ...results,
            {
              repo_name: json.items[key].name,
              repo_url: json.items[key].html_url
            }
          ];
        });
        return results;
      })
      .then(function(results) {
        dispatch(receiveSearch(results));
      });
  };
};

export { fetchSearch };
