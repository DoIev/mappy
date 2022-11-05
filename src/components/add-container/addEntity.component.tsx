import { FC, useContext } from "react";
import { Button } from "../button/button.component";
import {
  ApplicationContext,
  ApplicationMode,
  IApplicationContext,
} from "../../context/application.context";

export const AddEntityButton: FC = () => {
  const { switchMode } = useContext<IApplicationContext>(ApplicationContext);

  return (
    <Button
      className="add-entity"
      innerContent={"הוסף חדשה"}
      onClick={() => switchMode(ApplicationMode.Add)}
    />
  );
};
