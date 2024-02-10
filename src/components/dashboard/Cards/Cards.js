import React from "react";

import { cardsData } from "@/data/Data";
import { Card } from "@/components";
// if error occure then comment the card and then refresh then uncomment
export default function Cards() {
  return (
    <div className="Cards">
      {cardsData?.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}
