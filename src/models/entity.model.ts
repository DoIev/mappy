import { IGeography } from "./geography.model";

export interface IEntity {
  fields: { [fieldId: string]: IField };
  metadata?: IMetadata;
  id: string;
}

export interface IField {
  displayName: string;
  type: IFieldType;
  value: any;
  metadata?: IMetadata;
}

export interface IMetadata {
  creationTime: Date;
  creatingUser: string;
  updateTime: Date;
  updatingUser: string;
}

export enum IFieldType {
  String = "String",
  Date = "Date",
  Geography = "Geography",
}
