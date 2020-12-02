import React from 'react'
import toastr from 'toastr'

import Cart from '../components/Cart'
import Shipping from '../components/Shipping'
import Billing from '../components/Billing'
import Confirmation from '../components/Confirmation'
import { TOASTR_OPTIONS } from '../constants/Common'
toastr.options = TOASTR_OPTIONS

class CartPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }

        this.nextStep = this.nextStep.bind(this)
        this.previousStep = this.previousStep.bind(this)
        this.submit = this.submit.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.showStep = this.showStep.bind(this)
    }

    nextStep() {
        this.setState({ step: this.state.step + 1 })
    }

    previousStep() {
        this.setState({ step: this.state.step - 1 })
    }

    submit() {
        if (!this.props.auth.isAuthenticated) {
            toastr.warning("You have to login first to make an order.")
            this.props.history.push('/account')
        } else {
            this.props.placeOrder(this.props.cart, this.props.shipping.data, this.props.billing.data)
            this.props.history.push('/')
        }
    }

    handleRemoveItem(e, item) {
        e.stopPropagation()
        this.props.removeFromCart(item.id)
    }

    showStep() {
        switch (this.state.step) {
            case 1:
                return <Cart
                            cart={this.props.cart}
                            nextStep={this.nextStep}
                            handleRemoveItem={this.handleRemoveItem}
                            clearCart={this.props.clearCart}
                        />

            case 2:
                return <Shipping
                            shipping={this.props.shipping}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            setShippingOptions={this.props.setShippingOptions}
                        />

            case 3:
                return <Billing
                            billing={this.props.billing}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            setBillingOptions={this.props.setBillingOptions}
                        />

            case 4:
                return <Confirmation
                            cart={this.props.cart}
                            shipping={this.props.shipping}
                            billing={this.props.billing}
                            previousStep={this.previousStep}
                            submit={this.submit}
                        />

            default:
                return
        }
    }
}