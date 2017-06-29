import { combineReducers } from "redux";

const appInitialState = { count: 0 };

export const reducer = (state = appInitialState, action) => {
  switch (action.type) {
    case "INC":
      console.log("click INC");
      return Object.assign({}, { count: state.count + 1 });
    case "DEC":
      console.log("click DEC");
      return Object.assign({}, { count: state.count - 1 });
    case "PLUS2":
      console.log("click PLUS2");
      return Object.assign({}, { count: state.count + 2 });
    case "PLUS3":
      console.log("click PLUS3");
      return Object.assign({}, { count: state.count + 3 });
    default:
      return state;
  }
};

const RootReducer = combineReducers({ reducer });

export default RootReducer;
