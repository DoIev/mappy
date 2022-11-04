import { FC, useContext, useEffect } from "react";

import { DomainContext, IDomainContext } from "../../../context/domain.context";
import { EntityCard } from "../../../components/entity/entity.component";
import { AddEntityButton } from "./addEntity.component";

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
      <AddEntityButton />
    </div>
  );
};
