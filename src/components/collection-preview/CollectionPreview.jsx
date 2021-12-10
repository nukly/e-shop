import React from "react";
import "./CollectionPreview.styles.scss";

import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );

export default CollectionPreview;
