import TweetDTO from "./dto/TweetDTO";
import NotificationDTO from "./dto/NotificationDTO";
import profile from "../assets/profile.jpg";
import NotificationActionDTO from "./dto/NotificationActionDTO";
import like from "../assets/notifications/like.svg";
import follow from "../assets/notifications/follow.svg";

export default class TweetAPI {
    static initialTweets = [
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

    static NotificationActions = {
        LIKE: new NotificationActionDTO(
            "like",
            "liked",
            "your",
            like
        ),
        FOLLOW: new NotificationActionDTO(
            "follow",
            "followed",
            "you",
            follow
        )
    };

    static initialNotifications = [
        new NotificationDTO(0,
            profile,
            "Erez Bizo",
            this.NotificationActions.LIKE,
            "tweet",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ),
        new NotificationDTO(1,
            profile,
            "Erez Bizo",
            this.NotificationActions.LIKE,
            "reply",
            "Amazing!",
        ),
        new NotificationDTO(2,
            profile,
            "Erez Bizo",
            this.NotificationActions.FOLLOW,
            null,
            null
        )
    ].reverse();

    static tweetsKey = "tweets";
    static notificationsKey = "notifications";

    static getTweets = () => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    let tweets = JSON.parse(localStorage.getItem(this.tweetsKey));
                    resolve(tweets);
                }, 1000)
            } catch (error) {
                reject(error);
            }
        });
    };

    static addTweet = (tweet) => {
        let tweets = JSON.parse(localStorage.getItem(this.tweetsKey));
        tweet.id = tweets.length;
        localStorage.setItem(this.tweetsKey, JSON.stringify([...tweets, tweet]));
    };


    static likeTweet = (tweetId) => {
        let tweets = JSON.parse(localStorage.getItem(this.tweetsKey));
        tweets.forEach(tweet => {
                if (tweet.id === parseInt(tweetId)) {
                    tweet.liked = !tweet.liked;
                }
            }
        );
        localStorage.setItem(this.tweetsKey, JSON.stringify(tweets));
    };

    static likeTweetAsync = (tweetId) => {
        return new Promise((resolve, reject) => {
            try {
                let tweets = JSON.parse(localStorage.getItem(this.tweetsKey));
                tweets.forEach(tweet => {
                        if (tweet.id === parseInt(tweetId)) {
                            tweet.liked = !tweet.liked;
                        }
                    }
                );
                localStorage.setItem(this.tweetsKey, JSON.stringify(tweets));
                resolve('success');
            } catch (error) {
                reject(error);
            }
        });
    };

    static deleteTweet = (tweetId) => {
        let tweets = JSON.parse(localStorage.getItem(this.tweetsKey));
        tweets = tweets.filter(tweet => tweet.id !== parseInt(tweetId));
        let counter = 0;
        tweets.map(tweet => tweet.id = counter++);
        localStorage.setItem(this.tweetsKey, JSON.stringify(tweets));
    };

    static getNotifications = () => {
        return new Promise((resolve, reject) => {
            try {
                let tweets = JSON.parse(localStorage.getItem(this.notificationsKey));
                resolve(tweets);
            } catch (error) {
                reject(error);
            }
        });
    };

    static addNotification = (tweetId) => {
        let tweets = JSON.parse(localStorage.getItem(this.tweetsKey));
        let notifications = JSON.parse(localStorage.getItem(this.notificationsKey));
        const notification = new NotificationDTO(
            notifications.length,
            profile,
            "Erez Bizo",
            this.NotificationActions.LIKE,
            "tweet",
            tweets[tweetId].text,
        );
        localStorage.setItem(this.notificationsKey, JSON.stringify([notification, ...notifications]));
        return notification;
    };
}