// react imports
import React from "react";

// style imports
import "./checkout.styles.scss";

//redux imports
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

// components imports
import CheckoutItem from "../checkout-item/CheckoutItem";
import StripeButton from "../stripe-button/StripeButton";


function Checkout({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL:{total}€</span>
      </div>
      <div className="test-warning">
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 - cvv: 123
      </div>
      <StripeButton price={total}/>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
