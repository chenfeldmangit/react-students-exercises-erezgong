import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class BigButton extends Component {
    render() {
        return (
            <div className="tweet big-button" onClick={this.props.onClick}>
                <span className="caption">{this.props.caption}</span>
            </div>
        );
    }
}

BigButton.defaultProps = {
    onClick: () => {}
};

BigButton.propTypes = {
    caption: PropTypes.string.isRequired,
    onClick: PropTypes.func
};