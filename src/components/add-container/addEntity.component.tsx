import { FC, useContext } from "react";
import { Button } from "../button/button.component";
import {
  MappyContext,
  MappyMode,
  IMappyContext,
} from "../../context/mappy.context";

export const AddEntityButton: FC = () => {
  const { switchMode } = useContext<IMappyContext>(MappyContext);

  return (
    <Button
      className="add-entity-button"
      innerContent={"הוסף חדשה"}
      onClick={() => switchMode(MappyMode.Add)}
    />
  );
};
