import React, { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={`directory_${section.id}`} {...section} />
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
