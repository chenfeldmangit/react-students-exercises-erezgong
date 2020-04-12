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
        this.state = {tweets: [], loading: true};
    }

    refreshTweets = async () => {
        this.setState({tweets: await TweetAPI.getTweets(this.state.filter), loading: false});
    };

    componentDidMount = async () => {
        this.refreshTweets();
    };

    addTweetHandler = async (tweet) => {
        await TweetAPI.addTweet(tweet);
        this.refreshTweets();
    };

    likeTweetHandler = async (tweetId) => {
        await TweetAPI.likeTweet(tweetId);
        this.refreshTweets();
    };

    deleteTweetHandler = async (tweetId) => {
        await TweetAPI.deleteTweet(tweetId);
        this.refreshTweets();
    };

    filterTweets = (tweets, filter) => {
        if (filter !== undefined){
            tweets = tweets.filter(tweet => tweet.text.includes(filter));
        }
        return tweets;
    };

    render() {
        return (
            <>
                {this.props.currentPage === "Home" && <Home tweets={this.filterTweets(this.state.tweets, this.props.filter)}
                                                            addTweetHandler={this.addTweetHandler}
                                                            likeTweetHandler={this.likeTweetHandler}
                                                            deleteTweetHandler={this.deleteTweetHandler}
                                                            loading={this.state.loading}/>}
                {this.props.currentPage === "Profile" && <Profile tweets={this.filterTweets(this.state.tweets, this.props.filter)}
                                                                  likeTweetHandler={this.likeTweetHandler}
                                                                  deleteTweetHandler={this.deleteTweetHandler}
                                                                  loading={this.state.loading}/>}
            </>
        );
    }
}

Main.propTypes = {
    currentPage: PropTypes.string.isRequired,
    filter: PropTypes.string
};

export default Main;