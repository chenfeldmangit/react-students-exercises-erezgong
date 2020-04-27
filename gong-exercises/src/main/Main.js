import React, {useEffect, useState} from 'react';
import Home from "./Home";
import Profile from "./Profile";
import PropTypes from "prop-types";
import Notifications from "./Notifications";
import {Route, Switch} from "react-router-dom";
import {addTweetAction, deleteTweetAction, getTweetsAction, likeTweetRequestAction} from "./tweets/tweetsActions";
import {connect} from "react-redux";
import TweetAPI from "./TweetAPI";

function Main(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getTweets() {
            const tweets = await TweetAPI.getTweets();
            props.getTweets(tweets);
            setLoading(false);
        }
        // noinspection JSIgnoredPromiseFromCall
        getTweets();
    }, []);

    const filterTweets = (tweets, filter) => {
        if (filter !== '') {
            tweets = tweets.reverse().filter(tweet => tweet.text.includes(filter));
        }
        return tweets;
    };

    return (
        <>
            <Switch>
                <Route path="/" component={() => <Home tweets={filterTweets(props.tweets, props.filter)}
                                                       addTweetHandler={props.addTweet}
                                                       likeTweetHandler={props.likeTweet}
                                                       deleteTweetHandler={props.deleteTweet}
                                                       loading={loading}/>} exact/>
                <Route path="/profile" component={() => <Profile tweets={filterTweets(props.tweets, props.filter)}
                                                                 likeTweetHandler={props.likeTweet}
                                                                 deleteTweetHandler={props.deleteTweet}
                                                                 loading={loading}/>}/>
                <Route path="/notifications" component={Notifications}/>
            </Switch>
        </>
    );
}

const mapStateToProps = (store) => {
    return {
        tweets: store.tweets
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTweets: tweets => {
            dispatch(getTweetsAction(tweets))
        },
        addTweet: tweet => {
            dispatch(addTweetAction(tweet));
            TweetAPI.addTweet(tweet)
        },
        likeTweet: tweetId => {
            dispatch(likeTweetRequestAction(tweetId));
        },
        deleteTweet: tweetId => {
            dispatch(deleteTweetAction(tweetId));
            TweetAPI.deleteTweet(tweetId)
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)

Main.propTypes = {
    filter: PropTypes.string.isRequired
};