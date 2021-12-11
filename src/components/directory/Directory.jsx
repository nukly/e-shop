import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";


const Directory = ({sections}) =>{
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          
          <MenuItem
            key={id}
            {...otherSectionProps}
          ></MenuItem>
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}) 

export default connect(mapStateToProps)(Directory)