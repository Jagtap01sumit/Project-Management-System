import React from "react";

import CustomerReview from "./CustomerREview/CustomerReview";
import Updates from "../updates/Updates";

export default function RightSideBar() {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
}
