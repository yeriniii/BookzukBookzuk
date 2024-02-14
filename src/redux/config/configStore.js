import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import userReducer from "../modules/userReducer";
import postReducer from "../modules/postReducer";
import list from "../modules/listReducer";
import headerName from "../modules/headerReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  list,
  headerName,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
