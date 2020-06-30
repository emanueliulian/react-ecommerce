import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import './header-style.scss';
import { auth } from "../../firebase/firebase-utils";
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon";
import Cart from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link to='/shop'>Shop</Link>
            <Link to='/contact'>Contact</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link to='/sign-in' className='option'> Sign In</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <Cart />
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);