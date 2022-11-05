import { FC, useContext } from "react";
import { Input } from "../input/input.component";

import { DomainContext, IDomainContext } from "../../context/domain.context";

import "./add.css";

export const AddContainer: FC = () => {
  const {} = useContext<IDomainContext>(DomainContext);

  return (
    <div className="add-container">
      <Input type="text" placeHolder="name of" text="שם משתמש" />
    </div>
  );
};
