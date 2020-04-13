import React, {useState} from 'react';
import NotificationDTO from "./dto/NotificationDTO";
import NotificationItem from "./NotificationItem";
import NotificationActionDTO from "./dto/NotificationActionDTO";
import like from '../assets/notifications/like.svg';
import follow from '../assets/notifications/follow.svg';
import profile from "../assets/profile.jpg";

export default function NotificationsContainer(props) {
    const notificationActions = {
        like: new NotificationActionDTO(
            "like",
            "liked",
            "your",
            like
        ),
        follow: new NotificationActionDTO(
            "follow",
            "followed",
            "you",
            follow
        )
    };

    const initialNotifications = [
        new NotificationDTO(0,
            profile,
            "Erez Bizo",
            notificationActions.like,
            "tweet",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ),
        new NotificationDTO(1,
            profile,
            "Erez Bizo",
            notificationActions.like,
            "reply",
            "Amazing!",
        ),
        new NotificationDTO(2,
            profile,
            "Erez Bizo",
            notificationActions.follow,
            null,
            null
        )
    ];

    const [notifications] = useState(initialNotifications);

    return (
        <div className="list">
            {notifications.map(notification => {
                return <NotificationItem key={notification.id} data={notification}/>
            })}
        </div>
    );
}

NotificationsContainer.propTypes = {};

