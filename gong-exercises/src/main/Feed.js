import React, {Component} from 'react';
import TweetAPI from "./TweetAPI";
import TweetItem from "./TweetItem";
import PropTypes from 'prop-types';

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {tweets: []};
    }

    componentDidMount = async () => {
        this.setState({tweets: await TweetAPI.getTweets(this.props.filter)});
    };

    render() {
        return (
            <div className="feed">
                {this.state.tweets.map(tweet => {
                    return <TweetItem data={tweet}/>
                })}
            </div>
        );
    }
}

Feed.propTypes = {
    filter: PropTypes.string
};

export default Feed;