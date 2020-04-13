import React, {Component} from 'react';
import './css/App.scss';
import LeftMenu from "./left-menu/LeftMenu";
import './css/style.scss';
import RightMenu from "./right-menu/RightMenu";
import Main from "./main/Main";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: undefined
        };
    }


    searchHandler = (event) => {
        this.setState({filter: event.target.value});
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <LeftMenu/>
                    <Main filter={this.state.filter}/>
                    <RightMenu searchHandler={this.searchHandler}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
