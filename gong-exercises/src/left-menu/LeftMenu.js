import React, {Component} from 'react';
import LeftMenuItem from './LeftMenuItem';
import BugButton from "./BigButton";

export default class LeftMenu extends Component {
    render() {
        return (
            <div id="left-menu" className="side-menu">
                <img className="logo" src="../assets/logo.svg" alt="twitter-logo"/>
                    <div className="list">
                        <LeftMenuItem icon="../assets/home/side-menu/home-icon.svg" caption="Home" path="/"/>
                        <LeftMenuItem icon="../assets/home/side-menu/explore-icon.svg" caption="Explore" path="/explore"/>
                        <LeftMenuItem icon="../assets/home/side-menu/notifications-icon.svg" caption="Notifications" path="/notifications"/>
                        <LeftMenuItem icon="../assets/home/side-menu/messages-icon.svg" caption="Messages" path="/messages"/>
                        <LeftMenuItem icon="../assets/home/side-menu/bookmarks-icon.svg" caption="Bookmarks" path="/bookmarks"/>
                        <LeftMenuItem icon="../assets/home/side-menu/lists-icon.svg" caption="Lists" path="/lists"/>
                        <LeftMenuItem icon="../assets/profile.jpg" caption="Profile" path="/profile"/>
                        <LeftMenuItem icon="../assets/home/side-menu/more-icon.svg" caption="More" path="/more"/>
                        <BugButton caption="Tweet"/>
                    </div>
            </div>
        );
    }
}

LeftMenu.propTypes = {};