import React, {Component} from 'react';
import TweetItem from "./TweetItem";
import PropTypes from "prop-types";

class Feed extends Component {
    render() {
        return (
            <div className="feed">
                {this.props.tweets.map(tweet => {
                    return <TweetItem key={tweet.id} data={tweet} likeTweetHandler={this.props.likeTweetHandler} deleteTweetHandler={this.props.deleteTweetHandler}/>
                })}
            </div>
        );
    }
}

Feed.propTypes = {
    tweets: PropTypes.array.isRequired,
    likeTweetHandler: PropTypes.func.isRequired,
    deleteTweetHandler: PropTypes.func.isRequired
};

export default Feed;