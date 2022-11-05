import { FC, useContext, useEffect, useMemo, useRef } from "react";
import { DomainContext, IDomainContext } from "../../context/domain.context";
import { IEntity } from "../../models/entity.model";

import { Card } from "../card/card.component";

export const EntityCard: FC<IEntity> = ({ fields, metadata, id }) => {
  const { setFocusedEntityId, focusedEntityId, focusInitiator } =
    useContext<IDomainContext>(DomainContext);

  const ref = useRef<HTMLElement>();

  const fieldsAndValues = useMemo(
    () =>
      Object.keys(fields).map((fieldId: string) => ({
        displayName: fields[fieldId].displayName,
        value: fields[fieldId].value,
      })),
    [fields]
  );

  useEffect(() => {
    if (focusedEntityId !== id) return;
    if (ref.current) {
      ref.current.focus();
    }
  }, [focusedEntityId]);

  return (
    <Card
      reference={ref}
      onClick={() => setFocusedEntityId(id, "Card")}
      header={fields.name.value}
      info={fields.description.value}
      fieldsAndValues={fieldsAndValues}
    />
  );
};
