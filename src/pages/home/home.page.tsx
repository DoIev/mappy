import { FC } from "react";
import { Card } from "../../components/card/card.component";
import { Map } from "../../components/map/map.component";

import "./home.css";

export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="map-container">
        <Map />
      </div>
      <div className="cards-container">
        <Card header="הבית של ברכה" info="כן כן כן זה הבית שליייייי" />;
      </div>
    </div>
  );
};
