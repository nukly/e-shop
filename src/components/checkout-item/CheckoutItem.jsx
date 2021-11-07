// react imports
import React from "react";

// styles imports
import "./CheckoutItem.styles.scss";

function CheckoutItem({ cartItem: { name, imageUrl, price, quantity } }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove"></div>
    </div>
  );
}

export default CheckoutItem;
