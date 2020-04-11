import React, {Component} from 'react';

class RightMenu extends Component {
    render() {
        return (
            <div id="right-menu" className="side-menu">
                <div className="search">
                    <h3>Search</h3>
                    <textarea className="box" placeholder="Search twitter..."></textarea>
                </div>
                <div className="trends">
                    <h3>Trends for you</h3>
                    <div className="trend">knesset</div>
                    <div className="trend">#covid</div>
                    <div className="trend">supreme court</div>
                    <div className="trend">#pandemic</div>
                    <div className="trend">#stayhome</div>
                </div>
            </div>
        );
    }
}

RightMenu.propTypes = {};

export default RightMenu;