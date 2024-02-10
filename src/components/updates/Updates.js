import React from "react";

import { UpdatesData } from "@/data/Data";

export default function Updates() {
  return (
    <div className="Updates text-dark">
      {UpdatesData.map((update) => (
        <div className="update">
          <img src={update.img} />
          <div className="noti">
            <div style={{ marginBottom: "0.5rem" }}>
              <span>{update.name}</span>
              <span>{update.noti}</span>
            </div>
            <span>{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
