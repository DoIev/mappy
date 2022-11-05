import { FC, useState } from "react";
import { Button } from "../button/button.component";

import "./card.css";

export interface ICardProps {
  header: string;
  info: string;
  files?: [];
  fieldsAndValues?: { displayName: string; value: any }[];
  onClick?: () => void;
  reference?: any;
}

export const Card: FC<ICardProps> = ({
  header,
  info,
  fieldsAndValues,
  onClick,
  reference,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      className="card-wrapper"
      onClick={onClick}
      ref={reference}
      tabIndex={0}
    >
      <div className="card">
        <div className="card-header">{header}</div>
        <div className="card-info">{info}</div>
        <div className="expand-button">הרחב</div>
        {fieldsAndValues &&
          fieldsAndValues.map((fieldAndValue, index: number) => (
            <div key={index} className="card-field-value-pair">
              <div className="card-field">{fieldAndValue.displayName}</div>
              <div className="card-value">{fieldAndValue.value}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
