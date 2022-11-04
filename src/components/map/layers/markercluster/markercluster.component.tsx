import MarkerClusterGroup from "react-leaflet-markercluster";

import "react-leaflet-markercluster/dist/styles.min.css";

export const MarkerClusterLayer: any = ({ children }: any) => {
  //@ts-ignore
  return <MarkerClusterGroup>{children}</MarkerClusterGroup>;
};
