import React, {useEffect, useState} from 'react';
import Home from "./Home";
import Profile from "./Profile";
import PropTypes from "prop-types";
import TweetDTO from "./dto/TweetDTO";
import Notifications from "./Notifications";
import {Route, Switch} from "react-router-dom";

export default function Main(props) {
    const initialTweets = [
        new TweetDTO(0,
            "../assets/profile.jpg",
            "Erez Bizo",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            false),
        new TweetDTO(1,
            "../assets/profile.jpg",
            "Erez Bizo",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            false),
        new TweetDTO(2,
            "../assets/profile.jpg",
            "Erez Bizo",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            false),
    ];

    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setTweets(initialTweets.reverse());
            setLoading(false)
        }, 1000)
    }, [initialTweets]);

    const addTweet = tweet => {
        tweet.id = tweets.length;
        setTweets([tweet, ...tweets]);
    };

    const likeTweet = tweetId => {
        const newTweets = [...tweets];
        newTweets.forEach(tweet => {
                if (tweet.id === parseInt(tweetId)) {
                    tweet.liked = !tweet.liked;
                }
            }
        );
        setTweets(newTweets);
    };

    const deleteTweet = async (tweetId) => {
        let counter = 0;
        const newTweets = tweets
            .filter(tweet => tweet.id !== parseInt(tweetId))
            .map(tweet => tweet.id = counter++);
        setTweets(newTweets);
    };

    const filterTweets = (tweets, filter) => {
        if (filter !== undefined) {
            tweets = tweets.filter(tweet => tweet.text.includes(filter));
        }
        return tweets;
    };

    return (
        <>
            <Switch>
                <Route path="/" component={() => <Home tweets={filterTweets(tweets, props.filter)}
                                                       addTweetHandler={addTweet}
                                                       likeTweetHandler={likeTweet}
                                                       deleteTweetHandler={deleteTweet}
                                                       loading={loading}/>} exact/>
                <Route path="/profile" component={() => <Profile tweets={filterTweets(tweets, props.filter)}
                                                           likeTweetHandler={likeTweet}
                                                           deleteTweetHandler={deleteTweet}
                                                           loading={loading}/>}/>
                <Route path="/notifications" component={Notifications}/>
            </Switch>
        </>
    );
}

Main.propTypes = {
    filter: PropTypes.string
};