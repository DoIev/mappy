// @ts-ignore
import { parse, stringify } from "wkt";

export interface IGeographyParser {
  parseTextToGeometry: (geometryAsString: string) => any;
  parseGeometryToText: (geometry: any) => string;
}

export class GeographyParser implements IGeographyParser {
  public parseTextToGeometry(wkt: string): Partial<GeoJSON.GeoJSON> {
    return parse(wkt);
  }

  public parseGeometryToText(geometry: GeoJSON.GeoJSON) {
    return stringify(geometry);
  }
}
