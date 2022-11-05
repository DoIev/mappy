import { centroid } from "turf";

export interface IGeographyService {
  getCenterOfMass: (geometry: any) => any;
}

export class GeographyService {
  public getCenterOfMass(geometry: any) {
    return centroid(geometry);
  }
}
