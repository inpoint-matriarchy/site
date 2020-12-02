import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import ShoppingPage from './ShoppingPage'
import CartPage from './CartPage'
import UserPage from './UserPage'

class App extends Component {
    render() {
        return  (
        <Switch>
            <Route exact path='/' component={ShoppingPage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/account' component={UserPage} />
        </Switch>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));