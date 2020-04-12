import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LeftMenuItem extends Component {
    constructor(props) {
        super(props);
        this.id = "left-menu-" + this.props.caption;
    }

    render() {
        return (
            <div className="item" id={this.id} onClick={() => this.props.navigationHandler(this.props.caption)}>
                <img className="icon" src={this.props.icon} alt={this.props.caption}/>
                <span className="caption">{this.props.caption}</span>
            </div>
        );
    }
}

LeftMenuItem.propTypes = {
    caption: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default LeftMenuItem;