import {all, call, put, takeEvery} from "@redux-saga/core/effects";
import {likeTweetFailAction, likeTweetSuccessAction, TweetsActions} from "./main/tweets/tweetsActions";
import TweetAPI from "./main/TweetAPI";
import {addNotificationFailAction, addNotificationSuccessAction,} from "./main/notifications/notificationsActions";

function* likeTweet(action){
    try {
        yield call(TweetAPI.likeTweetAsync, action.tweetId);
        console.log(`Like tweet - success: ${action.tweetId}`);
        yield put(likeTweetSuccessAction(action.tweetId));
    } catch (error) {
        console.log(`Like tweet - fail: ${action.tweetId}`);
        yield put(likeTweetFailAction)
    }
}

function* addNotification(action){
    try {
        const notification = yield call(TweetAPI.addNotification, action.tweetId);
        console.log(`Add notification - success:`);
        console.log(notification);
        yield put(addNotificationSuccessAction(notification));
    } catch (error) {
        yield put(addNotificationFailAction)
    }
}

export function* watchLikeTweet(){
    yield takeEvery(TweetsActions.LIKE_TWEET_REQUEST, likeTweet);
    yield takeEvery(TweetsActions.LIKE_TWEET_SUCCESS, addNotification)
}

export default function* rootSaga() {
    yield all([
        watchLikeTweet()
    ]);
}