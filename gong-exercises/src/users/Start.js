import React, {useState} from 'react';
import BigButton from "../common/BigButton";
import store from "../store"
import {logInAction} from "./usersActions";
import PopUpForm from "./PopUpForm";

export default function Start(props) {
    const [showLogIn, setShowLogin] = useState(false);
    // const [showSignUp, setSignUp] = useState(false);

    const buttonOnClick = (setter) => {
        setter(true);
    };

    const logInDispatch = () => {
        store.dispatch(logInAction("Erez Bizo", "password1"));
    };

    const popUpFormItems = [{
        caption: "User Name:",
        maxLength: 50
    }, {
        caption: "Password:",
        maxLength: 16
    }];

    return (
        <div id="start">
            <BigButton caption="Log In" onClick={logInDispatch}/>
            <BigButton caption="Sign Up"/>

            {/*{showLogIn && <PopUpForm items={popUpFormItems}/>}*/}
            {/*{showSignUp && <PopUpForm items={popUpFormItems}/>}*/}
        </div>
    )

}
