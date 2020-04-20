import {ADD_TWEET, DELETE_TWEET, GET_TWEETS, LIKE_TWEET} from "./tweetsActions";

const initialState = [];

const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TWEETS:
            return action.tweets;
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