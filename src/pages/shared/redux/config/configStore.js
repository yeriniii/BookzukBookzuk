import { createStore } from "redux";
import { combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import list from "../modules/list";
const rootReducer = combineReducers({
  list,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
