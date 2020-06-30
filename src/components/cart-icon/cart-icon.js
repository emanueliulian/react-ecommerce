import React from "react";
import  { ReactComponent  as ShoppingCart } from "../../assets/images/original.svg";
import './cart-icon-style.scss';
import { connect } from 'react-redux';
import { cartToggle } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ cartToggle, itemCount }) => (
    <div className='cart-icon' onClick={ cartToggle }>
        <ShoppingCart className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    cartToggle: () => dispatch(cartToggle())
})

const mapStateToProps = createStructuredSelector ({
    //itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);