import React, {Component} from 'react';
import './css/App.scss';
import LeftMenu from "./left-menu/LeftMenu";
import './css/style.scss';
import RightMenu from "./right-menu/RightMenu";
import Main from "./main/Main";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home",
            filter: ""
        };
    }

    navigationHandler = (page) => {
        this.setState({currentPage: page});
    };

    searchHandler = (filter) => {
        this.setState({filter: filter});
    };

    render() {
        return (
            <div className="App">
                <LeftMenu navigationHandler={this.navigationHandler}/>
                <Main currentPage={this.state.currentPage}/>
                <RightMenu searchHandler={this.searchHandler}/>
            </div>
        );
    }
}

export default App;
