import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default class LeftMenuItem extends Component {
    constructor(props) {
        super(props);
        this.id = "left-menu-" + this.props.caption;
    }

    render() {
        return (
            <Link className="link" to={this.props.path}>
                <div className="item" id={this.id}>
                    <img className="icon" src={this.props.icon} alt={this.props.caption}/>
                    <span className="caption">{this.props.caption}</span>
                </div>
            </Link>
        );
    }
}

LeftMenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};