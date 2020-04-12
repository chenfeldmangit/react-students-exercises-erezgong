import React, {Component} from 'react';
import Feed from "./Feed";
import Home from "./Home";
import UserData from "./UserData";
import PropTypes from "prop-types";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {userData: {}};
    }

    componentDidMount() {
        this.setState({userData: JSON.parse(localStorage.getItem(UserData.userDataKey))});
    }

    render() {
        return (
            <div id="profile" className="main">
                <h2 className="title">Profile</h2>
                <div className="info">
                    <div className="info-cover">
                        <img className="cover" src={this.state.userData.cover}/>
                    </div>
                    <div className="info-profile">
                        <img className="profile" src={this.state.userData.profile}/>
                        <div id="start-edit-profile" className="edit-profile big-button">
                            <span className="caption">Edit Profile</span>
                        </div>
                    </div>
                    <div className="info-bottom">
                        <div className="bio">
                            <span className="name">{this.state.userData.name}</span>
                            <span className="tag">{this.state.userData.tag}</span>
                            <div className="joined">
                                <img className="calendar" src="../assets/profile/calendar.svg"/>
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
                      deleteTweetHandler={this.props.deleteTweetHandler}/>
            </div>
        );
    }
}

Home.propTypes = {
    tweets: PropTypes.array.isRequired,
    likeTweetHandler: PropTypes.func.isRequired,
    deleteTweetHandler: PropTypes.func.isRequired
};


export default Profile;