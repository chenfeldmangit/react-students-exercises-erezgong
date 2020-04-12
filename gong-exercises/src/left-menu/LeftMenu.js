import React, {Component} from 'react';
import LeftMenuItem from './LeftMenuItem';
import BugButton from "./BigButton";

class LeftMenu extends Component {
    render() {
        return (
            <div id="left-menu" className="side-menu">
                <img className="logo" src="../assets/logo.svg" alt="twitter-logo"/>
                    <div className="list">
                        <LeftMenuItem icon="../assets/home/side-menu/home-icon.svg" caption="Home" navigationHandler={this.props.navigationHandler}/>
                        <LeftMenuItem icon="../assets/home/side-menu/explore-icon.svg" caption="Explore" navigationHandler={this.props.navigationHandler}/>
                        <LeftMenuItem icon="../assets/home/side-menu/notifications-icon.svg" caption="Notifications" navigationHandler={this.props.navigationHandler}/>
                        <LeftMenuItem icon="../assets/home/side-menu/messages-icon.svg" caption="Messages" navigationHandler={this.props.navigationHandler}/>
                        <LeftMenuItem icon="../assets/home/side-menu/bookmarks-icon.svg" caption="Bookmarks" navigationHandler={this.props.navigationHandler}/>
                        <LeftMenuItem icon="../assets/home/side-menu/lists-icon.svg" caption="Lists" navigationHandler={this.props.navigationHandler}/>
                        <LeftMenuItem icon="../assets/profile.jpg" caption="Profile" navigationHandler={this.props.navigationHandler}/>
                        <LeftMenuItem icon="../assets/home/side-menu/more-icon.svg" caption="More" navigationHandler={this.props.navigationHandler}/>
                        <BugButton caption="Tweet"/>
                    </div>
            </div>
        );
    }
}

LeftMenu.propTypes = {};

export default LeftMenu;