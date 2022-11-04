import { FC } from "react";

import { LayerGroup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./map.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IEntity } from "../../models/entity.model";

export interface IMapProps {
  entities: IEntity[];
}

export const Map: FC<IMapProps> = ({ entities }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        {entities.map((entity: IEntity, index: number) => (
          <Marker
            key={index}
            position={[entity.geography.x, entity.geography.y]}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </LayerGroup>
    </MapContainer>
  );
};
