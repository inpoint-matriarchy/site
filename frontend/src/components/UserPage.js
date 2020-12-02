
import React from 'react'
import _ from 'lodash'

import Account from '../components/Account'

class UserPage extends React.Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.fetchOrders()
        }
    }

    componentWillReceiveProps(newProps) {
        if (!this.props.auth.isAuthenticated && newProps.auth.isAuthenticated) {
            this.props.fetchOrders()
        }
    }

    render() {
        return (
            <Account
                login={this.props.login}
                logout={this.props.logout}
                userSignupRequest={this.props.userSignupRequest}
                history={this.props.history}
                auth={this.props.auth}
                orders={this.props.orders}
                products={this.props.products}
                updateProduct={this.props.updateProduct}
                addNewProduct={this.props.addNewProduct}
                deleteProduct={this.props.deleteProduct}
            />
        )
    }
}
