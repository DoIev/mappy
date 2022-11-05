import { FC, useContext, useEffect, useState } from "react";

import { DomainContext, IDomainContext } from "../../context/domain.context";
import {
  IServicesContext,
  ServicesContext,
} from "../../context/services.context";
import { Map } from "./map.component";

import "./map.css";

export const MapContainer: FC = () => {
  const { entities, setFocusedEntityId } =
    useContext<IDomainContext>(DomainContext);
  const { entitiesParser } = useContext<IServicesContext>(ServicesContext);
  const [geoJsons, setGeoJSONs] = useState<GeoJSON.Feature[]>([]);

  useEffect(() => {
    if (entities.length > 0) {
      const parsedGeometries = entitiesParser.parseEntitiesToGeoJSONs(entities);
      setGeoJSONs(parsedGeometries);
    }
  }, [entities]);

  const OnEntityClick = (event: any) => {
    const entityId = event.layer.feature.geometry.properties.entityId;
    setFocusedEntityId(entityId, "Map");
  };

  return (
    <div className="map-container">
      <Map geoJSONS={geoJsons} onVectorClick={OnEntityClick} />
    </div>
  );
};
