import { FC } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { MarkerClusterLayer } from "./layers/markercluster/markercluster.component";
import { IEntity } from "../../models/entity.model";

import "leaflet/dist/leaflet.css";
import "./map.css";
import { MinimapControl } from "./controls/minimap.component";

export interface IMapProps {
  entities: IEntity[];
  onEntityClick?: (event: any) => void;
}

export const Map: FC<IMapProps> = ({ entities, onEntityClick }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      attributionControl={false}
    >
      <MinimapControl />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterLayer>
        {entities.map((entity: IEntity, index: number) => (
          <Marker
            key={index}
            position={[entity.geography.x, entity.geography.y]}
            eventHandlers={{
              click: onEntityClick,
            }}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MarkerClusterLayer>
    </MapContainer>
  );
};
