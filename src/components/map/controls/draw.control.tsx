import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import { useContext, useEffect, useMemo } from "react";
import { DomainContext, IDomainContext } from "../../../context/domain.context";

export const DrawControl = () => {
  const map = useMap();
  const { isMapDrawable } = useContext<IDomainContext>(DomainContext);

  const drawControl = useMemo(
    () =>
      new L.Control.Draw({
        draw: {
          circle: {
            metric: true,
            showRadius: true,
          },
          marker: {},
          polygon: { metric: true, allowIntersection: false },
          polyline: { metric: true, allowIntersection: false },
          rectangle: { metric: true },
        },
        position: "topright",
      }),
    []
  );

  useEffect(() => {
    if (isMapDrawable) {
      map.addControl(drawControl);
    } else {
      map.removeControl(drawControl);
    }
  }, [isMapDrawable]);

  return null;
};
