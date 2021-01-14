import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

function CollectionsOverview({ collections, ...otherProps }) {
  return (
    <div className="collections-overview">
      {collections.map((product, idx) => (
        <CollectionPreview key={`collection_${idx}`} {...product} />
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
