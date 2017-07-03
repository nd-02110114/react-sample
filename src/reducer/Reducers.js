/*
reducerをまとめてコンバインするところ
*/

import { combineReducers } from "redux";
import { RepoSearchReducer, SubsribeSearchReducer } from "./SearchReducer";

const RootReducer = combineReducers({ RepoSearchReducer, SubsribeSearchReducer });

export default RootReducer;
