import React from "react";
import CustomButton from "../custom-button/custom-button";
import './cart-dropdown-style.scss';
import CartItem from "../cart-item/cart-item";
import {connect} from 'react-redux';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';
import { cartToggle } from '../../redux/cart/cart.actions';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} /> )
                        )
                    )
                    : (
                        <span className='empty-message'>Your cart is empty</span>
                    )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(cartToggle())
        }}>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector ( {
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));