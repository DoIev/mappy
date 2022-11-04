import { FC, useContext, useEffect } from "react";

import { DomainContext, IDomainContext } from "../../context/domain.context";
import { IEntity } from "../../models/entity.model";
import { Map } from "./map.component";

import "./map.css";

export const MapContainer: FC = () => {
  const { entities } = useContext<IDomainContext>(DomainContext);

  useEffect(() => {}, [entities]);

  return (
    <div className="map-container">
      <Map
        entities={entities as IEntity[]}
        onEntityClick={() => console.log("click")}
      />
    </div>
  );
};
