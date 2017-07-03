/*
Action関連
*/

import TOKEN from "../local.config";

const SUB_REQUEST_SEARCH = "SUB_REQUEST_SEARCH";
const requestSubscribeSearch = text => {
  return {
    type: SUB_REQUEST_SEARCH,
    text: text
  };
};

const SUB_RECEIVE_RESULTS = "SUB_RECEIVE_RESULTS";
const receiveSubscribeSearch = results => {
  return {
    type: SUB_RECEIVE_RESULTS,
    results: results
  };
};

const fetchSubscribeSearch = user_name => {
  let searchUrl =
    "https://api.github.com/users/" + user_name + "/subscriptions?access_token=" + TOKEN.ACCESS_TOKEN;

  return function(dispatch) {
    dispatch(requestSubscribeSearch(user_name));

    return fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(function(json) {
        let results = {};
        if (json !== undefined) {
          Object.keys(json).forEach(function(key) {
            results = [
              ...results,
              {
                repo_name: json[key].full_name,
                repo_url: json[key].html_url
              }
            ];
          });
        }

        return results;
      })
      .then(function(results) {
        dispatch(receiveSubscribeSearch(results));
      });
  };
};

export { fetchSubscribeSearch };
