import { createStore } from "redux";
import { combineReducers } from "redux";

import { devToolsEnhancer } from "redux-devtools-extension";
const rootReducer = combineReducers({});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
