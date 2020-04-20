import {createStore} from "redux";
import usersReducer from "./users/usersReducer";

const store = createStore(usersReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
