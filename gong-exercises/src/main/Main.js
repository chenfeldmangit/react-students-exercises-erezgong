import React, {useEffect, useState} from 'react';
import Home from "./Home";
import Profile from "./Profile";
import PropTypes from "prop-types";
import Tweet from "./Tweet";

function Main(props) {
    const initialTweets = [
        new Tweet(0,
            "../assets/profile.jpg",
            "Erez Bizo",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            false),
        new Tweet(1,
            "../assets/profile.jpg",
            "Erez Bizo",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            false),
        new Tweet(2,
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
    }, []);

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
            {props.currentPage === "Home" &&
            <Home tweets={filterTweets(tweets, props.filter)}
                  addTweetHandler={addTweet}
                  likeTweetHandler={likeTweet}
                  deleteTweetHandler={deleteTweet}
                  loading={loading}/>}
            {props.currentPage === "Profile" &&
            <Profile tweets={filterTweets(tweets, props.filter)}
                     likeTweetHandler={likeTweet}
                     deleteTweetHandler={deleteTweet}
                     loading={loading}/>}
        </>
    );
}

Main.propTypes = {
    currentPage: PropTypes.string.isRequired,
    filter: PropTypes.string
};

export default Main;