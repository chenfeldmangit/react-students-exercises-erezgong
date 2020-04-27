import React, {useEffect, useState} from 'react';
import './css/App.scss';
import LeftMenu from "./left-menu/LeftMenu";
import './css/style.scss';
import RightMenu from "./right-menu/RightMenu";
import Main from "./main/Main";
import {BrowserRouter} from "react-router-dom";
import Start from "./users/Start";
import {connect} from "react-redux";
import TweetAPI from "./main/TweetAPI";
import {getNotificationsAction} from "./main/notifications/notificationsActions";

function App(props) {
    localStorage.setItem(TweetAPI.tweetsKey, JSON.stringify(TweetAPI.initialTweets));
    localStorage.setItem(TweetAPI.notificationsKey, JSON.stringify(TweetAPI.initialNotifications));

    useEffect(() => {
        async function getNotifications() {
            const notifications = await TweetAPI.getNotifications();
            props.getNotifications(notifications);
        }
        // noinspection JSIgnoredPromiseFromCall
        getNotifications();
    }, []);


    const [filter, setFilter] = useState('');

    const searchHandler = (event) => {
        setFilter(event.target.value);
    };

    return (
        <BrowserRouter>
            <div className="App">
                {!props.users.currentUser && <Start/>}
                {props.users.currentUser && <LeftMenu/>}
                {props.users.currentUser && <Main filter={filter}/>}
                {props.users.currentUser && <RightMenu searchHandler={searchHandler}/>}
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (store) => {
    return {
        users: store.users,
        tweets: store.tweets,
        notifications: store.notifications
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: notifications => {
            dispatch(getNotificationsAction(notifications))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


