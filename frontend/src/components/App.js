import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Maini from './Main';


class App extends Component {
    render() {
        return <Maini/> 
    }
}

ReactDOM.render(<App />, document.getElementById('app'));