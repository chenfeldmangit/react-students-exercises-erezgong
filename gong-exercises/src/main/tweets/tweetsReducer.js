import {TweetsActions} from "./tweetsActions";

const initialState = [];

const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TweetsActions.GET_TWEETS:
            return action.tweets;
        case TweetsActions.ADD_TWEET:
            action.tweet.id = state.length;
            return [...state, action.tweet];
        case TweetsActions.LIKE_TWEET_SUCCESS:
            let likeNewState = [...state];
            likeNewState.forEach(tweet => {
                    if (tweet.id === parseInt(action.tweetId)) {
                        tweet.liked = !tweet.liked;
                    }
                }
            );
            return likeNewState;
        case TweetsActions.DELETE_TWEET:
            let deleteNewState = [...state.filter(tweet => tweet.id !== parseInt(action.tweetId))];
            let counter = 0;
            deleteNewState.forEach(tweet => tweet.id = counter++);
            return deleteNewState;
        default:
            return state;
    }
};

export default tweetsReducer;