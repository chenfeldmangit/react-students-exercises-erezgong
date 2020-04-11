import React, {Component} from 'react';
import Feed from "./Feed";
import TweetAPI from "./TweetAPI";
import Constants from "./Constants";

class Main extends Component {
    constructor(props) {
        super(props);

        localStorage.setItem(TweetAPI.tweetsKey, JSON.stringify(TweetAPI.initialTweets));
        localStorage.setItem(Constants.userDataKey, JSON.stringify(Constants.initialUserData));
    }

    render() {
        return (
            <>
                <div id="home" className="main">
                    <h2 className="title"> Home</h2>
                    <div className="status-container">
                        <div className="status">
                            <img className="profile" src="./assets/profile.jpg"/>
                            <textarea className="box" rows="5" cols="50" placeholder="What's happening?"></textarea>
                        </div>
                        <div className="interaction">
                            <div className="icon-wrapper">
                                <img className="icon" src="assets/home/interactions/picture.svg"/>
                            </div>
                            <div className="icon-wrapper">
                                <img className="icon" src="assets/home/interactions/gif.svg"/>
                            </div>
                            <div className="icon-wrapper">
                                <img className="icon" src="assets/home/interactions/poll.svg"/>
                            </div>
                            <div className="icon-wrapper">
                                <img className="icon" src="assets/home/interactions/emoji.svg"/>
                            </div>
                            <div id="add-tweet" className="small-button tweet">
                                <span className="caption">Tweet</span>
                            </div>
                        </div>
                    </div>
                    <Feed/>
                </div>

                <div id="profile" className="main">
                    <h2 className="title">Profile</h2>
                    <div className="info">
                        <div className="info-cover">
                            <img className="cover"/>
                        </div>
                        <div className="info-profile">
                            <img className="profile"/>
                            <div id="start-edit-profile" className="edit-profile big-button">
                                <span className="caption">Edit Profile</span>
                            </div>
                        </div>
                        <div className="info-bottom">
                            <div className="bio">
                                <span className="name"></span>
                                <span className="tag"></span>
                                <div className="joined">
                                    <img className="calendar" src="assets/profile/calendar.svg"/>
                                    <span className="joined-start">Joined</span>
                                    <span className="joined-date"></span>
                                </div>
                                <div className="follow">
                                    <div className="unit" id="following">
                                        <span className="count"></span>
                                        <span className="caption">Following</span>
                                    </div>
                                    <div className="unit" id="followers">
                                        <span className="count"></span>
                                        <span className="caption">Followers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs">
                        <div className="tab">
                            <span>Tweets</span>
                        </div>
                        <div className="tab">
                            <span>Tweets & replies</span>
                        </div>
                        <div className="tab">
                            <span>Media</span>
                        </div>
                        <div className="tab">
                            <span>Likes</span>
                        </div>
                    </div>
                    <Feed/>
                </div>
            </>
        );
    }
}

Main.propTypes = {};

export default Main;