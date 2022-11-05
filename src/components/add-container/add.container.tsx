import { FC, useContext } from "react";
import { Input } from "../input/input.component";

import { DomainContext, IDomainContext } from "../../context/domain.context";

import "./add.css";

export const AddContainer: FC = () => {
  const { setIsMapDrawable } = useContext<IDomainContext>(DomainContext);

  return (
    <div className="add-container">
      <Input type="text" placeHolder="לדוגמה: המפקד דולב" text="שם משתמש" />
      <Input type="text" placeHolder="לדוגמה: רוסיה" text="איזור" />
      <Input type="text" placeHolder="לדוגמה: הבית של ציפי" text="תיאור" />
      <Input
        onFocus={() => setIsMapDrawable(true)}
        onBlur={() => setIsMapDrawable(false)}
        type="text"
        placeHolder="לדוגמה: הבית של ציפי"
        text="מיקום גיאוגרפי"
      />
    </div>
  );
};
