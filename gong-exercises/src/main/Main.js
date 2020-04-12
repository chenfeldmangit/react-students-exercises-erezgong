import React, {Component} from 'react';
import Home from "./Home";
import Profile from "./Profile";
import PropTypes from "prop-types";
import TweetAPI from "./TweetAPI";
import UserData from "./UserData";

class Main extends Component {
    constructor(props){
        super(props);
        localStorage.setItem(TweetAPI.tweetsKey, JSON.stringify(TweetAPI.initialTweets));
        localStorage.setItem(UserData.userDataKey, JSON.stringify(UserData.initialUserData));
        this.state = {tweets: []};
    }

    componentDidMount = async () => {
        this.setState({tweets: await TweetAPI.getTweets(this.props.filter)});
    };

    addTweetHandler = async (tweet) => {
        await TweetAPI.addTweet(tweet);
        this.setState({tweets: await TweetAPI.getTweets(this.props.filter)});
    };

    likeTweetHandler = async (tweetId) => {
        await TweetAPI.likeTweet(tweetId);
        this.setState({tweets: await TweetAPI.getTweets(this.props.filter)});
    };

    deleteTweetHandler = async (tweetId) => {
        await TweetAPI.deleteTweet(tweetId);
        this.setState({tweets: await TweetAPI.getTweets(this.props.filter)});
    };

    render() {
        return (
            <>
                {this.props.currentPage === "Home" && <Home tweets={this.state.tweets}
                                                            addTweetHandler={this.addTweetHandler}
                                                            likeTweetHandler={this.likeTweetHandler}
                                                            deleteTweetHandler={this.deleteTweetHandler}/>}
                {this.props.currentPage === "Profile" && <Profile tweets={this.state.tweets}
                                                                  likeTweetHandler={this.likeTweetHandler}
                                                                  deleteTweetHandler={this.deleteTweetHandler}/>}
            </>
        );
    }
}

Main.propTypes = {
    currentPage: PropTypes.string.isRequired,
    filter: PropTypes.string
};

export default Main;