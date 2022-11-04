import { FC } from "react";
import { Button } from "../../../components/button/button.component";
import { useNavigate } from "react-router-dom";

export const AddEntityButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      className="add-entity"
      innerContent={"הוסף חדשה"}
      onClick={() => navigate("/add")}
    />
  );
};
