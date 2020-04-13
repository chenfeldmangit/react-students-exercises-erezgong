import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class BugButton extends Component {
    render() {
        return (
            <div className="tweet big-button">
                <span className="caption">{this.props.caption}</span>
            </div>
        );
    }
}

BugButton.propTypes = {
    caption: PropTypes.string.isRequired,
};