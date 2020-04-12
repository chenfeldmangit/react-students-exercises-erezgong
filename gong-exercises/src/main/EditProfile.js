import React, {Component} from 'react';
import Feed from "./Feed";
import Home from "./Home";
import UserData from "./UserData";
import PropTypes from "prop-types";

class EditProfile extends Component {
    render() {
        return (
            <div id="edit-profile-overlay" className="overlay-background">
                <div id="edit-profile" className="overlay-window">
                    <div className="header">
                        <div id="close-edit-profile" className="icon-wrapper header-item">
                            <img className="icon" src="../assets/profile/close.svg" alt="close"/>
                        </div>
                        <h2 className="title header-item">Edit Profile</h2>
                        <div id="save-edit-profile" className="small-button save header-item">
                            <span className="caption">Save</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-cover"/>
                        <div className="info-profile"/>
                    </div>
                    <div className="form">
                        <div id="edit-profile-item-name" className="form-item">
                            <span className="caption">Name</span>
                            <textarea className="box" maxLength="50" value={this.props.userData.name}/>
                            <span className="counter"/>
                        </div>
                        <div id="edit-profile-item-tag" className="form-item">
                            <span className="caption">Tag</span>
                            <textarea className="box" maxLength="50" value={this.props.userData.tag}/>
                            <span className="counter"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const userDataType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
});

EditProfile.propTypes = {
    userData: userDataType.isRequired
};

export default EditProfile;