import {LOG_IN, SIGN_OUT} from "./usersActions";

const initialState = {
    currentUser: undefined
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {currentUser: action.user};
        case SIGN_OUT:
            return {currentUser: undefined};
        default:
            return state;
    }
};

export default usersReducer;