import React from "react";

import CustomButton from "../custom-button/CustomButton";

import "./cart-dropdown.styles.scss";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-itmes" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
