import { MainMiddleDash } from "@/components";
import RightSideBar from "@/components/dashboard/RightSideBar";
import React from "react";

export default function MainDashboard() {
  return (
    <div className="main-container">
      <div className="container">
        <MainMiddleDash />
        <RightSideBar />
      </div>
    </div>
  );
}
