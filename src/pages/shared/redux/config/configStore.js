import { createStore } from "redux";
import { combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import board from "../modules/board";
const rootReducer = combineReducers({
  board,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
