import { FC, useContext, useEffect, useState } from "react";

import { DomainContext, IDomainContext } from "../../context/domain.context";
import {
  IServicesContext,
  ServicesContext,
} from "../../context/services.context";
import { IEntity } from "../../models/entity.model";
import { Map } from "./map.component";

import "./map.css";

export const MapContainer: FC = () => {
  const { entities } = useContext<IDomainContext>(DomainContext);
  const { entitiesParser } = useContext<IServicesContext>(ServicesContext);
  const [geoJsons, setGeoJSONs] = useState<GeoJSON.Feature[]>([]);

  useEffect(() => {
    if (entities.length > 0) {
      const parsedGeometries = entitiesParser.parseEntitiesToGeoJSONs(entities);
      setGeoJSONs(parsedGeometries);
    }
  }, [entities]);

  return (
    <div className="map-container">
      <Map geoJSONS={geoJsons} onVectorClick={() => console.log("click")} />
    </div>
  );
};
