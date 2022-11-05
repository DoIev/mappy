// @ts-ignore
import { parse, stringify } from "wkt";
import { centroid } from "turf";

export interface IGeographyParser {
  parseTextToGeometry: (geometryAsString: string) => any;
  parseGeometryToText: (geometry: any) => string;
  getCenterOfMass: (geometry: any) => any;
}

export class GeographyParser implements IGeographyParser {
  public parseTextToGeometry(wkt: string): Partial<GeoJSON.GeoJSON> {
    return parse(wkt);
  }

  public parseGeometryToText(geometry: GeoJSON.GeoJSON) {
    return stringify(geometry);
  }

  public getCenterOfMass(geometry: any) {
    return centroid(geometry);
  }
}
