import {NotificationsActions} from "./notificationsActions";

const initialState = [];

const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NotificationsActions.GET_NOTIFICATIONS:
            return action.notifications;
        case NotificationsActions.ADD_NOTIFICATION_SUCCESS:
            return [action.notification, ...state];
        default:
            return state;
    }
};

export default notificationsReducer;