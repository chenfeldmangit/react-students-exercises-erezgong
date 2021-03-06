import React, {Component} from 'react';
import Feed from "./Feed";
import PropTypes from "prop-types";
import EditProfile from "./EditProfile";
import MainTitle from "./MainTitle";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                "cover": "../assets/profile/cover.jpg",
                "profile": "../assets/profile.jpg",
                "name": "Erez Bizo",
                "tag": "@BizoErez",
                "joinedDate": "March 2020",
                "following": 34,
                "followers": 1
            },
            editingProfile: false
        };
    }

    startEditProfile = () => {
        this.setState({editingProfile: true})
    };

    cancelEditProfile = () => {
        this.setState({editingProfile: false})
    };

    saveEditProfile = (name, tag) => {
        this.setState((state, props) => {
            let newUserData = state.userData;
            newUserData.name = name;
            newUserData.tag = tag;
            return {userData: newUserData};
        });
        this.cancelEditProfile();
    };

    render() {
        return (
            <>
                <div id="profile" className="main">
                    <MainTitle title="Profile"/>
                    <div className="info">
                        <div className="info-cover">
                            <img className="cover" src={this.state.userData.cover} alt="cover"/>
                        </div>
                        <div className="info-profile">
                            <img className="profile" src={this.state.userData.profile} alt="profile"/>
                            <div id="start-edit-profile" className="edit-profile big-button" onClick={this.startEditProfile}>
                                <span className="caption">Edit Profile</span>
                            </div>
                        </div>
                        <div className="info-bottom">
                            <div className="bio">
                                <span className="name">{this.state.userData.name}</span>
                                <span className="tag">{this.state.userData.tag}</span>
                                <div className="joined">
                                    <img className="calendar" src="../assets/profile/calendar.svg" alt="calendar"/>
                                    <span className="joined-start">Joined</span>
                                    <span className="joined-date">{this.state.userData.joinedDate}</span>
                                </div>
                                <div className="follow">
                                    <div className="unit" id="following">
                                        <span className="count">{this.state.userData.following}</span>
                                        <span className="caption">Following</span>
                                    </div>
                                    <div className="unit" id="followers">
                                        <span className="count">{this.state.userData.followers}</span>
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
                    <Feed tweets={this.props.tweets}
                          likeTweetHandler={this.props.likeTweetHandler}
                          deleteTweetHandler={this.props.deleteTweetHandler}
                          loading={this.props.loading}/>
                </div>
                {this.state.editingProfile && <EditProfile userData={this.state.userData}
                                                           saveEditProfileHandler={this.saveEditProfile}
                                                           cancelEditProfileHandler={this.cancelEditProfile}/>}
            </>
        );
    }
}

Profile.propTypes = {
    tweets: PropTypes.array.isRequired,
    likeTweetHandler: PropTypes.func.isRequired,
    deleteTweetHandler: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};