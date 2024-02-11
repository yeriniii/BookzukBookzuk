import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import userReducer from "../modules/userReducer";
import postReducer from "../modules/postReducer";

const rootReducer = combineReducers({
    reducer: {
        user: userReducer,
        post: postReducer,
    },
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
