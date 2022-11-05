import { useContext, useEffect } from "react";
import { useMap } from "react-leaflet";
import { DomainContext, IDomainContext } from "../../../context/domain.context";
import {
  IServicesContext,
  ServicesContext,
} from "../../../context/services.context";
import { IEntity } from "../../../models/entity.model";

export const MapRecenterer = () => {
  const map = useMap();
  const { focusedEntityId, entities } =
    useContext<IDomainContext>(DomainContext);

  const { entitiesParser, geographyService } =
    useContext<IServicesContext>(ServicesContext);

  useEffect(() => {
    if (!focusedEntityId) return;
    const entity = entities.find(
      (entity: IEntity) => entity.id === focusedEntityId
    );
    const geoJSON = entitiesParser.parseEntityToGeoJSON(entity);
    const { geometry } = geographyService.getCenterOfMass(geoJSON);
    map.flyTo(geometry.coordinates);
  }, [focusedEntityId]);

  return null;
};
