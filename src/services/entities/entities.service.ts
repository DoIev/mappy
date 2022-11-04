import MOCKS from "../../mocks/entities.json";
import { IEntity } from "../../models/entity.model";

export class EntitiesService {
  public getAllEntities(): IEntity[] {
    return MOCKS;
  }
}
