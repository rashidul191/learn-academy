import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i< cart.length; i++) {
      const product = cart[i];
      total = total + product.price;
       
    }
    return (
        <div className="cart-style">
            <h2>Order Summary</h2>
            <h4>Items Ordered : {cart.length}</h4>
            <h3>Total price : ${total}</h3>
            <button className="order-btn">
                <FontAwesomeIcon icon={faShoppingCart}/> 
                 My courses
            </button>
        </div>
    );
};

export default Cart;