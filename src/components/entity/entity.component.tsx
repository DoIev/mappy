import { FC } from "react";

import { IGeography } from "../../models/geography.model";
import { Card } from "../card/card.component";

export interface IEntity {
  name: string;
  description: string;
  creationTime: Date;
  relatedEntities: any[];
  geography: IGeography;
  files: [];
  scope: string;
}

export const EntityCard: FC<IEntity> = ({
  name,
  description,
  creationTime,
  files,
  scope,
}) => {
  return (
    <Card
      header={name}
      info={description}
      fieldsAndValues={[
        {
          displayName: "איזור",
          value: scope,
        },
        {
          displayName: "זמן יצירה",
          value: creationTime,
        },
      ]}
    />
  );
};
