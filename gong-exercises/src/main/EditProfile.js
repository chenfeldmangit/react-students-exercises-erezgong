import React, {Component} from 'react';
import PropTypes from "prop-types";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentName: props.userData.name,
            currentTag: props.userData.tag,
            nameCounter: props.userData.name.length,
            tagCounter: props.userData.tag.length
        }
    }

    nameChange = (event) => {
        this.setState({currentName: event.target.value, nameCounter: event.target.value.length});
    };

    tagChange = (event) => {
        this.setState({currentTag: event.target.value, tagCounter: event.target.value.length});
    };

    render() {
        return (
            <div id="edit-profile-overlay" className="overlay-background">
                <div id="edit-profile" className="overlay-window">
                    <div className="header">
                        <div id="close-edit-profile" className="icon-wrapper header-item"
                             onClick={this.props.cancelEditProfileHandler}>
                            <img className="icon" src="../assets/profile/close.svg" alt="close"/>
                        </div>
                        <h2 className="title header-item">Edit Profile</h2>
                        <div id="save-edit-profile" className="small-button save header-item"
                             onClick={() => this.props.saveEditProfileHandler(this.state.currentName, this.state.currentTag)}>
                            <span className="caption">Save</span>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-cover"/>
                        <div className="info-profile"/>
                    </div>
                    <div className="form">
                        {/* TODO: Create component */}
                        <div id="edit-profile-item-name" className="form-item">
                            <span className="caption">Name</span>
                            <textarea className="box" maxLength="50" value={this.state.currentName}
                                      onChange={this.nameChange}/>
                            <span className="counter">{this.state.nameCounter + "/50"}</span>
                        </div>
                        <div id="edit-profile-item-tag" className="form-item">
                            <span className="caption">Tag</span>
                            <textarea className="box" maxLength="50" value={this.state.currentTag}
                                      onChange={this.tagChange}/>
                            <span className="counter">{this.state.tagCounter + "/50"}</span>
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
    userData: userDataType.isRequired,
    saveEditProfileHandler: PropTypes.func.isRequired,
    cancelEditProfileHandler: PropTypes.func.isRequired,
};

export default EditProfile;