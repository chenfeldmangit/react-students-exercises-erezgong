import React, {Component} from 'react';
import Feed from "./Feed";
import PropTypes from "prop-types";
import {Tweet} from "./Tweet";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {status: ""};
    }

    statusBoxChange = (event) => {
        this.setState({status: event.target.value});
    };

    cleanStatus = () => {
        this.setState({status: ""});
    };

    render() {
        return (
            <div id="home" className="main">
                <h2 className="title"> Home</h2>
                <div className="status-container">
                    <div className="status">
                        <img className="profile" src="../assets/profile.jpg" alt="profile"/>
                        <textarea className="box" rows="5" cols="50" placeholder="What's happening?"
                                  value={this.state.status} onChange={this.statusBoxChange}/>
                    </div>
                    <div className="interaction">
                        <div className="icon-wrapper">
                            <img className="icon" src="../assets/home/interactions/picture.svg" alt="add-picture"/>
                        </div>
                        <div className="icon-wrapper">
                            <img className="icon" src="../assets/home/interactions/gif.svg" alt="add-gif"/>
                        </div>
                        <div className="icon-wrapper">
                            <img className="icon" src="../assets/home/interactions/poll.svg" alt="add-poll"/>
                        </div>
                        <div className="icon-wrapper">
                            <img className="icon" src="../assets/home/interactions/emoji.svg" alt="add-emoji"/>
                        </div>
                        <div id="add-tweet" className="small-button tweet" onClick={() => {
                            this.props.addTweetHandler(
                                new Tweet(
                                    undefined,
                                    "assets/profile.jpg",
                                    "Erez Bizo",
                                    this.state.status,
                                    false
                                ));
                            this.cleanStatus();
                        }}>
                            <span className="caption">Tweet</span>
                        </div>
                    </div>
                </div>
                <Feed tweets={this.props.tweets}
                      likeTweetHandler={this.props.likeTweetHandler}
                      deleteTweetHandler={this.props.deleteTweetHandler}
                      loading={this.props.loading}
                />
            </div>
        );
    }
}

Home.propTypes = {
    tweets: PropTypes.array.isRequired,
    likeTweetHandler: PropTypes.func.isRequired,
    deleteTweetHandler: PropTypes.func.isRequired,
    addTweetHandler: PropTypes.func.isRequired
};

export default Home;