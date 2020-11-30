import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';


class App extends Component {
    render() {
        return <MainPage/> 
    }
}

ReactDOM.render(<App />, document.getElementById('app'));