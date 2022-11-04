import { FC, useContext, useEffect } from "react";

import { EntityCard } from "../../../components/entity/entity.component";
import { DomainContext, IDomainContext } from "../../../context/domain.context";
import "./entities.css";

export const EntitiesContainer: FC = () => {
  const { loadEntities, entities } = useContext<IDomainContext>(DomainContext);

  useEffect(() => {
    loadEntities();
  }, [loadEntities]);

  return (
    <div className="entities-container">
      {entities.map((mock: any, index: number) => (
        <EntityCard key={index} {...mock} />
      ))}
    </div>
  );
};
