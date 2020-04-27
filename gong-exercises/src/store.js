import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users/usersReducer";
import tweetsReducer from "./main/tweets/tweetsReducer";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from './sagas'
import notificationsReducer from "./main/notifications/notificationsReducer";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    users: usersReducer,
    tweets: tweetsReducer,
    notifications: notificationsReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
