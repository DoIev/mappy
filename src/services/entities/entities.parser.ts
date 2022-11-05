import { IGeographyParser } from "./geography.parser";
import { IEntity, IFieldType } from "../../models/entity.model";

export class EntitiesParser {
  constructor(private readonly geographyParser: IGeographyParser) {}

  public parseEntityToGeoJSON(entity: IEntity): GeoJSON.Feature {
    const geographyFieldId = Object.keys(entity.fields).find(
      (fieldId: string) => entity.fields[fieldId].type === IFieldType.Geography
    );
    if (!geographyFieldId) {
      throw new Error("Entity Does not contain Geography!");
    }
    return {
      ...this.geographyParser.parseTextToGeometry(
        entity.fields[geographyFieldId].value
      ),
      properties: { ...entity.fields, entityId: entity.id },
    };
  }

  public parseEntitiesToGeoJSONs(entities: IEntity[]): GeoJSON.Feature[] {
    return entities.map(this.parseEntityToGeoJSON.bind(this));
  }
}
