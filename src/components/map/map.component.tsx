import { FC } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON as GeoJSONFeature,
} from "react-leaflet";
import { MarkerClusterLayer } from "./layers/markercluster/markercluster.component";
import { MinimapControl } from "./controls/minimap.component";
import "leaflet/dist/leaflet.css";
import "./map.css";
import { MapRecenterer } from "./helpers/recenterer.component";

export interface IMapProps {
  geoJSONS: GeoJSON.GeoJsonObject[];
  onVectorClick?: (event: any) => void;
}

export const Map: FC<IMapProps> = ({ geoJSONS, onVectorClick }) => {
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
        {geoJSONS.map((geoJSON: GeoJSON.GeoJsonObject, index: number) => (
          <GeoJSONFeature
            key={index}
            data={geoJSON}
            eventHandlers={{
              click: onVectorClick,
            }}
          >
            <Popup>FUCK</Popup>
          </GeoJSONFeature>
        ))}
      </MarkerClusterLayer>
      <MapRecenterer />
    </MapContainer>
  );
};
