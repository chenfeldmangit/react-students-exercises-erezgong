import Tweet from "./Tweet";

class TweetAPI {
    static tweetsKey = "tweets";
    static initialTweets = [
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


    static getTweets = filter => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    let tweets = JSON.parse(localStorage.getItem(this.tweetsKey)).reverse();

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

    static deleteTweet = (tweetId) => {
        let tweets = JSON.parse(localStorage.getItem(this.tweetsKey));
        tweets = tweets.filter(tweet => tweet.id !== parseInt(tweetId));
        let counter = 0;
        tweets.map(tweet => tweet.id = counter++);
        localStorage.setItem(this.tweetsKey, JSON.stringify(tweets));
    }
}

export default TweetAPI;