import React from "react";
import "./CollectionItem.styles.scss";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/CustomButton";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CustomButton onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
      <div className="collection-footer">
        
        <span className="name">{name}</span>
        <span className="price">{price}€</span>
        
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
