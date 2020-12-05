import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import About from './Pages/About';
import SignIn from './Components/SignIn';
import Contact from './Pages/Contact';


class App extends Component {
    render() {
        return  (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cart' component={CartPage} />
            <Route path='/about' component={About} />
            <Route path='/about/contact' component={Contact} />
            <Route path='/signin' component={SignIn} />
        </Switch>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
