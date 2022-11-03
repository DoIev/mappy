import { IGeography } from "./geography.model";

export interface IEntity {
  name: string;
  description: string;
  creationTime: Date;
  relatedEntities: any[];
  geography: IGeography;
  files: [];
  scope: string;
}
