import React from "react";
// import Update from "../Updates/Update";

import CustomerReview from "./CustomerREview/CustomerReview";

export default function RightSideBar() {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        {/* <Update /> */}
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
}
