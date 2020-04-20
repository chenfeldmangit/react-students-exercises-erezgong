export const LOG_IN = 'LOG_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const logInAction = (name, password) => {
    return {
        type: LOG_IN,
        user: {
            name: name,
            password: password
        }
    };
};

export const signOutAction = () => {
    return {
        type: SIGN_OUT
    };
};
