import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem(props) {
    return (
        <div className="notification" data-id={props.data.id}>
            <div className="notification-icons">
                <img className="action icon" src={props.data.action.icon} alt="action"/>
                <img className="profile icon" src={props.data.profile} alt="profile"/>
            </div>
            <div className="notification-title">
                <span className="owner">{props.data.owner}</span>
                <span className="text">{props.data.action.verb + " " + props.data.action.conjunction} {props.data.object}</span>
            </div>
            <span className="content">{props.data.content}</span>
        </div>
    )
}

const notificationActionType = PropTypes.shape({
    type: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    conjunction: PropTypes.string.isRequired,
    icon: PropTypes.isRequired,
});

const notificationType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile: PropTypes.isRequired,
    owner: PropTypes.string.isRequired,
    action: notificationActionType.isRequired,
    object: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
});


NotificationItem.propTypes = {
    data: notificationType.isRequired,
};
