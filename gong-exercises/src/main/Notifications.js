import React from 'react';
import MainTitle from "./MainTitle";
import NotificationsContainer from "./NotificationsContainer";
import '../css/notifications.scss';

export default function Notifications(props) {
    return (
        <div id="notifications" className="main">
            <MainTitle title="Notifications"/>
            <NotificationsContainer/>
        </div>
    );
}

Notifications.propTypes = {};