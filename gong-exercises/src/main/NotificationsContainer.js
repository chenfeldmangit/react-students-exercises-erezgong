import React from 'react';
import NotificationItem from "./NotificationItem";
import {connect} from "react-redux";

function NotificationsContainer(props) {
    return (
        <div className="list">
            {props.notifications.map(notification => {
                return <NotificationItem key={notification.id} data={notification}/>
            })}
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        notifications: store.notifications
    };
};


export default connect(mapStateToProps)(NotificationsContainer);

NotificationsContainer.propTypes = {};

