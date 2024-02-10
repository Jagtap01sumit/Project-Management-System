import React from "react";

import Table from "./table/Table";
import Cards from "./Cards/Cards";

export default function MainMiddleDash() {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
}
