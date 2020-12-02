import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';

import ShoppingPage from './ShoppingPage'
import CartPage from './CartPage'
import UserPage from './UserPage'

class App extends Component {
    render() {
<<<<<<< HEAD
        return  (
        <Switch>
            <Route exact path='/' component={ShoppingPage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/account' component={UserPage} />
        </Switch>
        )
=======
        return <MainPage/> 
>>>>>>> 1a032af008fc4322d1b929134b9bd3890e3b4aa9
    }
}

ReactDOM.render(<App />, document.getElementById('app'));