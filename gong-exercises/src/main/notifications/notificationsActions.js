export const NotificationsActions = {
    GET_NOTIFICATIONS: 'GET_NOTIFICATIONS',
    ADD_NOTIFICATION_SUCCESS: 'ADD_NOTIFICATION_SUCCESS',
    ADD_NOTIFICATION_FAIL: 'ADD_NOTIFICATION_FAIL'
};

export const getNotificationsAction = (notifications) => {
    return {
        type: NotificationsActions.GET_NOTIFICATIONS,
        notifications
    };
};

export const addNotificationSuccessAction = (notification) => {
    return {
        type: NotificationsActions.ADD_NOTIFICATION_SUCCESS,
        notification
    };
};

export const addNotificationFailAction = () => {
    return {
        type: NotificationsActions.ADD_NOTIFICATION_FAIL,
    };
};

