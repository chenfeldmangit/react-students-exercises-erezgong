import React, {useState} from 'react';
import './css/App.scss';
import LeftMenu from "./left-menu/LeftMenu";
import './css/style.scss';
import RightMenu from "./right-menu/RightMenu";
import Main from "./main/Main";
import {BrowserRouter} from "react-router-dom";
import Start from "./users/Start";
import {connect} from "react-redux";

function App(props) {
    const [filter, setFilter] = useState('');

    const searchHandler = (event) => {
        setFilter(event.target.value);
    };

    return (
        <BrowserRouter>
            <div className="App">
                {!props.users.currentUser && <Start/>}
                {props.users.currentUser && <LeftMenu/>}
                {props.users.currentUser && <Main filter={filter}/>}
                {props.users.currentUser && <RightMenu searchHandler={searchHandler}/>}
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (store) => {
    return {
        users: store.users
    };
};

export default connect(mapStateToProps)(App);



