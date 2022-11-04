import { FC } from "react";

import { EntityCard } from "../../../components/entity/entity.component";
import MOCKS from "../../../mocks/entities.json";

import "./entities.css";

export const EntitiesContainer: FC = () => {
  return (
    <div className="entities-container">
      {MOCKS.map((mock: any, index: number) => (
        <EntityCard {...mock} />
      ))}
    </div>
  );
};
