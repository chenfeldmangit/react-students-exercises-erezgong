export const TweetsActions = {
    GET_TWEETS: 'GET_TWEETS',
    ADD_TWEET: 'ADD_TWEET',
    LIKE_TWEET_REQUEST: 'LIKE_TWEET_REQUEST',
    LIKE_TWEET_SUCCESS: 'LIKE_TWEET_SUCCESS',
    LIKE_TWEET_FAIL: 'LIKE_TWEET_FAIL',
    DELETE_TWEET: 'DELETE_TWEET'
};

export const getTweetsAction = (tweets) => {
    return {
        type: TweetsActions.GET_TWEETS,
        tweets: tweets
    };
};

export const addTweetAction = (tweet) => {
    return {
        type: TweetsActions.ADD_TWEET,
        tweet: tweet
    };
};

export const likeTweetRequestAction = (tweedId) => {
    return {
        type: TweetsActions.LIKE_TWEET_REQUEST,
        tweetId: tweedId
    };
};

export const likeTweetSuccessAction = (tweedId) => {
    return {
        type: TweetsActions.LIKE_TWEET_SUCCESS,
        tweetId: tweedId
    };
};

export const likeTweetFailAction = () => {
    return {
        type: TweetsActions.LIKE_TWEET_FAIL,
    };
};

export const deleteTweetAction = (tweedId) => {
    return {
        type: TweetsActions.DELETE_TWEET,
        tweetId: tweedId
    };
};
