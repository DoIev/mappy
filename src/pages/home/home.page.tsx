import { FC } from "react";

import { Map } from "../../components/map/map.component";
import { EntitiesContainer } from "./entities/entities.container";

import "./home.css";

export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="map-container">
        <Map />
      </div>
      <EntitiesContainer />
    </div>
  );
};
