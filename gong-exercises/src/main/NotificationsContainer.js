import React, {useEffect} from 'react';
import NotificationItem from "./NotificationItem";
import TweetAPI from "./TweetAPI";
import {connect} from "react-redux";
import {getNotificationsAction} from "./notifications/notificationsActions";

function NotificationsContainer(props) {
    useEffect(() => {
        async function getNotifications() {
            const notifications = await TweetAPI.getNotifications();
            props.getNotifications(notifications.reverse());
        }
        // noinspection JSIgnoredPromiseFromCall
        getNotifications();
    }, []);

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

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: notifications => {
            dispatch(getNotificationsAction(notifications))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

NotificationsContainer.propTypes = {};

