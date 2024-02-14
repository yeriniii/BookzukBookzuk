import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import userReducer from "../modules/userReducer";
import postReducer from "../modules/postReducer";
import list from "../modules/listReducer";
import headerName from "../modules/headerReducer";
import modalReducer from "../modules/modalReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  list,
  headerName,
  modal: modalReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
