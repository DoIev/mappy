import { FC, useContext, useEffect } from "react";

import { DomainContext, IDomainContext } from "../../../context/domain.context";

import "./add.css";

export const AddContainer: FC = () => {
  const {} = useContext<IDomainContext>(DomainContext);

  return <div className="add-container">
    
  </div>;
};
