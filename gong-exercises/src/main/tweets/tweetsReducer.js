import {ADD_TWEET, DELETE_TWEET, LIKE_TWEET} from "./tweetsActions";
import TweetDTO from "../dto/TweetDTO";

const initialState = [
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

const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TWEET:
            action.tweet.id = state.length;
            return [...state, action.tweet];
        case LIKE_TWEET:
            let likeNewState = [...state];
            likeNewState.forEach(tweet => {
                    if (tweet.id === parseInt(action.tweetId)) {
                        tweet.liked = !tweet.liked;
                    }
                }
            );
            return likeNewState;
        case DELETE_TWEET:
            let deleteNewState = [...state.filter(tweet => tweet.id !== parseInt(action.tweetId))];
            let counter = 0;
            deleteNewState.forEach(tweet => tweet.id = counter++);
            return deleteNewState;
        default:
            return state;
    }
};

export default tweetsReducer;