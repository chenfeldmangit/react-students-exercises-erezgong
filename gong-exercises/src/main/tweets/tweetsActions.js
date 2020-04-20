export const ADD_TWEET = 'ADD_TWEET';
export const LIKE_TWEET = 'LIKE_TWEET';
export const DELETE_TWEET = 'DELETE_TWEET';

export const addTweetAction = (tweet) => {
    return {
        type: ADD_TWEET,
        tweet: tweet
    };
};

export const likeTweetAction = (tweedId) => {
    return {
        type: LIKE_TWEET,
        tweetId: tweedId
    };
};

export const deleteTweetAction = (tweedId) => {
    return {
        type: DELETE_TWEET,
        tweetId: tweedId
    };
};
