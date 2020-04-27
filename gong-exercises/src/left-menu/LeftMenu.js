import React from 'react';
import LeftMenuItem from './LeftMenuItem';
import BigButton from "../common/BigButton";
import store from "../store";
import {signOutAction} from "../users/usersActions";
import {connect} from "react-redux";

function LeftMenu(props) {
    const signOutDispatch = () => {
        store.dispatch(signOutAction());
    };

    return (
        <div id="left-menu" className="side-menu">
            <img className="logo" src="../assets/logo.svg" alt="twitter-logo"/>
            <div className="list">
                <LeftMenuItem icon="../assets/home/side-menu/home-icon.svg" caption="Home" path="/"/>
                <LeftMenuItem icon="../assets/home/side-menu/explore-icon.svg" caption="Explore" path="/explore"/>
                <LeftMenuItem icon="../assets/home/side-menu/notifications-icon.svg" caption={`Notifications (${props.notifications.length})`}
                              path="/notifications"/>
                <LeftMenuItem icon="../assets/home/side-menu/messages-icon.svg" caption="Messages" path="/messages"/>
                <LeftMenuItem icon="../assets/home/side-menu/bookmarks-icon.svg" caption="Bookmarks" path="/bookmarks"/>
                <LeftMenuItem icon="../assets/home/side-menu/lists-icon.svg" caption="Lists" path="/lists"/>
                <LeftMenuItem icon="../assets/profile.jpg" caption="Profile" path="/profile"/>
                <LeftMenuItem icon="../assets/home/side-menu/more-icon.svg" caption="More" path="/more"/>
                <BigButton caption="Tweet"/>
                <BigButton caption="Sign out" onClick={signOutDispatch}/>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        notifications: store.notifications
    };
};

export default connect(mapStateToProps)(LeftMenu);
