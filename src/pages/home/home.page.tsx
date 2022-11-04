import { FC } from "react";
import { MapContainer } from "../../components/map/map.container";
import { EntitiesContainer } from "./entities/entities.container";

import "./home.css";

export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <MapContainer />
      <EntitiesContainer />
    </div>
  );
};
