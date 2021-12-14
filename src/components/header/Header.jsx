import React from "react";
import { connect } from "react-redux";
import Logo from "../../logo.png";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, Option1Link,  OptionHover } from "./header.styles";


function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={Logo} alt="logo"></img>
      </LogoContainer>
      <OptionsContainer>
        <OptionHover>
        <Option1Link to="/shop">
            Shop
        </Option1Link>
        </OptionHover>
        <OptionHover>
        <OptionLink to="/contact">
          Contact
        </OptionLink>
        </OptionHover>
        <OptionHover>
        {currentUser ? (
          <OptionLink to="/" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            Sign in
          </OptionLink>
        )}
        </OptionHover>
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
