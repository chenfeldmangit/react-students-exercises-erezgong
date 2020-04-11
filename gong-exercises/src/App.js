import React from 'react';
import './css/App.scss';
import LeftMenu from "./left-menu/LeftMenu";
import './css/style.scss';
import RightMenu from "./right-menu/RightMenu";
import Main from "./main/Main";

function App() {
  return (
    <div className="App">
        <LeftMenu/>
        <Main/>
        <RightMenu/>
    </div>
  );
}

export default App;
