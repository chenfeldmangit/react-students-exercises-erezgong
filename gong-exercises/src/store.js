import {combineReducers, createStore} from "redux";
import usersReducer from "./users/usersReducer";
import tweetsReducer from "./main/tweets/tweetsReducer";

const reducers = combineReducers({
    users: usersReducer,
    tweets: tweetsReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
