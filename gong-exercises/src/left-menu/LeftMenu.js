import React, {Component} from 'react';
import LeftMenuItem from './LeftMenuItem';
import '../css/style.css';
import BugButton from "./BigButton";

class LeftMenu extends Component {
    render() {
        return (
            <div id="left-menu" className="side-menu">
                <img className="logo" src="../assets/logo.svg" alt="twitter-logo"/>
                    <div className="list">
                        <LeftMenuItem icon="../assets/home/side-menu/home-icon.svg" caption="Home"/>
                        <LeftMenuItem icon="../assets/home/side-menu/explore-icon.svg" caption="Explore"/>
                        <LeftMenuItem icon="../assets/home/side-menu/notifications-icon.svg" caption="Notifications"/>
                        <LeftMenuItem icon="../assets/home/side-menu/messages-icon.svg" caption="Messages"/>
                        <LeftMenuItem icon="../assets/home/side-menu/bookmarks-icon.svg" caption="Bookmarks"/>
                        <LeftMenuItem icon="../assets/home/side-menu/lists-icon.svg" caption="Lists"/>
                        <LeftMenuItem icon="../assets/profile.jpg" caption="Profile"/>
                        <LeftMenuItem icon="../assets/home/side-menu/more-icon.svg" caption="More"/>
                        <BugButton caption="Tweet"/>
                    </div>
            </div>
        );
    }
}

LeftMenu.propTypes = {};

export default LeftMenu;