import { FC } from "react";
import { MapContainer } from "../../components/map/map.container";
import { AddContainer } from "./add-container/add.container";
import "./add.css";

export const AddPage: FC = () => {
  return (
    <div className="home-page">
      <AddContainer />
      <MapContainer />
    </div>
  );
};
