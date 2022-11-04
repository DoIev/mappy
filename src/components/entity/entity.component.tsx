import { FC, useMemo } from "react";
import { IEntity } from "../../models/entity.model";

import { Card } from "../card/card.component";

export const EntityCard: FC<IEntity> = ({ fields, metadata }) => {
  const fieldsAndValues = useMemo(
    () =>
      Object.keys(fields).map((fieldId: string) => ({
        displayName: fields[fieldId].displayName,
        value: fields[fieldId].value,
      })),
    [fields]
  );

  return (
    <Card
      header={fields.name.value}
      info={fields.description.value}
      fieldsAndValues={fieldsAndValues}
    />
  );
};
